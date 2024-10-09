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
  machineLearning,
  website,
  myowearable,
  bulletJournal,
  foodSaver,
  scrabble,
];

export var ongoingProjects: ProjectCardInputs[] = [capstone, mobileApp];

export var publications: ProjectCardInputs[] = [myowearable, foodSaver];

export var years: DividedList[] = [
  {
    name: "2024",
    items: [capstone, machineLearning, website, mobileApp],
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
    name: "Machine Learning/Computer Vision",
    items: [capstone, machineLearning],
  },
  {
    name: "Full-stack engineering",
    items: [website, bulletJournal, scrabble],
  },
  {
    name: "Embedded/Programming Hardware",
    items: [capstone, myowearable, foodSaver],
  },
];
