import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { CardOrientation, ProjectCard, ProjectCardInputs } from "./ProjectCard";

export type ProjectGridProps = {
  gridItems: ProjectCardInputs[];
  cardOrientation: CardOrientation;
};

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function ProjectGrid(props: ProjectGridProps) {
  var lengthOfCardMd: number =
    props.cardOrientation === CardOrientation.Horizontal ? 6 : 4;
  var lengthOfCardSm: number =
    props.cardOrientation === CardOrientation.Horizontal ? 12 : 4;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {Array.from(Array(props.gridItems.length)).map((_, index) => (
          <Grid
            key={index}
            size={{ xs: 12, sm: lengthOfCardSm, md: lengthOfCardMd }}
          >
            <Item>
              <ProjectCard
                card={props.gridItems[index]}
                orientation={props.cardOrientation}
              ></ProjectCard>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
