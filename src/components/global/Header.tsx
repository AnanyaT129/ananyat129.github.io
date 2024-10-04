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

export function Header(props: { active?: number }) {
  var active = [false, false, false, false, false];
  if (props.active) {
    active[props.active - 1] = true;
  }

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
          <NavbarLink active={active[0]}>
            <Link to={"/"}>Home</Link>
          </NavbarLink>
          <NavbarLink active={active[1]}>
            <Link to={"/projects"}>Projects & Publications</Link>
          </NavbarLink>
          <NavbarLink active={active[2]}>
            <Link to={"/leadership"}>Leadership</Link>
          </NavbarLink>
          <NavbarLink active={active[3]}>
            <Link to={"/music"}>Music</Link>
          </NavbarLink>
          <NavbarLink active={active[4]}>
            <Link to={"/sustainability"}>Sustainability</Link>
          </NavbarLink>
        </NavbarCollapse>
        {/* <DarkThemeToggle /> */}
      </Navbar>
      <InProgressBanner />
    </>
  );
}
