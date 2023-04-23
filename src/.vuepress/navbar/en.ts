import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "Api", icon: "discover", link: "/api/Api.md" },
  { 
	text: "Guide",
	icon: "creative", 
	// link: "/guide/getting_started.md"
	prefix: "/guide/",
	children: ["getting_started.md", "docs.md"],
  },
]);
