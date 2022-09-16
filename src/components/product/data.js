/* eslint-disable react/react-in-jsx-scope */
import React from "react"
import KillingAlert from "../../assets/killing-alert.svg"
import PromiseLand from "./svg/compass/promiseLand"
import OperationalTail from "./svg/levitate/operationalTail"
import HighCardinality from "../../assets/high-cardinality.svg"
import Metrics from "../../assets/metric-storage.svg"
import OneChangeBoard from "../../assets/one-changeBoard.svg"
import ChangeIntelligence from "../../assets/change-intelligence.svg"


/* eslint-disable max-len */

export const metricsData = [
  {
    legacyserverheading: "High Cardinality",
    legacyserverdescription: "High cardinality labels are impossible to analyze, constantly crashing Prometheus. This limits the insights that can be gathered to successfully triage & resolve an incident.",
    last9heading: "Solves High Cardinality",
    scrollStart: "700",
    lastdescription: "Levitate is built to handle massive scales of data, and can handle queries at any cardinality. Above all, it gives you real-time insights into what metrics are unused",
    arrow: "/img/products/right_arrow.svg",
    illustration: "/img/products/high_cardinality.svg",
    horizontalborder: true,
    state: "magicSectionIsVisible",
    ref: "magicSectionRef",
    svg: <HighCardinality />,
    id: 1
  },
  {
    legacyserverheading: "Metric storage costs",
    legacyserverdescription: "<p>The explosion of services & infrastructure leads to the immense growth of metrics stored for monitoring. The cost of storage, amortisation, and data transfers, quickly spiral out of control.</p> <p>This also results in accumulating unwanted data - nearly 60% of metrics data is unused, and most cases, useless</p>",
    last9heading: "Pay for what you use, reduce costs",
    scrollStart: "1100",
    lastdescription: "<p>Levitate reduces storage costs by up to 50% compared to similar tsdbs. This is over and above the engineering time, & overheads spent maintaining internal infrastructure.</p> <p>With Levitate data retention policies & tiered storage, you pay for metrics you use. Scale without having to tune configuration, & having to run a whole setup for data scaling. </p>",
    arrow: "/img/products/right_arrow.svg",
    illustration: "/img/products/storage_costs.svg",
    horizontalborder: true,
    state: "magicSectionIsVisible1",
    ref: "magicSectionRef1",
    svg: <Metrics />,
    id: 2
  },
  {
    legacyserverheading: "Operational Toil",
    legacyserverdescription: "<p>To perating Prometheus (and other time-series databases) at scale takes full-time engineering teams to manage machines, multiple instances, data retention, backup & recovery. This toil is an unimaginable hassle.</p> <p>Engineering bandwidth should focus on product, and building features, not setting up Prometheus instances.</p>",
    last9heading: "Increase engineering productivity",
    scrollStart: "1500",
    lastdescription: "<p>Levitate is fully managed. No need to worry about adding more machines, managing replication, or multiple Prometheus instances. Just change the remote-write endpoint of your one, or many tsdbs. A simple UI manages it all.</p> <p>With Levitate, you can resolve incidents faster with decreased querying times, and allow engineering to focus on building product.</p>",
    arrow: "/img/products/right_arrow.svg",
    illustration: "/img/products/engineering_productivity.svg",
    horizontalborder: false,
    state: "magicSectionIsVisible2",
    ref: "magicSectionRef2",
    svg: <OperationalTail />,
    id: 3
  }
]

export const metricsData1 = [
  {
    legacyserverheading: "High Cardinality",
    legacyserverdescription: "High cardinality labels are impossible to analyze, constantly crashing Prometheus. This limits the insights that can be gathered to successfully triage & resolve an incident.",
    last9heading: "Solves High Cardinality",
    scrollStart: "700",
    lastdescription: "Levitate is built to handle massive scales of data, and can handle queries at any cardinality. Above all, it gives you real-time insights into what metrics are unused",
    arrow: "/img/products/right_arrow.svg",
    illustration: "/img/products/high_cardinality.svg",
    horizontalborder: true,
    state: "magicSectionIsVisible",
    ref: "magicSectionRef",
    svg: <HighCardinality />,
    id: 1
  },
  {
    legacyserverheading: "Metric storage costs",
    legacyserverdescription: "<p>The explosion of services & infrastructure leads to the immense growth of metrics stored for monitoring. The cost of storage, amortisation, and data transfers, quickly spiral out of control.</p> <p>This also results in accumulating unwanted data - nearly 60% of metrics data is unused, and most cases, useless</p>",
    last9heading: "Pay for what you use, reduce costs",
    scrollStart: "1100",
    lastdescription: "<p>Levitate reduces storage costs by up to 50% compared to similar tsdbs. This is over and above the engineering time, & overheads spent maintaining internal infrastructure.</p> <p>With Levitate data retention policies & tiered storage, you pay for metrics you use. Scale without having to tune configuration, & having to run a whole setup for data scaling. </p>",
    arrow: "/img/products/right_arrow.svg",
    illustration: "/img/products/storage_costs.svg",
    horizontalborder: true,
    state: "magicSectionIsVisible1",
    ref: "magicSectionRef1",
    svg: <Metrics />,
    id: 2
  },
  {
    legacyserverheading: "Operational Toil",
    legacyserverdescription: "<p>To perating Prometheus (and other time-series databases) at scale takes full-time engineering teams to manage machines, multiple instances, data retention, backup & recovery. This toil is an unimaginable hassle.</p> <p>Engineering bandwidth should focus on product, and building features, not setting up Prometheus instances.</p>",
    last9heading: "Increase engineering productivity",
    scrollStart: "1500",
    lastdescription: "<p>Levitate is fully managed. No need to worry about adding more machines, managing replication, or multiple Prometheus instances. Just change the remote-write endpoint of your one, or many tsdbs. A simple UI manages it all.</p> <p>With Levitate, you can resolve incidents faster with decreased querying times, and allow engineering to focus on building product.</p>",
    arrow: "/img/products/right_arrow.svg",
    illustration: "/img/products/engineering_productivity.svg",
    horizontalborder: false,
    state: "magicSectionIsVisible2",
    ref: "magicSectionRef2",
    svg: <img src="/img/products/engineering_productivity.svg" />,
    id: 3
  }
]


export const metricsDataCompass = [
  {
    legacyserverheading: "Death by Dashboards",
    legacyserverdescription: "<p>Every engineer has their own custom dashboard. The dependency on tribal knowledge to understand dashboards is why every system failure is a puzzle assembling exercise.</p><p>Creating dashboards is easy, finding answers to your questions - impossible.</p>",
    scrollStart: "1200",
    last9heading: "One ChangeBoard",
    lastdescription: "<p>Say NO to tribal knowledge. Service maps, graphs, and health insights make it easy for the whole organization to understand reliability.</p><p>One simple UI to map out your entire service infrastructure and identify service degradations.</p>",
    arrow: "/img/products/right_arrow.svg",
    illustration: "/img/products/one-change-board.svg",
    horizontalborder: true,
    state: "magicSectionIsVisible",
    ref: "magicSectionRef",
    svg: <OneChangeBoard />,
    id: 1
  },
  {
    legacyserverheading: "No smart correlations",
    legacyserverdescription: "<p>Correlations don’t exist in Grafana dashboards. Querying is already slow, and this compounds when you’re trying to identify the source of a breakdown. When you can’t correlate that to different failure points, it takes hours to solve and isolate a simple bug.</p>",
    last9heading: "Change Intelligence",
    scrollStart: "1650",
    lastdescription: "<p>The ability to pinpoint the source of error and correlate it across cascading microservices including third party providers is powerful. This allows Compass to quickly isolate failures with ease.</p><p>With all layers of an infrastructure mapped intuitively, organisations can enable incident response processes end-to-end using Compass.</p>",
    arrow: "/img/products/right_arrow.svg",
    illustration: "/img/products/change-intelligence.svg",
    horizontalborder: true,
    state: "magicSectionIsVisible1",
    ref: "magicSectionRef1",
    svg: <ChangeIntelligence />,
    id: 2
  },
  {
    legacyserverheading: "Abetting the crying wolf",
    legacyserverdescription: "<p>Needless alerts create harmful fatigue in an org. The more trivial alerts you have, higher the chances actual system failures go unanswered.</p> <p>Most alerting rules don’t account for seasonality of spikes, and further compound engineering productivity woes, and adds to chaos for on-call developers</p>",
    last9heading: "Killing alert fatigue",
    scrollStart: "1850",
    lastdescription: "<p>With Change Intelligence, none of our customers use static alerting, because we provide anomaly detection. We factor in seasonality of spikes and determine the right alerts based on historical data. </p> <p>SLO degradation: Create a ticket, don’t alert me.</p><p>SLO break: Page me, so I can fix.</p>",
    arrow: "/img/products/right_arrow.svg",
    illustration: "/img/products/killing-alert.svg",
    horizontalborder: true,
    state: "magicSectionIsVisible2",
    ref: "magicSectionRef2",
    svg: <KillingAlert />,
    id: 3
  },
  {
    legacyserverheading: "SLOs/SLAs",
    legacyserverdescription: "Measuring end customer experiences starts with setting promises within engineering teams. The deeper an org understands engineering health with robust SLOs & SLAs, the deeper the commitment to functions across the org.",
    last9heading: "The promised land",
    scrollStart: "2350",
    lastdescription: "Create SLOs across your teams to measure performance, drive accountability, and hold accountability across the health of the organisation - From engineering, product and customer service.",
    arrow: "/img/products/right_arrow.svg",
    illustration: "/img/products/the-promised-land.svg",
    horizontalborder: false,
    state: "magicSectionIsVisible3",
    ref: "magicSectionRef3",
    svg: <PromiseLand />,
    id: 3
  }
]
