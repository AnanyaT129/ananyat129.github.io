import { Avatar, Button, Popover } from "flowbite-react";
import { Skill } from "../../content/SkillList";
import { Box, Stack, styled } from "@mui/material";
import { ModalButton } from "../global/ModalButton";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export function SkillPopover(props: { skill: Skill }) {
  if (props.skill.description || props.skill.projects.length > 0) {
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
            <div className="px-3 py-2">
              {props.skill.projects.length > 0 ? (
                <Stack direction="row" useFlexGap sx={{ flexWrap: "wrap" }}>
                  {Array.from(Array(props.skill.projects.length)).map(
                    (_, index) => (
                      <Item>
                        <ModalButton
                          title={props.skill.projects[index].title}
                          subtitle={props.skill.projects[index].subtitle}
                          purpose={props.skill.projects[index].purpose}
                          authors={""}
                          // description={props.skill.projects[index].skills.find((s) => s.skill === props.skill.title)?.usage || ""}
                          description={props.skill.projects[index].description}
                          descriptionAlert={
                            props.skill.projects[index].skills.find(
                              (s) => s.skill === props.skill.title,
                            )?.usage
                          }
                          skill={props.skill.title}
                          buttonContent={
                            <Avatar
                              img={props.skill.projects[index].src}
                              alt={props.skill.projects[index].alt}
                              rounded
                              bordered={true}
                            />
                          }
                        ></ModalButton>
                      </Item>
                    ),
                  )}
                </Stack>
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
