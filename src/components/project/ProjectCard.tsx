import { Card } from "flowbite-react";
import { ModalButton } from "../global/ModalButton";

export type ProjectCardInputs = {
  src: string;
  alt?: string;
  title: string;
  year: number;
  tech: string;
  subtitle: string;
  purpose: string;
  authors: string;
  description: string;
};

export function ProjectCard(props: ProjectCardInputs) {
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

  return (
    <Card className="max-w-sm" imgAlt={props.alt} imgSrc={props.src}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.title}
      </h5>
      <p className="text-sm text-gray-700 dark:text-gray-400">
        {props.tech} {props.year}
      </p>
      <ModalButton
        title={props.title}
        subtitle={props.subtitle}
        purpose={props.purpose}
        authors={props.authors}
        description={props.description}
        buttonContent={content}
      ></ModalButton>
    </Card>
  );
}
