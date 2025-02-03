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

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: "./sidebars.js",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
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
	//<img src="/img/map-marker.png" style="width:20px;"/>
	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			docs: { sidebar: { autoCollapseCategories: true } },
			image: "img/cmc-icon.png",
			navbar: {
				title: "CMC",
				logo: {
					alt: "Construction Monitoring Consultants",
					src: "img/cmc-icon.png",
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
					// {
					// 	to: "resources",
					// 	label: "Resources",
					// 	position: "left",
					// },
					{
						type: "docSidebar",
						sidebarId: "resourcesSidebar",
						position: "left",
						label: "Resources",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Contact",
						items: [
							{
								html: `
										<div style="font-size:1em;">
											<i class="fa-thin fa-location-dot" style="margin-top:5px;"/>
											<a href="https://maps.app.goo.gl/8Zin2gwTQMMo3hkG6" style="float:right;font-family:Lexend;font-weight:normal;width:200px;line-height:1.3;padding-left: 10px;">
												<br/>
												CMC
												<br/>
												4955 North Bailey Ave
												<br/>
												Suite 217
												<br/>
												Amherst, NY  14226
											</a>
										</div>`,
							},
							{
								html: `<div style="width:200px;font-size:1em;margin-top:10px;clear:both;">
											<div style="float:left;">
												<i class="fa-thin fa-envelope"></i>
											</div>
											<a href="mailto:info@go-cmc.com" style="font-family:Lexend;font-weight:normal;float:left;width:160px;padding-left: 10px;">
												info@go-cmc.com
											</a>
										</div>`,
							},
							{
								html: `<div style="width:200px;font-size:1em;margin-top:10px;clear:both;">
											<div style="float:left;">
												<i class="fa-thin fa-phone"></i>
											</div>
											<a href="tel:7169894417" style="font-family:Lexend;font-weight:normal;float:left;width:160px;padding-left: 10px;">
												(716) 989-4417
											</a>
										</div>`,
							},
							{
								html: `<div style="width:200px;font-size:1em;margin-top:10px;clear:both;">
											<div style="float:left;">
												<i class="fa-brands fa-linkedin"></i>
											</div>
											<a href="https://www.linkedin.com/company/cmc-monitoring" target="_blank" style="font-family:Lexend;font-weight:normal;float:left;width:160px;padding-left: 10px;">
												LinkedIn
											</a>
										</div>`,
							},
						],
					},
					{
						title: "Directory",
						items: [
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
								href: "/resources",
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
