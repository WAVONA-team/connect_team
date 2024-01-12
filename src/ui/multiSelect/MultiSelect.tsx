"use client";
import React from "react";
import { Listbox } from "@headlessui/react";
import Badge from "@/ui/badge/Badge";

type Props = {
  allItems: string[];
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
  placeholder: string;
  className?: string;
};

const MultiSelect: React.FC<Props> = React.memo(
  ({
    allItems,
    selectedItems,
    setSelectedItems,
    placeholder,
    className = "",
  }) => {
    return (
      <Listbox
        as={"div"}
        className={`${className} relative`}
        onChange={setSelectedItems}
        value={selectedItems}
        multiple
      >
        <Listbox.Button
          as="div"
          className={`
            border-onSecondary-english-violet
            flex
            h-20
            cursor-pointer
            items-center
            gap-2
            rounded-lg
            border
            bg-secondary-dark-purple
            px-4
            py-3.5
            transition
            focus:border-primary-neon-blue
            focus:text-onPrimary-anti-flash-withe
            focus:outline-none
          `}
        >
          {selectedItems.length ? (
            selectedItems.map((item) => {
              return (
                <Badge
                  withCloseButton
                  text={item}
                  key={item}
                  onClick={() => {
                    setSelectedItems((prev) =>
                      prev.filter((prevItem) => prevItem !== item),
                    );
                  }}
                />
              );
            })
          ) : (
            <p className="text-base text-secondary-cadet-grey">{placeholder}</p>
          )}
        </Listbox.Button>

        <Listbox.Options className="shadow-surface absolute top-24 w-full rounded-lg bg-secondary-dark-purple focus:outline-none">
          {allItems.map((item) => (
            <Listbox.Option
              className={`
                hover:bg-onSecondary-english-violet
                hover:text-onSecondary-platinum
                cursor-pointer
                px-4
                py-3.5
                text-base
                text-onPrimary-anti-flash-withe
                transition
              `}
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

export default MultiSelect;
