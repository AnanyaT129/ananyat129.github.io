import { ProjectCardInputs } from "../components/project/ProjectCard";
import {
  mobileApp,
  machineLearning,
  bulletJournal,
  myowearable,
  foodSaver,
  website,
  scrabble,
  capstone,
} from "./AllProjects";

export type DividedList = {
  name: string;
  items: ProjectCardInputs[];
};

export var allProjects: ProjectCardInputs[] = [
  capstone,
  mobileApp,
  machineLearning,
  website,
  myowearable,
  bulletJournal,
  foodSaver,
  scrabble,
];

export var ongoingProjects: ProjectCardInputs[] = [];

export var publications: ProjectCardInputs[] = [myowearable, foodSaver];

export var years: DividedList[] = [
  {
    name: "2025",
    items: [capstone]
  },
  {
    name: "2024",
    items: [machineLearning, website, mobileApp],
  },
  {
    name: "2023",
    items: [bulletJournal],
  },
  {
    name: "2022",
    items: [myowearable, foodSaver, scrabble],
  },
];

export var topics: DividedList[] = [
  {
    name: "Full-stack engineering",
    items: [website, bulletJournal, scrabble],
  },
  {
    name: "Embedded/Programming Hardware",
    items: [capstone, myowearable, foodSaver],
  },
  {
    name: "Machine Learning/Computer Vision",
    items: [machineLearning],
  },
];
