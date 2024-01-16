import React from "react";
import classNames from "classnames";

import generalClassNames from "../helpers/generalClassNames";
import type Props from "../types/Props";

const RowViewIcon: React.FC<Props> = React.memo(({ active = false }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames({
        "fill-secondary-cadet-grey": active,
        [generalClassNames.fill]: !active,
      })}
    >
      <path
        d="M4.1 14.25H19.9C20.5651 14.25 20.8366 14.3949 20.9662 14.5327C21.1067 14.6819 21.25 15.0003 21.25 15.73V19.77C21.25 20.4997 21.1067 20.8181 20.9662 20.9673C20.8366 21.1051 20.5651 21.25 19.9 21.25H4.1C3.43486 21.25 3.16336 21.1051 3.03376 20.9673C2.89334 20.8181 2.75 20.4997 2.75 19.77V15.73C2.75 15.0003 2.89334 14.6819 3.03376 14.5327C3.16336 14.3949 3.43486 14.25 4.1 14.25Z"
        stroke-width="1.5"
      />

      <path
        d="M4.1 2.75H19.9C20.5651 2.75 20.8366 2.8949 20.9662 3.03265C21.1067 3.18191 21.25 3.50032 21.25 4.23V8.27C21.25 8.99969 21.1067 9.31809 20.9662 9.46735C20.8366 9.6051 20.5651 9.75 19.9 9.75H4.1C3.43486 9.75 3.16336 9.6051 3.03376 9.46735C2.89334 9.31809 2.75 8.99969 2.75 8.27V4.23C2.75 3.50032 2.89334 3.18191 3.03376 3.03265C3.16336 2.8949 3.43486 2.75 4.1 2.75Z"
        stroke-width="1.5"
      />
    </svg>
  );
});

export default RowViewIcon;
