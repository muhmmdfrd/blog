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
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    [
      "@jsplumb/docusaurus-plugin-statcounter",
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
        googleTagManager: {
          containerId: "GTM-WT9HL7J",
        },
      },
    ],
  ],
  themeConfig: {
    statCounter: {
      projectId: "12857747",
      securityCode: "a7909409",
    },
    metadata: [
      { name: "keywords", content: "blog, story, article about life" },
    ],
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
          title: "Keep in touch with me",
          items: [
            {
              label: "Github",
              href: "https://github.com/muhmmdfrd",
            },
            {
              label: "Facebook",
              href: "https://web.facebook.com/muhmmdfrd",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/bithubby",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/muhmmdfrd_",
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
