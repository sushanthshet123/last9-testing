import {
  BookmarkAltIcon,
  CalendarIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  SupportIcon,
} from "@heroicons/react/outline"

export const links = [
  {
    id: 1,
    network: "twitter",
    url: "https://twitter.com/meeshotech",
    name: "Twitter",
  },
  {
    id: 2,
    network: "instagram",
    url: "https://www.instagram.com/lifeatmeesho/",
    name: "Instagram",
  },
  {
    id: 3,
    network: "linkedin",
    url: "https://www.linkedin.com/company/meesho",
    name: "LinkedIn",
  },
  {
    id: 4,
    network: "youtube",
    url: "https://www.youtube.com/channel/UCc9-3-v9Jdzp7_0oGb5YeBA",
    name: "YouTube",
  },
]

export const tags = [
  { name: "SRE", slug: "sre" },
  { name: "SLO", slug: "slo" },
  { name: "Deep Dives", slug: "deep-dives" },
  { name: "Last9 Engineering", slug: "last9-engineering" },
]

export const authorSocialLinks = [
  {
    id: 1,
    network: "facebook",
    link: "https://www.facebook.com/",
  },
  {
    id: 2,
    network: "twitter",
    link: "https://twitter.com/",
  },
]

export const products = [
  {
    name: "Levitate",
    description: "Time series database built to manage scale",
    href: "/products/levitate",
    icon: "/header/levitate.svg",
  },
  {
    name: "Compass",
    description: "Reliability to the last9 with Compass ",
    href: "/products/compass",
    icon: "/header/compass.svg",
  },
]
export const navigation = [
  { name: "Blog", href: "/blog", icon: PlayIcon },
  { name: "The Team", href: "/team", icon: PhoneIcon },
]

export const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
]
