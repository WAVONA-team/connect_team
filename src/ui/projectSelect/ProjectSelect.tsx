import React from "react";
import { Listbox } from "@headlessui/react";
import classNames from "classnames";
import DropDownItem from "../DropDownItem/DropDownItem";

type Props = {
  selectedItem: string;
  onChange: (value: string) => void;
  allItems: string[];
  className?: string;
};

const ProjectSelect: React.FC<Props> = React.memo(
  ({ selectedItem, onChange, allItems, className }) => {
    return (
      <Listbox
        value={selectedItem}
        onChange={(value) => onChange(value)}
        as="div"
        className={`${className} relative`}
      >
        <Listbox.Button
          className={`
            relative
            block
            w-full
            p-2
            pr-14
            text-left
            text-base
            text-onPrimary-anti-flash-withe
            content-[""]
            after:absolute
            after:right-0
            after:top-2
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
              className={classNames("bg-secondary-dark-purple", {
                "rounded-t": index === 0,
                "rounded-b": index === allItems.length - 1,
              })}
              key={item}
              value={item}
            >
              <DropDownItem
                className={classNames({
                  "rounded-t": index === 0,
                  "rounded-b": index === allItems.length - 1,
                })}
              >
                {item}
              </DropDownItem>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    );
  },
);

export default ProjectSelect;
