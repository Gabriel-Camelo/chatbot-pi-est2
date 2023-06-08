import React from "react";

function DialogueBallon(props) {
  const { side } = props;
  const { text } = props;

  const ballonColor = (side === "left")?"bg-message1": "bg-message2";

  return (
      <div
        data-testid="dialog-balloon"
        className={`w-1/2 flex flex-row justify-${(side === "left")?"start":"end"} self-end`}
      >
        <div 
          className={`w-48 h-16 absolute ${side === "left" ? "left-16" : "right-16"} flex flex-row${side === "left" ? "" : "-reverse"}  z-0`}
        >
          <img
            src={`/img/chat/chatTail${side}.png`}
            alt="mensagem"
            className="w-1/4 h-1/2 z-0"
          />
        </div>
        <div
          className={`relative w-4/5 min-h-10 ${ballonColor} rounded-lg z-10`}
        >
          <div
            className="p-2 text-sm text-white"
          >
          {<div dangerouslySetInnerHTML={{ __html: `${text}` }} />}
          </div>
        </div>
      </div>
  );
}

export default DialogueBallon;
