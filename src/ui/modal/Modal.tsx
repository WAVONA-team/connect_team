import React from "react";
import classNames from "classnames";
import { useRouter, useSearchParams } from "next/navigation";

import SectionWrapper from "@/ui/sectionWrapper/SectionWrapper";
import createSearchParams from "@/shared/helpers/createSearchParams";

type Props = {
  active: boolean;
  paramName: string;
  children: React.ReactNode;
};

const Modal: React.FC<Props> = React.memo(({ active, paramName, children }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <div
      onClick={() => {
        router.push(createSearchParams({ [paramName]: null }, searchParams));
      }}
      className={classNames(
        "bg-secondary-black-opacity fixed bottom-0 left-0 right-0 top-0 flex h-screen w-screen items-center justify-center transition-all",
        {
          "pointer-events-auto opacity-100": active,
          "pointer-events-none opacity-0": !active,
        },
      )}
    >
      <SectionWrapper
        className={classNames(
          "w-1/2 max-w-2xl rounded-3xl px-14 py-20 transition-all duration-500",
          {
            "translate-y-0": active,
            "translate-y-full": !active,
          },
        )}
      >
        {children}
      </SectionWrapper>
    </div>
  );
});

export default Modal;
