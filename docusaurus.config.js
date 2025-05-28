// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer"

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "CMC",
    tagline: "Construction Monitoring Consultants",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://go-cmc.com",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "ysageev", // Usually your GitHub org/user name.
    projectName: "cmc-website", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },
    markdown: {
        mermaid: true,
    },
    themes: ["@docusaurus/theme-mermaid"],
    future: {
        experimental_faster: true,
    },
    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: "./sidebars.js",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    //editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ["rss", "atom"],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                    // Useful options to enforce blogging best practices
                    onInlineTags: "warn",
                    onInlineAuthors: "warn",
                    onUntruncatedBlogPosts: "warn",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            }),
        ],
    ],
    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            docs: { sidebar: { autoCollapseCategories: true } },
            image: "img/cmc-icon.svg",
            navbar: {
                title: "CMC",
                logo: {
                    alt: "Construction Monitoring Consultants",
                    src: "img/cmc-icon.svg",
                },
                items: [
                    {
                        to: "about",
                        label: "About",
                        position: "left",
                    },
                    {
                        to: "services",
                        label: "Services",
                        position: "left",
                    },
                    {
                        to: "contact",
                        label: "Contact",
                        position: "left",
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "resourcesPublicSidebar",
                        position: "left",
                        label: "Resources",
                    },
                    // {
                    // 	type: "docSidebar",
                    // 	sidebarId: "resourcesPrivateSidebar",
                    // 	position: "left",
                    // 	label: "Surveyor",
                    // },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Directory",
                        items: [
                            {
                                label: "Contact",
                                href: "/contact",
                            },
                            {
                                label: "About",
                                href: "/about",
                            },
                            {
                                label: "Services",
                                href: "/services",
                            },
                            {
                                label: "Resources",
                                href: "/docs/public/intro",
                            },
                        ],
                    },
                    {
                        title: "Legal",
                        items: [
                            {
                                label: "Terms of Service",
                                href: "/tos",
                            },
                            {
                                label: "Privacy Statement",
                                href: "/privacy",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} CMC, Inc.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
            scripts: ["https://kit.fontawesome.com/9201d8e0d6.js"],
        }),
}

export default config
