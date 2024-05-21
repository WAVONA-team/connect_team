"use client";
import React from "react";
import { useSearchParams, useRouter } from "next/navigation";

import createSearchParams from "@/shared/helpers/createSearchParams";

import Badge from "@/ui/badge/Badge";

type Props = {
  text: string;
  paramName: string;
};

const FilterBadge: React.FC<Props> = React.memo(({ text, paramName }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const professions = searchParams.getAll(paramName) ?? [];

  const toggleBadge = (ch: string) => {
    const newProfessions = professions.includes(ch)
      ? professions.filter((profession) => profession !== ch)
      : [...professions, ch];

    router.push(
      createSearchParams({ [paramName]: newProfessions }, searchParams),
    );
  };

  return (
    <Badge
      text={text}
      isActive={professions.includes(text)}
      onClick={(event) => {
        event.preventDefault();
        toggleBadge(text);
      }}
    />
  );
});

export default FilterBadge;
