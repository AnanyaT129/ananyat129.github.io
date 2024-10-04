import { Box, Stack, styled } from "@mui/material";
import { LeadershipCard } from "./LeadershipCard";
import { leaderships } from "../../content/LeadershipHighlights";

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

export function LeadershipHighlights() {
  return (
    <Stack direction="row" spacing={2}>
      {Array.from(Array(leaderships.length)).map((_, index) => (
        <Item>
          <LeadershipCard leadership={leaderships[index]}></LeadershipCard>
        </Item>
      ))}
    </Stack>
  );
}
