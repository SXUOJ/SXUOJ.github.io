import { defineUserConfig } from "vuepress";
import theme from "./theme.ts";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "SXUOJ",
      description: "Online Judge Docs",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "SXUOJ",
      description: "Online Judge 文档",
    },
  },

  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
