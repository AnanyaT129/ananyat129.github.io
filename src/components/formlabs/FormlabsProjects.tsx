import { Tabs } from "flowbite-react";
import { HiBriefcase, HiClipboardList } from "react-icons/hi";
import { CardOrientation } from "../project/ProjectCard";
import { projectsForFormlabs } from "../../content/FormlabsContent";
import ProjectGrid from "../project/ProjectGrid";
import { FormlabsAttributeTab } from "./FormlabsAttributeTab";

export function FormlabsProjects() {
  return (
    <Tabs className="mt-4" aria-label="Tabs with icons">
      <Tabs.Item active title="By Work Experience/Project" icon={HiBriefcase}>
        <ProjectGrid
          gridItems={projectsForFormlabs}
          cardOrientation={CardOrientation.Horizontal}
        ></ProjectGrid>
      </Tabs.Item>
      <Tabs.Item active title="By Attribute" icon={HiClipboardList}>
        <FormlabsAttributeTab></FormlabsAttributeTab>
      </Tabs.Item>
    </Tabs>
  );
}
