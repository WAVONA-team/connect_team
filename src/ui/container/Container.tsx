import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = React.memo(({ children }) => (
  <div
    className="
      desktop:w-3/5
      desktop:px-0
      tablet:px-5
      tablet:m-auto
      tablet:w-full
      px-2
    "
  >
    {children}
  </div>
));

export default Container;
