import { Button, Card, Modal } from "flowbite-react";
import { useState } from "react";

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
  const [openModal, setOpenModal] = useState(false);

  return (
    <Card className="max-w-sm" imgAlt={props.alt} imgSrc={props.src}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.title}
      </h5>
      <p className="text-sm text-gray-700 dark:text-gray-400">
        {props.tech} {props.year}
      </p>
      <Button onClick={() => setOpenModal(true)}>
        Read more
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
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          {props.title}: {props.subtitle}
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {props.purpose}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {props.authors}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {props.description}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
}
