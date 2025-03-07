export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'cool'
  },
  app: {
    version: 'v0.0.1-alpha',
    meta: {
      title: 'Nuxt Boilerplate',
      description: 'Nuxt Starter with Vite',
      keywords: 'nuxt, vite, starter'
    },
    socials: [
      {
        name: 'Github',
        icon: 'simple-icons:github',
        href: 'https://github.com/heydayle/nuxt-boilerplate-v3'
      },
    ],
    headers: {
      heading: 'Nuxt Starter',
      logo: "/logo.svg",
      navigation: [
        {
          name: "get-started",
          label: "nav.docs",
          path: "/get-started",
        },
        {
          name: "contact",
          label: "nav.contact",
          path: "/contact",
        },
      ]
    },
    features: [
      {
        label: "Next Auth",
        icon: "fluent-color:shield-checkmark-20",
      },
      {
        label: "Pinia",
        icon: "logos:pinia",
      },
      {
        label: "NuxtUI",
        icon: "vscode-icons:file-type-nuxt",
      },
      {
        label: "TailwindCSS",
        icon: "vscode-icons:file-type-tailwind",
      },
      {
        label: "Axios",
        icon: "simple-icons:axios",
      },
      {
        label: "i18n",
        icon: "ic:round-translate",
      },
      {
        label: "Lint",
        icon: "logos:eslint",
      },
      {
        label: "Vueuse",
        icon: "logos:vueuse",
      },
    ],
    documents: {
      sidebars: [
        {
          name: 'get-started',
          icon: 'lineicons:rocket-5',
          label: 'Get started'
        },
        {
          name: 'get-started-installation',
          icon: 'material-symbols:power-settings-new-outline',
          label: 'Installation'
        },
        {
          name: 'get-started-configuration',
          icon: 'icon-park-outline:config',
          label: 'Configuration'
        }
      ]
    }
  }
})
