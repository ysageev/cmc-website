require("dotenv").config();

const ACCOUNT_ID = process.env.ACCOUNT_ID;
const PROJECTS = ["structwebsite", "cmc-website"];
const API_TOKEN = process.env.CF_API_TOKEN;

const headers = {
  Authorization: `Bearer ${API_TOKEN}`,
  "Content-Type": "application/json",
};

async function cleanupAll() {
  for (const project of PROJECTS) {
    console.log(`\n================================`);
    console.log(`🚀 Starting cleanup for: ${project}`);
    console.log(`================================\n`);

    const BASE_URL = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/pages/projects/${project}/deployments`;

    let page = 1;
    let allDeployments = [];
    let hasMore = true;

    // Step 1: Fetch ALL deployments
    while (hasMore) {
      const res = await fetch(`${BASE_URL}?page=${page}&per_page=25`, { headers });
      const data = await res.json();

      if (!data.success) {
        console.error(`❌ Failed to fetch API for ${project}:`, data.errors);
        break; // Stop this project, but let the loop continue to the next project
      }

      allDeployments.push(...data.result);

      if (page >= data.result_info.total_pages || data.result.length === 0) {
        hasMore = false;
      } else {
        page++;
      }
    }

    console.log(`Found ${allDeployments.length} total deployments for ${project}.`);

    let productionKept = 0;
    const MAX_PRODUCTION_TO_KEEP = 5;

    // Step 2: Loop through and delete
    for (const dep of allDeployments) {
      if (dep.environment === "production") {
        productionKept++;
        if (productionKept <= MAX_PRODUCTION_TO_KEEP) {
          console.log(
            `🛡️  Keeping production deployment ${productionKept}/${MAX_PRODUCTION_TO_KEEP}: ${dep.id}`,
          );
          continue;
        }
      }

      console.log(`🗑️  Deleting ${dep.environment} deployment: ${dep.id}...`);
      const delRes = await fetch(`${BASE_URL}/${dep.id}?force=true`, { method: "DELETE", headers });

      if (delRes.ok) {
        console.log(`   ✅ Success`);
      } else {
        console.log(`   ❌ Failed`);
      }

      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }

  console.log("\n🎉 All projects cleaned up!");
}

cleanupAll();
