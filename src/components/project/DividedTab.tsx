import { Divider } from "@mui/material";
import ProjectGrid from "./ProjectGrid";
import { DividedList } from "../../content/ProjectLists";

export function DividedTab(props: { list: DividedList[] }) {
  return (
    <>
      {Array.from(Array(props.list.length)).map((_, index) => (
        <>
          <span className="font-medium text-gray-800 dark:text-white">
            <h3>{props.list[index].name}</h3>
          </span>
          <ProjectGrid gridItems={props.list[index].items}></ProjectGrid>
          <Divider></Divider>
        </>
      ))}
    </>
  );
}
