import { WorkDescriptionProps } from "../components/experience/WorkDescriptionDrawer";

export var tesla: WorkDescriptionProps = {
  title: "Tesla",
  position:
    "Distributed systems intern working on full stack cloud software for energy products",
  accomplished:
    `• Designed a new API exposing file history for remote viewing of IoT device settings: Presented and refined protobuf contracts for team review, considered contexts and future applications, and planned required tasks\n
  • Implemented API through the stack by querying multiple sources, aggregating and transforming data in Scala, displaying data with GraphQL and React on a fleetwide monitoring tool, and meeting client needs & deadlines\n
  • Expanded API impact by connecting and querying S3 with Regex matching and deprecating legacy routes\n
  • Created multiple design options for delivering data to a new Mobile App feature; presented tradeoffs to org directors; implemented API contract & handlers and stood up a Kafka stream to a database to capture events\n
  • Improved monitoring visibility for fleet management of 48,000 wall connectors, collaborating across teams\n
  • Ensured successful app deployments using Splunk and Grafana for troubleshooting and end-to-end testing\n`.split(
      "\n",
    ),
  learned: [],
  time: "May - August",
  imgSrc: "/images/teslaLogo.webp",
};

export var woodmac: WorkDescriptionProps = {
  title: "Wood Mackenzie",
  position:
    "Software development co-op working on a full stack dashboard displaying energy data",
  accomplished: `
    • Spearheaded story criteria templating, increased development efficiency and eliminated info delays in sprints\m
    • Expanded GraphQL APIs and TypeScript configurations for React components, adding new widgets and filtering options while maintaining reusability and coding best practices, collaborated with product and design\n
    • Diagnosed and ran AWS lambdas and Step Functions for ETL processes to ClickHouse and OpenSearch\n
    • Hosted developer department-wide meetings resulting in action items to address platform improvements\n`.split(
    "\n",
  ),
  learned: [],
  time: "July - December",
  imgSrc: "/images/woodmacLogo.jpg",
};

export var neural: WorkDescriptionProps = {
  title: "Neural Lab",
  position: "Undergraduate research assistant under Dr. David Rosen",
  accomplished: [
    "Recieved a PEAK Ascent award to pursue research over the summer",
  ],
  learned: [],
  time: "April - June",
  imgSrc: "/images/neural.png",
};
