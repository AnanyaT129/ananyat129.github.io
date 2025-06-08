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
    title: "TypeScript",
    description: "look at this amazing website!",
    projects: [teslaProject, capstone, woodmacProject, website],
  },
  {
    title: "Scala",
    projects: [teslaProject],
  },
  {
    title: "Java",
    projects: [bulletJournal],
  },
  {
    title: "Python",
    projects: [capstone, machineLearning, myowearable, foodSaver, scrabble],
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
  },
  {
    title: "SQL",
    projects: [teslaProject, woodmacProject],
  },
  {
    title: "HTML",
    projects: [website],
  },
  {
    title: "CSS",
    projects: [website],
  },
];

var frameworks: Skill[] = [
  {
    title: "GraphQL",
    projects: [teslaProject, woodmacProject],
  },
  {
    title: "Docker",
    projects: [woodmacProject],
  },
  {
    title: "React.js",
    projects: [teslaProject, website],
  },
  {
    title: "Akka",
    projects: [teslaProject],
  },
  {
    title: "Node.js",
    projects: [woodmacProject, website],
  },
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
    title: "Kafka",
    projects: [teslaProject],
  },
  {
    title: "Google Firebase",
    projects: [capstone, mobileApp]
  }
];

var software: Skill[] = [
  {
    title: "Git",
    projects: [
      capstone,
      teslaProject,
      woodmacProject,
      bulletJournal,
      website,
      myowearable,
      scrabble,
    ],
  },
  {
    title: "Agile",
    projects: [woodmacProject],
  },
  {
    title: "Jenkins (CI/CD)",
    projects: [woodmacProject],
  },
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
    name: "Languages",
  },
  {
    skills: frameworks,
    name: "Frameworks/Tools",
  },
  {
    skills: cloud,
    name: "Cloud",
  },
  {
    skills: software,
    name: "Software",
  },
];
