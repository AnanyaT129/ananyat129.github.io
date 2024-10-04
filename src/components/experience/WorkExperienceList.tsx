import { Container } from "@mui/material";
import { AllWorkExperiences } from "../../content/WorkExperienceList";
import { WorkTimeline } from "./WorkTimeline";

export function WorkExperienceList() {
  return (
    <Container sx={{ marginTop: 4 }}>
      <p className="text-lg text-gray-700 dark:text-gray-400">
        Work Experience
      </p>
      <WorkTimeline work={AllWorkExperiences} />
    </Container>
  );
}
