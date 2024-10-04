import { Container } from "@mui/material";
import { WorkTimeline, WorkTimelineProps } from "./WorkTimeline";
import { ResumePDFView } from "../skills/ResumePDFView";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export function WorkExperienceList(props: {
  work: WorkTimelineProps[];
  button: string;
  link: string;
}) {
  return (
    <Container sx={{ marginTop: 4 }}>
      <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Work Experience
      </h5>
      <ResumePDFView />
      <WorkTimeline work={props.work} />
      {props.button !== "" && props.link !== "" ? (
        <Link to={props.link}>
          <Button>
            {props.button}
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
          </Button>
        </Link>
      ) : null}
    </Container>
  );
}
