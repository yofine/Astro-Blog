import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://yofine.xyz", // replace this with your deployed domain
  author: "Yofine",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "Rethink",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/yofine",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/yofine2js",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@YofineStudio",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "linkedin.com/in/yofine",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yofineliu@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
