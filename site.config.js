const CONFIG = {
  // profile setting (required)
  profile: {
    name: "IIH",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "ML/BackEnd/FrontEnd developer",
    bio: "안녕하세요.",
    email: "drids5105119@gmail.com",
    linkedin: "iih",
    github: "ds5105119",
    instagram: "",
  },
  projects: [
    {
      name: `tangerinee`,
      href: "https://github.com/tangerinenee/tangerinee",
    },
  ],
  // blog setting (required)
  blog: {
    title: "iihus",
    description: "안녕하세요.",
    scheme: "light", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://www.iihus.com/",
  since: 2024, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: "12878172b63280709a1ad4030a6e476e",
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "ds5105119/blogs",
      "issue-term": "og:title",
      label: "💬 댓글",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600, // revalidate time for [slug], index
}

module.exports = { CONFIG }
