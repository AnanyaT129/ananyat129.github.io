import { Button, Card } from "flowbite-react";
import { ModalButton } from "../global/ModalButton";
import { Box, Stack, styled } from "@mui/material";

export enum CardOrientation {
  Vertical,
  Horizontal,
}

export type ProjectCardInputs = {
  src: string;
  alt?: string;
  title: string;
  year: number;
  tech: string[];
  subtitle: string;
  purpose: string;
  authors: string;
  description: string;
  skills: { skill: string; usage: string }[];
};

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export function ProjectCard(props: {
  card: ProjectCardInputs;
  orientation: CardOrientation;
}) {
  var content = (
    <>
      Read More
      <svg
        className="-mr-1 ml-2 size-4"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </>
  );

  var horizontal = props.orientation === CardOrientation.Horizontal;

  return (
    <Card
      className="max-w-sm"
      imgAlt={props.card.alt}
      imgSrc={props.card.src}
      horizontal={horizontal}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.card.title}
      </h5>
      <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
        {Array.from(Array(props.card.tech.length)).map((_, index) => (
          <Item>
            <Button outline>{props.card.tech[index]}</Button>
          </Item>
        ))}
      </Stack>
      <ModalButton
        title={props.card.title}
        subtitle={props.card.subtitle}
        purpose={props.card.purpose}
        authors={props.card.authors}
        description={props.card.description}
        buttonContent={content}
      ></ModalButton>
    </Card>
  );
}
