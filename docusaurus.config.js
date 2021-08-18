const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'RPG Docs',
  tagline: 'Documentation for Exvoid RPG.',
  url: 'https://mcrpg-docs.exvoid.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/ExvoidNetworkPrefix.svg',
  organizationName: 'ExvoidNet', // Usually your GitHub org/user name.
  projectName: 'mcrpg-docs', // Usually your repo name.
  themeConfig: {
    colorMode: {
		defaultMode: 'dark',
		},
    navbar: {
      title: 'RPG Docs',
      logo: {
        alt: 'Logo',
        src: '/img/ExvoidNetworkPrefix.png',
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
			editUrl: 'https://github.com/ExvoidNet/mcrpg-docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
