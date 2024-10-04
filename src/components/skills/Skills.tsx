import { skillList } from "../../content/SkillList";
import { SkillPopover } from "./SkillPopover";
import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export function Skills() {
  return (
    <Container sx={{ marginTop: 4 }}>
      <p className="text-lg text-gray-700 dark:text-gray-400">Skills</p>
      {Array.from(Array(skillList.length)).map((_, index) => (
        <Stack direction="row" spacing={2}>
          {Array.from(Array(skillList[index].skills.length)).map((_, j) => (
            <Item>
              <SkillPopover skill={skillList[index].skills[j]} />
            </Item>
          ))}
        </Stack>
      ))}
    </Container>
  );
}
