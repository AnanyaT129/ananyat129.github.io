import { Alert } from "flowbite-react";
import React from "react";

export function ResumePDFView() {
  return (
    <Alert color="info">
      <span className="font-medium">
        View PDF Resume{" "}
        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          here
        </a>
      </span>{" "}
    </Alert>
  );
}
