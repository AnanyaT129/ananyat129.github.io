import { ProjectCardInputs } from "../components/project/ProjectCard";
import {
  bulletJournal,
  capstone,
  foodSaver,
  machineLearning,
  mobileApp,
  myowearable,
  scrabble,
  teslaProject,
  website,
  woodmacProject,
} from "./AllProjects";

export type Skill = {
  title: string;
  description?: string;
  projects: ProjectCardInputs[];
};

export type SkillSet = {
  skills: Skill[];
  name: string;
  color?: string;
};

var languages: Skill[] = [
  {
    title: "Scala",
    projects: [teslaProject],
  },
  {
    title: "TypeScript",
    description: "look at this amazing website!",
    projects: [teslaProject, capstone, woodmacProject, website],
  },
  {
    title: "GraphQL",
    projects: [teslaProject, woodmacProject],
  },
  {
    title: "Python",
    projects: [capstone, machineLearning, myowearable, foodSaver, scrabble],
  },
  {
    title: "Ruby",
    projects: [teslaProject],
  },
  {
    title: "SQL",
    projects: [teslaProject, woodmacProject],
  },
  {
    title: "Java",
    projects: [bulletJournal],
  },
  {
    title: "C++",
    projects: [myowearable],
  },
  {
    title: "Swift",
    projects: [mobileApp],
  },
  {
    title: "C",
    projects: [],
  }
];

var frameworks: Skill[] = [
  {
    title: "Apache Kafka",
    projects: [teslaProject],
  },
  {
    title: "React.js",
    projects: [teslaProject, capstone, website, woodmacProject],
  },
  {
    title: "Akka",
    projects: [teslaProject],
  },
  {
    title: "Rails",
    projects: [teslaProject],
  },
  {
    title: "Node.js",
    projects: [woodmacProject, website],
  },
  {
    title: "Google Firebase",
    projects: [capstone, mobileApp]
  },
  {
    title: "Cloud Native PostgreSQL",
    projects: [teslaProject],
  },
  {
    title: "Google Protobuf",
    projects: [teslaProject],
  }
];

var cloud: Skill[] = [
  {
    title: "AWS S3",
    projects: [teslaProject],
  },
  {
    title: "AWS Lambdas",
    projects: [woodmacProject],
  },
  {
    title: "AWS Step Functions",
    projects: [woodmacProject],
  },
  {
    title: "Kubernetes",
    projects: [teslaProject],
  },
  {
    title: "Docker",
    projects: [woodmacProject],
  },
  {
    title: "Infrastructure as Code",
    projects: [teslaProject],
  },
  {
    title: "Splunk",
    projects: [teslaProject, woodmacProject],
  },
  {
    title: "Grafana",
    projects: [teslaProject],
  },
  {
    title: "Jenkins (CI/CD)",
    projects: [woodmacProject],
  },
];

var embedded: Skill[] = [
  {
    title: "Linux",
    projects: [],
  },
  {
    title: "ROS 1",
    projects: [],
  },
  {
    title: "Arduino/Raspberry Pi",
    projects: [capstone, myowearable, foodSaver],
  },
];

export var skillList: SkillSet[] = [
  {
    skills: languages,
    name: "Programming and Qeuery Languages",
  },
  {
    skills: frameworks,
    name: "Frameworks, Runtimes, and Data",
  },
  {
    skills: cloud,
    name: "Cloud, DevOps, and Observability",
  },
  {
    skills: embedded,
    name: "Embedded Systems and Robotics",
  },
];
