import React from "react";
import Robot from "./Robot";
import DialogueBallon from "./DialogueBallon";
import User from "./User";

function Message(props) {
  const { type } = props;
  const { text } = props;

  const robot = <div data-testid="robot-avatar" className="overflow-auto flex flex-row items-start gap-8 pl-4 pt-4 pb-4" ><Robot/><DialogueBallon side="left" text={text}/></div>;
  const user = <div data-testid="user-avatar" className="flex flex-row-reverse items-start gap-8 pr-4 pt-4 pb-4" ><User/><DialogueBallon side="right" text={text}/></div>;

  return (
    <>
      { (type === "robot")  && robot }
      { (type === "user")  && user }
    </>
  );
}

export default Message;