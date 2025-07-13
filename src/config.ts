export const SITE = {
  website: "https://marrcelo.github.io/",
  author: "Marcelo Magalhães",
  profile: "",
  desc: "learning",
  title: "",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 7,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "America/Sao_Paulo", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
