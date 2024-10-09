import Typewriter from "typewriter-effect";
import { ResumePDFView } from "../skills/ResumePDFView";

export function FormlabsIntroduction() {
  return (
    <>
      <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Hello Formlabs!").start();
          }}
        />
      </h5>
      <p className="mb-2">
        After attending the Makerspace event last year, and organizing the Tau
        Beta Pi event last week, I feel aligned with the Formlabs mission,
        excited by the company culture, and prepared to take on the engineering
        challenges in a fast-paced environment.
      </p>
      <p className="mb-4">
        Please feel free to explore the entire website, but the tables below
        have been curated with descriptions to show off my most relevant
        experiences & skills
      </p>
      <ResumePDFView></ResumePDFView>
    </>
  );
}
