# Nuxt Boilerplate / Nuxt starter

Kickstart Your Nuxt Project – Preconfigured, Optimized, Ready to Code, Zero config!

Ready-to-use framework for Nuxt projects, pre-configured framework with essential libraries and tools, streamlining development and ensuring a clean, structured codebase. 🚀

## Features

- [x]  🚀 **Nuxt 3** - Powerful Vue.js framework with high performance
  - [x] Support upgrade Nuxt 4
  - [x] [New directory structure](#project-structure)
- [x] 📐 **NuxtUI** - Fully styled and customizable components for Nuxt
  - [x] Upgrade v3
- [x] 🎨 **TailwindCSS** - Utility-first CSS framework for rapid design
  - [x] Support upgrade Tailwind v4 
- [x] 🔍 **SEO Friendly** - Optimized for search engines
- [x] 🌐 **i18n** - Multilingual support
  - [x] English
  - [x] Vietnamese
- [x] 🔐 **Authentication** - Built-in authentication system (Next-auth)
- [x] 📊 **Pinia** - Global state management
- [x] 📝 **Form Validation** - Input data validation
- [x] 🛠 **VueUse** - Collection of Essential Vue Composition Utilities
- [x] 🪄 **ESLint** - All-in-one ESLint integration for Nuxt
- [ ] 📱 **Responsive Design** - Compatible with all devices
- [ ] 🧪 **Testing** - Vitest support for unit and integration tests
- [ ] 📦 **API Integration** - Easy API integration

## System Requirements

- Node.js 18.x or higher
- npm or yarn or pnpm (recommend)

## Installation

```bash
# Clone repository
git clone https://github.com/heydayle/nuxt-boilerplate.git
cd nuxt-boilerplate

# Install dependencies
pnpm install
```

## Usage

### Development Environment
Duplicate `example.env` and rename to `.env` and run:

```bash
# Start development server
pnpm dev
```

Access the application at `http://localhost:3000`

### Production Build

```bash
# Build for production
pnpm build

# Run the built application
pnpm start
```

## Project Structure

``` bash
nuxt-boilerplate/
    ├── app/
    │    ├── assets/            # Static assets (css, images, fonts, etc.)
    │    ├── components/        # Reusable Vue components
    │    ├── composables/       # Vue composables
    │    ├── layouts/           # Page layouts
    │    ├── middleware/        # Nuxt middleware
    │    ├── pages/             # Application pages
    │    │      └── index.vue   # Homepage
    │    ├── plugins/           # Nuxt plugins
    │    ├── utils/             # Utility functions
    │    ├── app.config.ts      # App configuration
    │    └── app.vue            # App root
    ├── i18n/                   # i18n 
    │    └── locales/           # Language json
    ├── content/                # Nuxt Content files
    ├── public/                 # Public static files
    ├── server/                 # Server API endpoints and middleware
    ├── stores/                 # Pinia stores
    ├── .env                    # Environment variables
    ├── content.config.ts       # Nuxt Content configuration
    ├── nuxt.config.ts          # Nuxt configuration
    ├── README.md               
    └── tsconfig.json           # TypeScript configuration
```

## Contributing

We welcome all contributions to improve this project!

### How to Contribute

1. Fork this repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines

- Ensure your code follows the project's naming conventions and formatting
- Add tests for any new features or bug fixes if possible
- Update documentation when necessary
- Describe your changes in detail in the Pull Request

## License

This project is distributed under the MIT License. See the `LICENSE` file for more information.

## Contact

- GitHub: [heydayle](https://github.com/heydayle)
- Website: [Thinh Le](https://thinh.io.vn)

---

Built with ❤️ by [heydayle](https://github.com/heydayle)
