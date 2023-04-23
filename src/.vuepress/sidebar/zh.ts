import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "Api",
      icon: "note",
      prefix: "api/",
      link: "api/api.md",
      children: "structure",
    },
    {
      text: "Guide",
      icon: "discover",
      prefix: "guide/",
      children: "structure",
    },
  ],
});
