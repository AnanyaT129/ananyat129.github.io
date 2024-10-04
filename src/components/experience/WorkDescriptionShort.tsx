import { Stack, Divider, Box, styled } from "@mui/material";
import { AccordionPanel, AccordionTitle, Timeline, Accordion } from "flowbite-react";
import {VscBlank} from "react-icons/vsc";

type WorkDescriptionProps = {
  title: string;
  position: string;
  time: string;
  imgSrc: string;
  imgAlt?: string;
};

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export function WorkDescriptionShort(props: WorkDescriptionProps) {
  return (
    <Accordion arrowIcon={VscBlank} collapseAll={true}>
      <AccordionPanel>
        <AccordionTitle>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <Item>
              <img
                src={props.imgSrc}
                alt={props.imgAlt ? props.imgAlt : ""}
                className="h-20 sm:h-16"
              />
            </Item>
            <Item>
              <Timeline.Title>{props.title}</Timeline.Title>
              <Timeline.Body>{props.position}</Timeline.Body>
            </Item>
          </Stack>
        </AccordionTitle>
      </AccordionPanel>
    </Accordion>
  );
}
