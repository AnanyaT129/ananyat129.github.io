import * as React from "react";
import { Container } from "@mui/material";
import { Foot } from "../components/global/Footer";
import { Header } from "../components/global/Header";
import { LeadershipHighlights } from "../components/leadership/LeadershipHighlights";

export function Leadership() {
  return (
    <div>
      <Header active={3} />
      <Container maxWidth="lg">
        <LeadershipHighlights></LeadershipHighlights>
      </Container>
      <Foot />
    </div>
  );
}
