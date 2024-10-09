import { WorkTimelineProps } from "../components/experience/WorkTimeline";
import {
  cambridge,
  draper,
  neural,
  river,
  tesla,
  woodmac,
} from "./AllWorkExperiences";

export var RecentWorkExperiences: WorkTimelineProps[] = [
  {
    year: "2024",
    work: [tesla],
  },
  {
    year: "2023",
    work: [woodmac, neural],
  },
];

export var AllWorkExperiences: WorkTimelineProps[] = [
  {
    year: "2024",
    work: [tesla],
  },
  {
    year: "2023",
    work: [woodmac, neural],
  },
  {
    year: "2021",
    work: [river, cambridge],
  },
  {
    year: "2019",
    work: [draper],
  },
];
