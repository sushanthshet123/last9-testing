/* eslint-disable max-len */
export const cardDataBlog = [
  {
    image: "/home/slo.svg",
    description: `You can either love running or hate running, but you will definitely love this analogy - take a fresh look at SLOs!`,
    name: "Observability",
    title: "SLOs eased",
    profile: [{ image: "/home/nishanth-madok.svg" }, { image: "/home/piyush-verma.svg" }],
    profileName: [{ name: "Nishant Modak," }, { name: "Piyush Verma" }],
    time: "4 MIN READ",
    margin: "-mt-6",
    textMargin: "-mt-12",
    href: "/blog/slos-eased/"
  },
  {
    image: "/home/cloud.png",
    description: `Gone are the days of yore when we named are our servers Etsy, Betsy, and Momo, fed them fish, and cleaned their poop.`,
    name: "Observability",
    title: "Services; not Server",
    profile: [{ image: "/home/piyush-verma.svg" }],
    profileName: [{ name: "Piyush Verma" }],
    time: "5 MIN READ",
    margin: "-mt-16",
    textMargin: "mt-12",
    href: "/blog/services-not-server-observability/"
  },
  {
    image: "/home/sre.svg",
    description: `A comparison of all the popular time series databases. Prometheus, Influx, M3Db, Levitate`,
    name: "SRE Tooling",
    title: "Comparing Popular Time Series Databases",
    profile: [{ image: "/home/piyush-verma.svg" }],
    profileName: [{ name: "Piyush Verma" }],
    time: "13 MIN READ",
    margin: "-mt-8",
    textMargin: "-mt-2",
    href: "/blog/time-series-database-comparison/"
  },
]

export const cardData = [
  {
    image: "/home/yield-street.svg",
    description: `“Last9 has helped Yieldstreet identify, track, and understand the
      most important metrics impacting our investors with data our
      microservices services were already generating. We can resolve
      issues faster and reduce our team’s alert fatigue.”`,
    name: "Azret Deljanin",
    profile: "/home/azrett.svg",
    size: "md",
    designation: "VP of Infrastructure & Security",
  },
  {
    image: "/home/disney.svg",
    description: `“Last9 is my Cockpit to streaming to millions.”`,
    name: "Ashutosh Agrawal",
    profile: "/home/ashutosh.svg",
    designation: "Architect – CTO’s Office",
    size: "sm",
  },
]

export const productData = [
  {
    name: "levitate",
    image: "/home/product/levitate-svg.svg",
    logo: "/home/product/levitate-logo.svg",
    orderFirst: "",
    orderLast: "",
    productDetail: {
      title: "Re-thinking observability in the microservices era",
      text: "First, measure what matters.",
      href: "/products/levitate",
      buttonLabel: "Explore Levitate",
      description: `<span class="font-bold">Levitate</span> is a managed Prometheus giving you a better
        picture of your microservices architecture - so you can reduce costs,
        help engineers focus on product, & not worry about scaling your
        systems.`,
    },
  },
  {
    name: "compass",
    image: "/home/product/compass-svg.svg",
    logo: "/home/product/compass-logo.svg",
    orderFirst: "order-last",
    orderLast: "order-first",
    productDetail: {
      title: "Change <br /> Intelligence",
      buttonLabel: "Explore Compass",
      href: "/products/compass",
      text: "Being ‘observable’ means nothing, if we can’t perform actions on it. ",
      description: `<span class="font-bold">Compass</span> helps you create an affirmative action plan to prevent downtimes, reduce mean time to discovery during service degradations, & create policies to help you measure the impact of your service performance. `,
    },
  },
]
