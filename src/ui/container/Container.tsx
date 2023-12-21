import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = React.memo(({ children }) => (
  <div
    className="
      px-2
      md:m-auto
      md:w-full
      md:px-5
      lg:w-3/5
      lg:px-0
    "
  >
    {children}
  </div>
));

export default Container;
