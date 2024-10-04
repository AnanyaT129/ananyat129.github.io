import { Container, Divider } from "@mui/material";
import { Foot } from "../components/global/Footer";
import { Header } from "../components/global/Header";
import { WorkExperienceList } from "../components/experience/WorkExperienceList";
import { AllWorkExperiences } from "../content/WorkExperienceList";

export function WorkExperience() {
  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <WorkExperienceList work={AllWorkExperiences} button="Back" link="/"/>
      </Container>
      <Foot />
    </div>
  );
}
