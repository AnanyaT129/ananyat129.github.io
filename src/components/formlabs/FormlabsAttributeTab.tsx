import { Box, Divider, styled } from "@mui/material";
import FormlabsAttributeCard, {
  FormlabsAttributeCardProps,
} from "./FormlabsAttributeCard";
import Grid from "@mui/material/Grid2";

export type FormlabsAttributeTabProps = {
  name: string;
  items: FormlabsAttributeCardProps[];
};

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export function FormlabsAttributeTab(props: {
  sections: FormlabsAttributeTabProps[];
}) {
  return (
    <>
      {Array.from(Array(props.sections.length)).map((_, index) => (
        <>
          <Divider>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.sections[index].name}
            </h5>
          </Divider>
          <Grid container>
            {Array.from(Array(props.sections[index].items.length)).map(
              (_, j) => (
                <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                  <Item>
                    <FormlabsAttributeCard
                      alt={props.sections[index].items[j].alt}
                      src={props.sections[index].items[j].src}
                      heading={props.sections[index].items[j].heading}
                      description={props.sections[index].items[j].description}
                    ></FormlabsAttributeCard>
                  </Item>
                </Grid>
              ),
            )}
          </Grid>
        </>
      ))}
    </>
  );
}
