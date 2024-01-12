import React from "react";
import { Listbox } from "@headlessui/react";
import classNames from "classnames";

type Props = {
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
  allItems: string[];
  className?: string;
};

const ProjectSelect: React.FC<Props> = React.memo(
  ({ selectedItem, setSelectedItem, allItems, className }) => {
    return (
      <Listbox
        value={selectedItem}
        onChange={setSelectedItem}
        as="div"
        className={`${className} relative`}
      >
        <Listbox.Button
          className={`
            relative
            block
            w-full
            p-2
            text-left
            text-base
            text-onPrimary-anti-flash-withe
            content-[""]
            after:absolute
            after:right-0
            after:top-1/4
            after:block
            after:h-6
            after:w-6
            after:bg-[url("/images/arrowDown.svg")]
          `}
        >
          <p>{selectedItem}</p>
        </Listbox.Button>

        <Listbox.Options className="absolute top-12 z-10 w-full">
          {allItems.map((item, index) => (
            <Listbox.Option
              className={classNames(
                "cursor-pointer bg-zinc-700 px-5 py-2 text-onPrimary-anti-flash-withe hover:bg-secondary-cadet-grey",
                {
                  "rounded-t": index === 0,
                  "rounded-b": index === allItems.length - 1,
                },
              )}
              key={item}
              value={item}
            >
              {item}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    );
  },
);

export default ProjectSelect;
