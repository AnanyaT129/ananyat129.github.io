import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
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
      <Tabs.Item active title="Completed Projects" icon={HiUserCircle}>
        <ProjectGrid
          gridItems={allProjects}
          cardOrientation={CardOrientation.Vertical}
        ></ProjectGrid>
      </Tabs.Item>
      <Tabs.Item active title="Ongoing Projects" icon={HiUserCircle}>
        <ProjectGrid
          gridItems={ongoingProjects}
          cardOrientation={CardOrientation.Vertical}
        ></ProjectGrid>
      </Tabs.Item>
      <Tabs.Item title="Publications" icon={MdDashboard}>
        <ProjectGrid
          gridItems={publications}
          cardOrientation={CardOrientation.Vertical}
        ></ProjectGrid>
      </Tabs.Item>
      <Tabs.Item title="By Year" icon={HiAdjustments}>
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
