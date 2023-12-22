import React from "react";
import PopOver from "@/ui/popOver/PopOver";

const NotificationPopOver: React.FC = React.memo(() => {
  return (
    <PopOver
      button={
        <div
          className={`bg-[url("/images/bell.svg")] h-8 w-8 bg-contain bg-center bg-no-repeat`}
        />
      }
      width="8"
      height="8"
    >
      notifications
    </PopOver>
  );
});

export default NotificationPopOver;
