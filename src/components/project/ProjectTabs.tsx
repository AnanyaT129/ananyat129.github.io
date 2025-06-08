import { Tabs } from "flowbite-react";
import { HiClipboardCheck, HiClipboardList } from "react-icons/hi";
import { FaBook, FaCalendar, FaBarsProgress } from "react-icons/fa6";
import ProjectGrid from "./ProjectGrid";
import {
  allProjects,
  ongoingProjects,
  publications,
  topics,
  years,
} from "../../content/ProjectLists";
import { DividedTab } from "./DividedTab";
import { CardOrientation } from "./ProjectCard";

export function ProjectTabs() {
  return (
    <Tabs aria-label="Tabs with icons">
      <Tabs.Item active title="Completed Projects" icon={HiClipboardCheck}>
        <ProjectGrid
          gridItems={allProjects}
          cardOrientation={CardOrientation.Vertical}
        ></ProjectGrid>
      </Tabs.Item>
      <Tabs.Item active title="Ongoing Projects" icon={FaBarsProgress}>
        <ProjectGrid
          gridItems={ongoingProjects}
          cardOrientation={CardOrientation.Vertical}
        ></ProjectGrid>
      </Tabs.Item>
      <Tabs.Item title="Publications" icon={FaBook}>
        <ProjectGrid
          gridItems={publications}
          cardOrientation={CardOrientation.Vertical}
        ></ProjectGrid>
      </Tabs.Item>
      <Tabs.Item title="By Year" icon={FaCalendar}>
        <DividedTab
          list={years}
          cardOrientation={CardOrientation.Vertical}
        ></DividedTab>
      </Tabs.Item>
      <Tabs.Item title="By CS Topic" icon={HiClipboardList}>
        <DividedTab
          list={topics}
          cardOrientation={CardOrientation.Vertical}
        ></DividedTab>
      </Tabs.Item>
    </Tabs>
  );
}
