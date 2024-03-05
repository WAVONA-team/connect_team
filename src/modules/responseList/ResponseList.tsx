"use client";
import React from "react";
import { useTranslation } from "@/shared/localization/i18n";
import classNames from "classnames";
import { useRouter, useSearchParams } from "next/navigation";
import type NewResponse from "@/shared/types/extendedModels/NewResponse";
import getFilteredResponses from "./helpers/getFilteredResponses";
import SectionWrapper from "@/ui/sectionWrapper/SectionWrapper";
import Link from "next/link";
import Badge from "@/ui/badge/Badge";
import ProfileImage from "@/ui/profileImage/ProfileImage";
import MainButton from "@/ui/mainButton/MainButton";

type Props = {
  response: NewResponse[];
};

const ResponseList: React.FC<Props> = React.memo(async ({ response }) => {
  const { t } = await useTranslation('en');
  const searchParams = useSearchParams()!;
  const router = useRouter();

  const professions = searchParams.getAll("professions") ?? [];
  const timeFrame = searchParams.get("timeFrame") ?? "";

  const filteredResponse = getFilteredResponses(response, {
    professions,
    timeFrame,
  });

  return (
    <div className={classNames("mt-8 grid w-full grid-cols-2 gap-6")}>
      {filteredResponse.length ? (
        filteredResponse.map((response) => (
          <Link
            href={`/projects/${response.id}/response/${response.id}/${response.userId}`}
            key={response.id}
          >
            <SectionWrapper className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <p>{response.project.title}</p>
                <Badge text={response.profession} />
              </div>
              <div className="flex items-center gap-3">
                <ProfileImage
                  imageSrc={response.candidate.image}
                  alt="не найдено"
                  width={38}
                  height={38}
                />
                <p>{response.candidate.name}</p>
              </div>
              <div className="flex items-center justify-between">
                <p>{response.date.toLocaleDateString()}</p>
              </div>
            </SectionWrapper>
          </Link>
        ))
      ) : (
        <div className="flex flex-col items-start gap-2">
          <p className="text-base text-secondary-cadet-grey">
            {t("noProjectsFound")}
          </p>
          <MainButton
            text={t("resetFilters")}
            onClick={() => router.push("/projects")}
          />
        </div>
      )}
    </div>
  );
});

export default ResponseList;
