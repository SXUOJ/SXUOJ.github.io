import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Api",
      icon: "note",
      prefix: "api/",
      link: "api/Api.md",
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
