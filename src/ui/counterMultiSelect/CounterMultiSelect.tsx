"use client";
import React from "react";

import { type InitialType } from "./types/initialType";

import Badge from "@/ui/badge/Badge";
import PopOver from "@/ui/popOver/PopOver";

type Props = {
  allItems: InitialType;
  onNumberChange: React.Dispatch<React.SetStateAction<InitialType>>;
  placeholder: string;
  className?: string;
};

const CounterMultiSelect: React.FC<Props> = React.memo(
  ({ allItems, onNumberChange, className = "", placeholder }) => {
    const selectedItems = Object.entries(allItems).filter(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ([name, value]) => value > 0,
    );

    return (
      <PopOver
        button={
          selectedItems.length ? (
            selectedItems.map(([name, value]) => (
              <Badge
                withCloseButton
                text={name}
                key={name}
                counterValue={value}
                onClick={() => {
                  const updatedItems = { ...allItems };

                  updatedItems[name] = 0;
                  onNumberChange(updatedItems);
                }}
              />
            ))
          ) : (
            <p className="text-base text-secondary-cadet-grey">{placeholder}</p>
          )
        }
        width="full"
        height="20"
        className={className}
        buttonClassName="border-onSecondary-english-violet flex items-center cursor-pointer gap-2 rounded-lg border bg-secondary-dark-purple px-4 py-3.5 transition focus:border-primary-neon-blue focus:text-onPrimary-anti-flash-withe focus:outline-none"
        panelClassName="w-full shadow-surface rounded-lg bg-secondary-dark-purple focus:outline-none transition border-none top-24"
      >
        {Object.entries(allItems).map(([name, value]) => (
          <div key={name}>
            <div className="flex cursor-pointer items-center justify-between px-4 py-3.5 text-base text-onPrimary-anti-flash-withe transition hover:bg-onSecondary-english-violet hover:text-onSecondary-platinum">
              <p>{name}</p>

              <div className="flex items-center gap-2">
                {value !== 0 && (
                  <button
                    onClick={() => {
                      onNumberChange((prev) => ({
                        ...prev,
                        [name]: value - 1,
                      }));
                    }}
                    type="button"
                  >
                    -
                  </button>
                )}

                <p>{value}</p>

                {value < 10 && (
                  <button
                    onClick={() => {
                      onNumberChange((prev) => ({
                        ...prev,
                        [name]: value + 1,
                      }));
                    }}
                    type="button"
                  >
                    +
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </PopOver>
    );
  },
);

export default CounterMultiSelect;
