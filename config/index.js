const siteMetadata = {
  siteUrl: "https://news.buzzing.cc",
  author: `Buzzing.cc`,
  locale: "zh",
  title: "100年前的今天",
  shortTitle: "100年前",
  description: "用中文浏览100年前的今天小组热门内容",
  keywords: ["buzzing", "100年前的今天", "100年前"],
  telegram: "@buzzingcc",
  telegram_chat_id: "-1001406368978",
  menuLinks: [
    // {
    //   name: "每周精选",
    //   url: "/issues",
    // },
    // {
    //   name: "RSS",
    //   url: "/rss.xml",
    //   prefetch: false,
    // },
  ],
  subscriptions: [
    {
      name: "Twitter @buzzingcc",
      url: "https://twitter.com/buzzingcc",
      external: true,
    },
    {
      name: "Telegram @buzzingcc",
      url: "https://t.me/buzzingcc",
      external: true,
    },
    {
      name: "RSS",
      url: "/rss.xml",
      prefetch: false,
    },
  ],
  social: [
    {
      name: `/r/100yearsago`,
      url: `https://www.reddit.com/r/100yearsago/`,
      external: true,
    },
    {
      name: `Buzzing`,
      url: `https://www.buzzing.cc/`,
      external: true,
    },
  ],
  localize: [
    {
      locale: "en",
      title: `Buzzing on 100 years ago`,
      shortTitle: "Buzz100yearsago",
      description: `See what's buzzing on /r/100yearsago in your native language`,
      keywords: ["buzzing", "100 years ago"],
      menuLinks: [
        // {
        //   name: "Weekly Selection",
        //   url: "/en/issues",
        // },
        // {
        //   name: "RSS",
        //   url: "/en/rss.xml",
        //   prefetch: false,
        // },
      ],
    },
    {
      locale: "zh-Hant",
      title: "100年前的今天",
      shortTitle: "100年前",
      description: "用中文瀏覽100年前的今天小組熱門內容",
      keywords: ["buzzing", "100年前的今天", "100年前"],
      menuLinks: [
        // {
        // name: "每週精選",
        // url: "/zh-Hant/issues",
        // },
        // {
        //   name: "RSS",
        //   url: "/zh-Hant/rss.xml",
        //   prefetch: false,
        // },
      ],
    },
    {
      locale: "ja",
      title:"100年前の今日",
      shortTitle: "100年前",
      description: "人気の100年前の今日を日本語で閲覧",
      keywords: ["buzzing", "100年前の今日", "100年前"],
      menuLinks: []
    }
  ],
};

module.exports = {
  siteMetadata,
};
