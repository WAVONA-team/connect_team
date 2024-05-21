"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import createSearchParams from "@/shared/helpers/createSearchParams";

import GridViewIcon from "@/ui/icons/changeItemsViewIcon/GridView";
import RowViewIcon from "@/ui/icons/changeItemsViewIcon/RowView";

type Props = {
  value: "grid" | "row";
};

const FilterViewButton: React.FC<Props> = React.memo(({ value }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const view = searchParams.get("view") ?? "grid";

  const handleClick = (view: string) => {
    router.push(createSearchParams({ view }, searchParams));
  };

  return (
    <button
      type="button"
      className="h-6 w-6"
      onClick={() => handleClick(value)}
    >
      {value === "grid" ? (
        <GridViewIcon active={view === "grid"} />
      ) : (
        <RowViewIcon active={view === "row"} />
      )}
    </button>
  );
});

export default FilterViewButton;
