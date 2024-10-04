import { ProjectCardInputs } from "../components/project/ProjectCard";
import {
  mobileApp,
  machineLearning,
  bulletJournal,
  myowearable,
  foodSaver,
  website,
  scrabble,
} from "./AllProjects";

export type DividedList = {
  name: string;
  items: ProjectCardInputs[];
};

export var allProjects: ProjectCardInputs[] = [
  mobileApp,
  machineLearning,
  bulletJournal,
  myowearable,
  foodSaver,
  website,
  scrabble,
];

export var publications: ProjectCardInputs[] = [myowearable, foodSaver];

export var years: DividedList[] = [
  {
    name: "2024",
    items: [mobileApp, machineLearning, website],
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
    name: "Machine Learning",
    items: [machineLearning],
  },
];
