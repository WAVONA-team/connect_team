"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import type Duration from "@/shared/types/projectFilter/Duration";
import type Status from "@/shared/types/projectFilter/Status";
import type TimeFrame from "@/shared/types/projectFilter/TimeFrame";

import createSearchParams from "@/shared/helpers/createSearchParams";
import ProjectSelect from "@/ui/projectSelect/ProjectSelect";

type Props = {
  allItems: TimeFrame[] | Duration[] | Status[];
  paramName: string;
};

const FilterSelect: React.FC<Props> = React.memo(({ allItems, paramName }) => {
  const router = useRouter();
  const searchParams = useSearchParams()!;

  const handleChange = (value: string) => {
    router.push(createSearchParams({ [paramName]: value }, searchParams));
  };

  return (
    <ProjectSelect
      allItems={allItems}
      selectedItem={searchParams.get(paramName) ?? allItems[0]!}
      onChange={(newItem) => handleChange(newItem)}
      className=" w-48"
    />
  );
});

export default FilterSelect;
