import { Divider } from "@mui/material";
import { Timeline, TimelineItem } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";
import {
  WorkDescriptionDrawer,
  WorkDescriptionProps,
} from "./WorkDescriptionDrawer";
import { WorkDescriptionShort } from "./WorkDescriptionShort";

export type WorkTimelineProps = {
  year: String;
  work: WorkDescriptionProps[];
};

export function WorkTimeline(props: { work: WorkTimelineProps[] }) {
  return (
    <Timeline>
      {Array.from(Array(props.work.length)).map((_, index) => (
        <>
          <TimelineItem>
            <Divider>{props.work[index].year}</Divider>
          </TimelineItem>
          {Array.from(Array(props.work[index].work.length)).map((_, j) => (
            <Timeline.Item itemID={props.work[index].work[j].title}>
              <Timeline.Point icon={HiCalendar} />
              <Timeline.Content>
                <Timeline.Time className="text-lg">
                  {props.work[index].work[j].time}
                </Timeline.Time>
                {props.work[index].work[j].learned.length > 0 ||
                props.work[index].work[j].accomplished.length > 0 ? (
                  <WorkDescriptionDrawer
                    title={props.work[index].work[j].title}
                    position={props.work[index].work[j].position}
                    learned={props.work[index].work[j].learned}
                    accomplished={props.work[index].work[j].accomplished}
                    time={props.work[index].work[j].time}
                    imgSrc={props.work[index].work[j].imgSrc}
                    imgAlt={props.work[index].work[j].imgAlt}
                  ></WorkDescriptionDrawer>
                ) : (
                  <WorkDescriptionShort
                    title={props.work[index].work[j].title}
                    position={props.work[index].work[j].position}
                    time={props.work[index].work[j].time}
                    imgSrc={props.work[index].work[j].imgSrc}
                    imgAlt={props.work[index].work[j].imgAlt}
                  ></WorkDescriptionShort>
                )}
              </Timeline.Content>
            </Timeline.Item>
          ))}
        </>
      ))}
    </Timeline>
  );
}
