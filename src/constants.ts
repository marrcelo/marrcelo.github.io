import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import { SITE } from "@/config";
import type { Props } from "astro";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/marrcelo",
    linkTitle: `${SITE.title} on GitHub`,
    icon: IconGitHub,
  },
  // {
  //   name: "X",
  //   href: "https://x.com/username",
  //   linkTitle: `${SITE.title} on X`,
  //   icon: IconBrandX,
  // },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/marrcelo/",
    linkTitle: `${SITE.title} on LinkedIn`,
    icon: IconLinkedin,
  },
  // {
  //   name: "Mail",
  //   href: "mailto:yourmail@gmail.com",
  //   linkTitle: `Send an email to ${SITE.title}`,
  //   icon: IconMail,
  // },
] as const;

export const SHARE_LINKS: Social[] = [
  // {
  //   name: "WhatsApp",
  //   href: "https://wa.me/?text=",
  //   linkTitle: `Share this post via WhatsApp`,
  //   icon: IconWhatsapp,
  // },
  // {
  //   name: "Facebook",
  //   href: "https://www.facebook.com/sharer.php?u=",
  //   linkTitle: `Share this post on Facebook`,
  //   icon: IconFacebook,
  // },
  // {
  //   name: "X",
  //   href: "https://x.com/intent/post?url=",
  //   linkTitle: `Share this post on X`,
  //   icon: IconBrandX,
  // },
  // {
  //   name: "Telegram",
  //   href: "https://t.me/share/url?url=",
  //   linkTitle: `Share this post via Telegram`,
  //   icon: IconTelegram,
  // },
  // {
  //   name: "Pinterest",
  //   href: "https://pinterest.com/pin/create/button/?url=",
  //   linkTitle: `Share this post on Pinterest`,
  //   icon: IconPinterest,
  // },
  // {
  //   name: "Mail",
  //   href: "mailto:?subject=See%20this%20post&body=",
  //   linkTitle: `Share this post via email`,
  //   icon: IconMail,
  // },
] as const;
