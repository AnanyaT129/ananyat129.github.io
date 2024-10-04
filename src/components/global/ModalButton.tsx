import { Button, Modal } from "flowbite-react";
import { useState } from "react";

type ModalButtonInputs = {
  title: string;
  subtitle: string;
  purpose: string;
  authors: string;
  description: string;
  buttonContent: JSX.Element;
};

export function ModalButton(props: ModalButtonInputs) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Button color="transparent" onClick={() => setOpenModal(true)}>{props.buttonContent}</Button>
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
    </>
  );
}
