import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'DynaGuide',
  tagline: 'Documentação técnica dinâmica e interativa',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://dynatools.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/dynaguide/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DynaTools', // Usually your GitHub org/user name.
  projectName: 'dynaguide', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'it'],
    localeConfigs: {
      'pt-BR': {
        label: 'Português',
        direction: 'ltr',
        htmlLang: 'pt-BR',
      },
      'it': {
        label: 'Italiano',
        direction: 'ltr',
        htmlLang: 'it',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          sidebarCollapsed: false,
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/DynaTools/dynaguide/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    './plugins/auto-locale-detection.js',
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'DynaGuide',
      logo: {
        alt: 'DynaGuide Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Visão Geral',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              type: 'html',
              value: '<hr style="margin: 0.3rem 0;">',
            },
            {
              href: 'https://github.com/DynaTools/dynaguide/issues',
              label: 'Ajudar na tradução',
            },
          ],
        },
        {
          href: 'https://github.com/DynaTools/dynaguide',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Visão Geral',
              to: '/',
            },
            {
              label: 'Fundamentos de IA',
              to: '/category/fundamentos-de-ia',
            },
            {
              label: 'Prompts',
              to: '/category/engenharia-de-prompt',
            },
          ],
        },
        {
          title: 'Comunidade',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://it.linkedin.com/in/paulogiavoni',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/DynaTools/dynaguide',
            },
          ],
        },
        {
          title: 'Mais',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/DynaTools/dynaguide',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DynaTools. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
