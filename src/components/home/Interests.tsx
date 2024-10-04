import { Box, Container, Grid2, styled } from "@mui/material";
import { interests } from "../../content/Interests";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  fontSize: "large",
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export function Interests() {
  return (
    <Container
      sx={{
        minHeight: "fit-content",
        textAlign: "center",
        p: 2,
        marginBottom: 4,
      }}
    >
      <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Interests
      </h5>
      <Box sx={{ flexGrow: 1 }}>
        <Grid2 container spacing={2} sx={{ p: 2 }}>
          {Array.from(Array(interests.length)).map((_, index) => (
            <Grid2 size={{ xs: 12, md: 3 }}>
              <Item>{interests[index]}</Item>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Container>
  );
}
