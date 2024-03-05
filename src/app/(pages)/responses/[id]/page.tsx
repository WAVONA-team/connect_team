import { type Metadata } from "next";
import Link from "next/link";

import { api } from "@/trpc/server";

import NavBar from "@/components/navBar/NavBar";
import Container from "@/ui/container/Container";
import SectionWrapper from "@/ui/sectionWrapper/SectionWrapper";
import { useTranslation } from "@/shared/localization/i18n";

interface Props {
  params: {
    id: string;
  };
}

const Responses: React.FC<Props> = async ({ params }) => {
  const response = await api.response.findByUserId.query(params.id);
  const { t } = await useTranslation('en');

  return (
    <Container>
      <NavBar />
      <div className=" mt-12">
        <div className="flex flex-row justify-between text-onPrimary-anti-flash-withe">
          <p className=" text-3xl">{t("responses")}</p>
          <div className=" flex flex-row gap-6">
            <div>
              <p>{t("allTime")}</p>
            </div>
            <div>
              <p>{t("allDuration")}</p>
            </div>
            <div>
              <p>{t("allStatus")}</p>
            </div>
          </div>
        </div>
        <div className=" mt-8 flex flex-col gap-6">
          {response?.map((response) => {
            return (
              <SectionWrapper key={response.id}>
                <Link
                  href={`/projects/${response.project.id}`}
                  className="text-onPrimary-anti-flash-withe"
                >
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-3">
                      <div className=" flex h-10 w-fit items-center rounded-full border-2 border-onPrimary-anti-flash-withe px-3 py-1">
                        <p className=" text-center">Frontend</p>
                      </div>
                      <div className=" flex h-10 w-fit items-center rounded-full border-2 border-onPrimary-anti-flash-withe px-3 py-1">
                        <p className=" text-center">Frontend</p>
                      </div>
                      <div className=" flex h-10 w-fit items-center rounded-full border-2 border-onPrimary-anti-flash-withe px-3 py-1">
                        <p className=" text-center">Frontend</p>
                      </div>
                    </div>
                    <p
                      className={`text-sm
                    ${
                      response.status === "принят"
                        ? "text-success-dark-pastel-green"
                        : response.status === "отклонен"
                          ? "text-error-imperial-red"
                          : "text-onPrimary-anti-flash-withe"
                    }`}
                    >
                      {response.status}
                    </p>
                  </div>
                  <div className=" mt-6">
                    <p className=" text-xl font-bold">
                      {response.project.title}
                    </p>
                    <p className=" mt-4 text-sm text-secondary-cadet-grey">
                      {t("responses")}
                    </p>
                    <p className=" mt-5">{response.project.description}</p>
                    <div className=" mt-8">
                      <p className=" mb-4 text-sm">
                        {t("duration")}: {response.project.term}
                      </p>
                      <p className="text-sm">
                        {t("status")}: {response.project.status}
                      </p>
                    </div>
                  </div>
                </Link>
              </SectionWrapper>
            );
          })}
        </div>
      </div>
    </Container>
  );
};
export default Responses;

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const user = await api.user.get.query({ id: params.id });
  return {
    title: `${user?.name} responses`,
  };
};
