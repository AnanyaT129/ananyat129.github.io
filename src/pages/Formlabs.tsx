import { Container } from "@mui/material";
import { Foot } from "../components/global/Footer";
import { Header } from "../components/global/Header";
import { FormlabsIntroduction } from "../components/formlabs/FormlabsIntroduction";
import { FormlabsProjects } from "../components/formlabs/FormlabsProjects";

export default function Formlabs() {
  return (
    <div>
      <Header active={1} />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <FormlabsIntroduction></FormlabsIntroduction>
        <FormlabsProjects></FormlabsProjects>
      </Container>
      <Foot />
    </div>
  );
}
