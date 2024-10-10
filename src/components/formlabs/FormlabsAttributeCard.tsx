import { Box, Stack, styled } from "@mui/material";
import { Card } from "flowbite-react";

export type FormlabsAttributeCardProps = {
  alt: string;
  src: string;
  heading: string;
  description: string;
};

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  flexGrow: 1,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function FormlabsAttributeCard(
  props: FormlabsAttributeCardProps,
) {
  return (
    <Card className="max-w-sm" horizontal={true}>
      <Stack spacing={{ xs: 1 }} direction="row">
        <Item>
          <img
            src={props.src}
            alt={props.alt}
            className="max-h-10 min-w-fit"
          ></img>
        </Item>
        <Item>
          <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {props.heading}
          </h5>
        </Item>
      </Stack>
      <p>{props.description}</p>
    </Card>
  );
}
