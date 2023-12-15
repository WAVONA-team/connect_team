import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = React.memo(({ children }) => (
  <div
    className="
      px-2
      tablet:m-auto
      tablet:w-full
      tablet:px-5
      desktop:w-3/5
      desktop:px-0
    "
  >
    {children}
  </div>
));

export default Container;
