const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'RPG Docs',
  tagline: '',
  url: 'https://github.com/ExvoidNet',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'static/img/ExvoidNetworkPrefix.svg',
  organizationName: 'ExvoidNet', // Usually your GitHub org/user name.
  projectName: 'mcrpg-docs', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    colorMode: {
		defaultMode: 'dark',
		},
    navbar: {
      title: 'RPG Docs',
      logo: {
        alt: 'Logo',
        src: 'static/img/ExvoidNetworkPrefix.png',
      },
      items: [],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Exvoid Network.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
			routeBasePath: '/',
			sidebarPath: require.resolve('./sidebars.js'),
			editUrl: 'https://github.com/ExvoidNet/mcrpg-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
