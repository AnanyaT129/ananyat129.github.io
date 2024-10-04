import { Box, Container, Grid2, styled } from "@mui/material";
import { FeaturedWorkCard } from "./FeaturedWorkCard";
import { featured } from "../../content/Featured";

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

export function FeaturedWork() {
  return (
    <Container
      sx={{
        minHeight: "fit-content",
        p: 2,
        marginBottom: 4,
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid2 container spacing={2} sx={{ p: 2 }}>
          {Array.from(Array(featured.length)).map((_, index) => (
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Item>
                <FeaturedWorkCard
                  title={featured[index].title}
                  src={featured[index].src}
                  alt={featured[index].alt}
                  subtitle={featured[index].subtitle}
                  description={featured[index].description}
                ></FeaturedWorkCard>
              </Item>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Container>
  );
}
