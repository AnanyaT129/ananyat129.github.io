import { Button, Popover } from "flowbite-react";
import { Skill } from "../../content/SkillList";

export function SkillPopover(props: { skill: Skill }) {
  if (props.skill.description) {
    return (
      <Popover
        aria-labelledby="default-popover"
        content={
          <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
            <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
              <h3
                id="default-popover"
                className="font-semibold text-gray-900 dark:text-white"
              >
                {props.skill.title}
              </h3>
            </div>
            <div className="px-3 py-2">
              {props.skill.description ? (
                <p>{props.skill.description}</p>
              ) : null}
            </div>
          </div>
        }
      >
        <Button>{props.skill.title}</Button>
      </Popover>
    );
  } else {
    return <Button>{props.skill.title}</Button>;
  }
}
