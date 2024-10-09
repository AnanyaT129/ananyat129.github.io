import { ProjectCardInputs } from "../components/project/ProjectCard";

export var tesla: ProjectCardInputs = {
  src: "/images/teslaLogo.webp",
  title: "Tesla",
  year: 2024,
  tech: ["Scala", "TypeScript", "React.js", "Google Protobuf", "GraphQL"],
  subtitle: "Distributed Systems Energy Intern",
  purpose: "",
  authors: "",
  description: "",
  skills: [],
};

export var woodmac: ProjectCardInputs = {
  src: "/images/woodmacLogo.jpg",
  title: "Wood Mackenzie",
  year: 2023,
  tech: ["TypeScript", "GraphQL", "SQL", "AWS"],
  purpose: "",
  authors: "",
  description: "",
  subtitle: "Software Development Co-op",
  skills: [],
};

export var machineLearning: ProjectCardInputs = {
  src: "/images/mlFinal.png",
  title: "Bayesian Neural Networks",
  year: 2024,
  tech: ["Python", "Pandas", "PyTorch"],
  purpose: "Machine Learning Final Project",
  authors: "Group project; detailing my contributions",
  description: "",
  subtitle: "Improving overconfidence and overfitting",
  skills: [],
};

export var bulletJournal: ProjectCardInputs = {
  src: "/images/oodFinal.png",
  title: "Bullet Journal App",
  year: 2023,
  tech: ["Java", "JUnit", "JavaFX"],
  purpose: "Object Oriented Design Final Project",
  authors: "Group project; detailing my contributions",
  description: "",
  subtitle: "Desktop application for an editable bullet journal",
  skills: [],
};

export var projectsForFormlabs: ProjectCardInputs[] = [
  tesla,
  machineLearning,
  woodmac,
  bulletJournal,
];
