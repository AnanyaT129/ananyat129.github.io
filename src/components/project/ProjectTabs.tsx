import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import ProjectGrid from "./ProjectGrid";
import {
  allProjects,
  publications,
  topics,
  years,
} from "../../content/ProjectLists";
import { DividedTab } from "./DividedTab";

export function ProjectTabs() {
  return (
    <Tabs aria-label="Tabs with icons">
      <Tabs.Item active title="All Projects" icon={HiUserCircle}>
        <ProjectGrid gridItems={allProjects}></ProjectGrid>
      </Tabs.Item>
      <Tabs.Item title="Publications" icon={MdDashboard}>
        <ProjectGrid gridItems={publications}></ProjectGrid>
      </Tabs.Item>
      <Tabs.Item title="By Year" icon={HiAdjustments}>
        <DividedTab list={years}></DividedTab>
      </Tabs.Item>
      <Tabs.Item title="By CS Topic" icon={HiClipboardList}>
        <DividedTab list={topics}></DividedTab>
      </Tabs.Item>
    </Tabs>
  );
}
