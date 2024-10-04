import { WorkTimelineProps } from "../components/experience/WorkTimeline";
import { neural, tesla, woodmac } from "./AllWorkExperiences";

export var AllWorkExperiences: WorkTimelineProps[] = [
  {
    year: "2024",
    work: [tesla],
  },
  {
    year: "2023",
    work: [woodmac, neural],
  },
];
