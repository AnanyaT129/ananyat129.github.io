import {
  // DarkThemeToggle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { InProgressBanner } from "./InProgressBanner";

export function Header() {
  return (
    <>
      <Navbar fluid rounded>
        <NavbarBrand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Ananya Tadigadapa
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink>
            <Link to={"/"}>Home</Link>
          </NavbarLink>
          <NavbarLink>
            <Link to={"/projects"}>Projects & Publications</Link>
          </NavbarLink>
          <NavbarLink>
            <Link to={"/workExperience"}>Work Experience</Link>
          </NavbarLink>
          <NavbarLink>
            <Link to={"/leadership"}>Leadership</Link>
          </NavbarLink>
          <NavbarLink>
            <Link to={"/music"}>Music</Link>
          </NavbarLink>
          <NavbarLink>
            <Link to={"/sustainability"}>Sustainability</Link>
          </NavbarLink>
        </NavbarCollapse>
        {/* <DarkThemeToggle /> */}
      </Navbar>
      <InProgressBanner />
    </>
  );
}
