// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bithubby Blog",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",
  url: "https://bithubby.vercel.app",
  baseUrl: "/",
  organizationName: "muhmmdfrd",
  projectName: "bithubby",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "id",
    locales: ["id"],
  },
  plugins: [
    [
      "./plugins/blog-plugin",
      {
        id: "blog",
        routeBasePath: "blog",
        path: "./blog",
      },
    ],
  ],
  presets: [
    [
      "classic",
      {
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Bithubby",
      logo: {
        alt: "Bithubby Logo",
        src: "img/logo.svg",
      },
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bithubby`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
