"use client";
import React from "react";
import { useSearchParams, useRouter } from "next/navigation";

import createSearchParams from "@/shared/helpers/createSearchParams";

import Badge from "@/ui/badge/Badge";

type Props = {
  text: string;
};

const FilterBadge: React.FC<Props> = React.memo(({ text }) => {
  const router = useRouter();
  const searchParams = useSearchParams()!;

  const professions = searchParams.getAll("professions") ?? [];

  const toggleBadge = (ch: string) => {
    const newProfessions = professions.includes(ch)
      ? professions.filter((profession) => profession !== ch)
      : [...professions, ch];

    router.push(
      createSearchParams({ professions: newProfessions }, searchParams),
    );
  };

  return (
    <Badge
      text={text}
      isActive={professions.includes(text)}
      onClick={() => toggleBadge(text)}
    />
  );
});

export default FilterBadge;
