import { Box, Container, Grid2, styled } from "@mui/material";
import { Card } from "flowbite-react";
import { Recently } from "./Recently";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  textAlign: "left",
  flexGrow: 1,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export function Introduction() {
  return (
    <Container>
      <Grid2 container spacing={2} sx={{ p: 2 }}>
        <Grid2 size={12}>
          <Item>
            <Card>
              <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white">
                Hi! I'm Ananya
              </h5>
              <p className="text-lg text-gray-700 dark:text-gray-400">
                I just graduated from Northeastern University majoring in Computer
                Engineering & Computer Science, with minors in math and music
                performance. Through my varied interests, my main goal is to
                create and contribute to products that have real-world impact,
                taking steps towards a data-forward, globalized, and energy
                efficient future.
              </p>
            </Card>
          </Item>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Item>
            <Recently></Recently>
          </Item>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Item>
            <Card
              imgAlt="Ananya Tadigadapa Logo"
              imgSrc="/images/profile.jpg"
              className="border-transparent shadow-none"
            ></Card>
          </Item>
        </Grid2>
      </Grid2>
    </Container>
  );
}
