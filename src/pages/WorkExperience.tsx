import { Container, Divider } from "@mui/material";
import { Foot } from "../components/global/Footer";
import { Header } from "../components/global/Header";
import { Skills } from "../components/skills/Skills";
import { ResumePDFView } from "../components/skills/ResumePDFView";
import { WorkExperienceList } from "../components/experience/WorkExperienceList";

export function WorkExperience() {
  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <ResumePDFView />
        <Skills />
        <Divider></Divider>
        <WorkExperienceList />
      </Container>
      <Foot />
    </div>
  );
}
