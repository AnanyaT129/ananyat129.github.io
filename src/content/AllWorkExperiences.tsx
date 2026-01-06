import { WorkDescriptionProps } from "../components/experience/WorkDescriptionDrawer";

export var tesla: WorkDescriptionProps = {
  title: "Tesla",
  position:
    "Distributed systems engineer working on full stack cloud software for energy products",
  accomplished: `
  • Designed and implemented a Scala-based API for industrial firmware updates, streamlining approval workflows for 100% of industrial customers and enabling end-to-end visibility for Service Engineering teams.\n
  • Delivered the first UI-based progress tracking for industrial firmware updates by integrating the API into a Ruby on Rails application owned by a separate team, establishing precedent for cross-team code contributions.\n
  • Executed the migration of 10+ applications from AWS to on-premise infrastructure, including Kafka relays, legacy Golang services, and mission-critical systems requiring near-zero downtime.\n
  • Planned and performed two database migrations from AWS to on-prem CNPG with scheduled downtime.\n
  • Coordinated stakeholder communications, defined execution sequencing, mitigated regionalization impact, improved alerting, and documented followups to ensure successful application and database cutovers.\n
  • Serve on the team’s 24/7 on-call rotation, responding to production incidents and restoring service under time pressure through rapid triage and root cause analysis.\n
  • Produce and present concise incident documentation, including timelines, impact assessments, and actionable followups, and own remediation items to drive operational improvements.\n`.split("\n",)
  ,
  learned: [],
  time: "July - Present",
  imgSrc: "/images/teslaLogo.webp",
};

export var teslaInternship: WorkDescriptionProps = {
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

export var river: WorkDescriptionProps = {
  title: "RiVER Lab",
  position: "Summer Lab Volunteer",
  accomplished: [],
  learned: [],
  time: "June - August",
  imgSrc: "/images/river.jpg",
};

export var draper: WorkDescriptionProps = {
  title: "Charles Stark Draper Lab",
  position: "High School Intern",
  accomplished: [],
  learned: [],
  time: "July - August",
  imgSrc: "/images/draper.png",
};

export var cambridge: WorkDescriptionProps = {
  title: "Cambridge Math Circle",
  position: "Math Teacher",
  accomplished: [],
  learned: [],
  time: "January - December",
  imgSrc: "/images/cmc.jpg",
};
