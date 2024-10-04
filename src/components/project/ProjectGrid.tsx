import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { ProjectCard, ProjectCardInputs } from "./ProjectCard";

export type ProjectGridProps = {
  gridItems: ProjectCardInputs[];
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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(props.gridItems.length)).map((_, index) => (
          <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
            <Item>
              <ProjectCard {...props.gridItems[index]}></ProjectCard>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
