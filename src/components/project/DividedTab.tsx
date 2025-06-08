import { Divider } from "@mui/material";
import ProjectGrid from "./ProjectGrid";
import { DividedList } from "../../content/ProjectLists";
import { CardOrientation } from "./ProjectCard";

export function DividedTab(props: {
  list: DividedList[];
  cardOrientation: CardOrientation;
}) {
  return (
    <>
      {Array.from(Array(props.list.length)).map((_, index) => (
        <>
          <Divider>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.list[index].name}
            </h5>
          </Divider>
          <ProjectGrid
            gridItems={props.list[index].items}
            cardOrientation={props.cardOrientation}
          ></ProjectGrid>
        </>
      ))}
    </>
  );
}
