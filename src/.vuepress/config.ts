import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Ying's Notes",
  description: "一个考研人的笔记",

  base: "/",

  theme,
});
