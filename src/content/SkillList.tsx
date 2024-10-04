import { ProjectCardInputs } from "../components/project/ProjectCard";
import { bulletJournal, website } from "./AllProjects";

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
    title: "TypeScript & JavaScript",
    description: "look at this amazing website!",
    projects: [website],
  },
  {
    title: "Scala",
    projects: [],
  },
  {
    title: "Java",
    projects: [bulletJournal],
  },
  {
    title: "Python",
    projects: [],
  },
  {
    title: "C++",
    projects: [],
  },
  {
    title: "Swift",
    projects: [],
  },
  {
    title: "C",
    projects: [],
  },
];

var frameworks: Skill[] = [
  {
    title: "GraphQL",
    projects: [],
  },
  {
    title: "SQL",
    projects: [],
  },
  {
    title: "HTML",
    projects: [],
  },
  {
    title: "CSS",
    projects: [],
  },
  {
    title: "Docker",
    projects: [],
  },
  {
    title: "React.js",
    projects: [],
  },
];

var cloud: Skill[] = [
  {
    title: "AWS",
    description: "S3, Lambdas, Step Functions",
    projects: [],
  },
  {
    title: "Kubernetes",
    projects: [],
  },
];

var software: Skill[] = [
  {
    title: "Git",
    projects: [],
  },
  {
    title: "Agile",
    projects: [],
  },
  {
    title: "Linux",
    projects: [],
  },
  {
    title: "Jenkins (CI/CD)",
    projects: [],
  },
  {
    title: "ROS 1",
    projects: [],
  },
  {
    title: "Akka",
    projects: [],
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
