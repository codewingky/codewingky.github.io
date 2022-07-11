import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://ky.codewing.cn",

  author: {
    name: "Mr.Ying",
    url: "https://ky.codewing.cn",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "考研人的笔记",

  displayFooter: true,

  copyright: "Copyright © 2022-present Mr.Ying",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "一个积极向上的考研人",
    intro: "/intro.html",
    medias: {
      Email: "mailto:zhangying458@126.com",
    },
  },


  plugins: {
    blog: {
      autoExcerpt: true,
    },

    mdEnhance: {
      align: true,
      sub: true,
      sup: true,
      imageMark: true,
      tex: true,
    },

  },
});
