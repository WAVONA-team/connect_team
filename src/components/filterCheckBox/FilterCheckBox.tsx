"use client";
import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import Checkbox from "@/ui/checkbox/Checkbox";
import createSearchParams from "@/shared/helpers/createSearchParams";

type Props = {
  labelText: string;
  checkedState: boolean;
  disabled: boolean;
  value: "Мои проекты" | "Остальные проекты";
};

const FilterCheckBox: React.FC<Props> = React.memo(
  ({ labelText, checkedState, disabled, value }) => {
    const router = useRouter();
    const searchParams = useSearchParams()!;

    const [isChecked, setIsChecked] = useState(checkedState);
    const whosProjects = searchParams.getAll("whosProjects") || [];

    const getCheckedState = () => {
      if (whosProjects.includes(value) || isChecked) {
        return true;
      }

      return false;
    };

    const handleChange = (value: string) => {
      setIsChecked((prev) => !prev);

      const newWhosProjects = whosProjects.includes(value)
        ? whosProjects.filter((whosProject) => whosProject !== value)
        : [...whosProjects, value];

      router.push(
        createSearchParams({ whosProjects: newWhosProjects }, searchParams),
      );
    };

    return (
      <Checkbox
        labelText={labelText}
        isChecked={getCheckedState()}
        onChange={(event) => handleChange(event.target.value)}
        disabled={disabled}
        value={value}
      />
    );
  },
);

export default FilterCheckBox;
