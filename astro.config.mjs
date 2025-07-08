// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

const isDev = process.env.NODE_ENV === "development";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      locales: {
        en: {
          label: "English",
          lang: "en",
        },
        es: {
          label: "Español",
          lang: "es",
        },
      },
      defaultLocale: "en",
      title: "Zuno Framework",
      description:
        "Zuno is a minimal C++ web framework focused on speed, simplicity, and full developer control. Learn how to build fast, modular servers with clean and expressive syntax.",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/ZunoFramework/zuno",
        },
      ],
      customCss: ["./src/styles/zuno.css"],
    }),
  ],
});
