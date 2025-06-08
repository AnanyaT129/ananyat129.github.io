"use client";

import { Footer } from "flowbite-react";
import {
  BsGithub,
  BsLinkedin,
  BsEnvelopeOpen,
  BsYoutube,
} from "react-icons/bs";

export function Foot() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Ananya Tadigadapa" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.linkedin.com/in/ananya-tadigadapa"
              target="_blank"
              icon={BsLinkedin}
            />
            <Footer.Icon
              href="mailto:tadigadapa.a@northeastern.edu"
              target="_blank"
              icon={BsEnvelopeOpen}
            />
            <Footer.Icon
              href="https://github.com/AnanyaT129"
              target="_blank"
              icon={BsGithub}
            />
            <Footer.Icon
              href="https://www.youtube.com/channel/UCJx6zmmcY4vQEY4vXpaHA8A"
              target="_blank"
              icon={BsYoutube}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
