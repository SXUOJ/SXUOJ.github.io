import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  { text: "Api", icon: "discover", link: "/zh/api/Api.md" },
  { 
	text: "Guide",
	icon: "creative", 
	prefix: "/zh/guide/",
	children: ["getting_started.md", "docs.md"],
  },
]);
