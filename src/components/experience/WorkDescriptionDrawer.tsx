import { Box, Divider, Stack, styled } from "@mui/material";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
  Timeline,
} from "flowbite-react";

export type WorkDescriptionProps = {
  title: string;
  position: string;
  learned: string[];
  accomplished: string[];
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

export function WorkDescriptionDrawer(props: WorkDescriptionProps) {
  return (
    <Accordion collapseAll>
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
        <AccordionContent>
          {props.learned.length > 0 ? (
            <>
              <Timeline.Title className="text-sm">
                What I learned...
              </Timeline.Title>
              <Timeline.Body className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {Array.from(Array(props.learned.length)).map((_, index) => (
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {props.learned[index]}
                  </p>
                ))}
              </Timeline.Body>
            </>
          ) : null}
          {props.accomplished.length > 0 ? (
            <>
              <Timeline.Title className="text-sm">
                What I accomplished...
              </Timeline.Title>
              <Timeline.Body className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {Array.from(Array(props.accomplished.length)).map(
                  (_, index) => (
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      {props.accomplished[index]}
                    </p>
                  ),
                )}
              </Timeline.Body>
            </>
          ) : null}
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  );
}
