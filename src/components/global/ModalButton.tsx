import { Alert, Button, Modal } from "flowbite-react";
import { useState } from "react";

type ModalButtonInputs = {
  title: string;
  subtitle: string;
  purpose: string;
  authors: string;
  description: string;
  buttonContent: JSX.Element;
  descriptionAlert?: string;
  skill?: string;
  sourceCode?: string;
  publishedIn?: string;
};

export function ModalButton(props: ModalButtonInputs) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Button color="transparent" onClick={() => setOpenModal(true)}>
        {props.buttonContent}
      </Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          {props.title}: {props.subtitle}
          {props.purpose !== "" ? (
            <p className="text-pretty text-lg leading-relaxed text-gray-500 dark:text-gray-400">
              {props.purpose}
            </p>
          ) : null}
          {props.authors !== "" ? (
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {props.authors}
            </p>
          ) : null}
          {props.sourceCode !== undefined ? (
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <b>Source Code:</b> <a href={props.sourceCode} target="_blank">{props.sourceCode}</a>
            </p>
          ) : null}
          {props.publishedIn !== "" ? (
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <b>Published in: </b>{props.publishedIn}
            </p>
          ) : null}
        </Modal.Header>
        <Modal.Body>
          {props.descriptionAlert !== undefined && props.skill !== undefined ? (
            <Alert color="info" className="mb-4">
              <h6 className="tracking-tight text-gray-900 dark:text-white">
                How I used {props.skill}:
              </h6>
              <span className="font-medium">{props.descriptionAlert}</span>{" "}
            </Alert>
          ) : null}
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {props.description}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
