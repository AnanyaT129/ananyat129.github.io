import { Container, Divider } from "@mui/material";
import { RecentEventsTimeline } from "./RecentEventsTimeline";

export function Recently() {
  return (
    <Container maxWidth="xs">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        What I've been up to recently...
      </h5>
      <Divider sx={{ marginTop: 2, marginBottom: 2 }}></Divider>
      <RecentEventsTimeline></RecentEventsTimeline>
    </Container>
  );
}
