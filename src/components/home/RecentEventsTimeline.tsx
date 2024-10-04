import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";
import { RecentEventsList } from "../../content/RecentEvents";
import { Link } from "react-router-dom";

export function RecentEventsTimeline() {
  return (
    <Timeline>
      {Array.from(Array(RecentEventsList.length)).map((_, index) => (
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>{RecentEventsList[index].date}</Timeline.Time>
            {RecentEventsList[index].link !== undefined ? (
              <Timeline.Title>
                <Link to={RecentEventsList[index].link || ""}>
                  {RecentEventsList[index].title}
                </Link>
              </Timeline.Title>
            ) : (
              <Timeline.Title>{RecentEventsList[index].title}</Timeline.Title>
            )}
            <Timeline.Body className="text-lg">
              {RecentEventsList[index].location}
            </Timeline.Body>
            <Timeline.Body>{RecentEventsList[index].description}</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
