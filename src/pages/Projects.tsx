import { Container } from "@mui/material";
import { Foot } from "../components/global/Footer";
import { Header } from "../components/global/Header";
import { ProjectTabs } from "../components/project/ProjectTabs";

export function Projects() {
  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <ProjectTabs />
      </Container>
      <Foot />
    </div>
  );
}
