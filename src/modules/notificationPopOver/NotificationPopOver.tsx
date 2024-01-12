import React from "react";
import PopOver from "@/ui/popOver/PopOver";
import BellIcon from "@/ui/icons/bell/Bell";

const NotificationPopOver: React.FC = React.memo(() => {
  return (
    <PopOver
      button={
        <button className="h-8 w-8">
          <BellIcon />
        </button>
      }
      width="8"
      height="8"
    >
      notifications
    </PopOver>
  );
});

export default NotificationPopOver;
