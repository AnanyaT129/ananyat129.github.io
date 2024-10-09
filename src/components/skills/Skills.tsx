import { skillList } from "../../content/SkillList";
import { SkillPopover } from "./SkillPopover";
import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Container, Divider } from "@mui/material";

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
    <Container sx={{ marginTop: 4, marginBottom: 4 }}>
      <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Skills
      </h5>
      {Array.from(Array(skillList.length)).map((_, index) => (
        <>
          <Divider>{skillList[index].name}</Divider>
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 2 }}
            useFlexGap
            sx={{ flexWrap: "wrap" }}
          >
            {Array.from(Array(skillList[index].skills.length)).map((_, j) => (
              <Item>
                <SkillPopover skill={skillList[index].skills[j]} />
              </Item>
            ))}
          </Stack>
        </>
      ))}
    </Container>
  );
}
