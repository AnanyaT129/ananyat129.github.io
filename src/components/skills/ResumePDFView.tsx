import { Alert } from "flowbite-react";
import React from "react";

export function ResumePDFView() {
  return (
    <span className="font-medium">
      <a href="/resume.pdf" target="_blank" rel="noreferrer">
        <Alert color="info">View PDF Resume here</Alert>
      </a>
    </span>
  );
}
