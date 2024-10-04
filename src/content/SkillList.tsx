export type Skill = {
  title: string;
  description?: string;
};

export type SkillSet = {
  skills: Skill[];
  name: string;
};

var languages: Skill[] = [
  {
    title: "TypeScript & JavaScript",
    description: "look at this amazing website!",
  },
  {
    title: "Scala",
  },
  {
    title: "Java",
  },
  {
    title: "Python",
  },
  {
    title: "C++",
  },
  {
    title: "Swift",
  },
  {
    title: "C",
  },
];

var frameworks: Skill[] = [
  {
    title: "GraphQL",
  },
  {
    title: "SQL",
  },
  {
    title: "HTML",
  },
  {
    title: "CSS",
  },
  {
    title: "Docker",
  },
  {
    title: "React.js",
  },
];

var cloud: Skill[] = [
  {
    title: "AWS",
    description: "S3, Lambdas, Step Functions",
  },
  {
    title: "Kubernetes",
  },
];

var software: Skill[] = [
  {
    title: "Git",
  },
  {
    title: "Agile",
  },
  {
    title: "Linux",
  },
  {
    title: "Jenkins (CI/CD)",
  },
  {
    title: "ROS 1",
  },
  {
    title: "Akka",
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
