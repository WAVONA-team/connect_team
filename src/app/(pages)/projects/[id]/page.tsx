import React from "react";
import { api } from "@/trpc/server";
import { notFound } from "next/navigation";
import { getServerAuthSession } from "@/server/auth";
import { type Metadata } from "next";

import Link from "next/link";
import NavBar from "@/components/navBar/NavBar";
import OpenModalButton from "@/components/openModalButton/OpenModalButtont";

import SectionWrapper from "@/ui/sectionWrapper/SectionWrapper";
import BackButton from "@/ui/backButton/BackButton";
import MainButtonLink from "@/ui/mainButton/MainButtonLink";
import Badge from "@/ui/badge/Badge";
import Container from "@/ui/container/Container";
import ProfileImage from "@/ui/profileImage/ProfileImage";

interface Props {
  params: {
    id: string;
  };
}

const Project: React.FC<Props> = async ({ params }) => {
  const session = await getServerAuthSession();
  const project = await api.project.findById.query(params.id);
  const projects = await api.project.getAll.query();

  if (!project) {
    return notFound();
  }

  const response = await api.response.findByProjectId.query(project.id);

  const isAuthor = project.userId === session?.user.id;

  return (
    <Container>
      <div className="text-onPrimary-anti-flash-withe">
        <NavBar />

        <div className="mt-8 flex flex-col gap-6">
          <div className="flex w-full justify-between">
            <div className="flex items-center">
              <BackButton />

              <p className="ml-4 text-3xl">Проект</p>
            </div>
            {isAuthor && (
              <MainButtonLink
                text="Редактировать"
                path={`/projects/${params.id}/edit`}
                target="_self"
              />
            )}
          </div>

          <SectionWrapper className="flex">
            <ProfileImage imageSrc={project.image} alt={project.title} />
            <div className="ml-8 flex w-full flex-row justify-between">
              <div>
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="mb-2 mt-8 text-secondary-cadet-grey">
                  Длительность
                </p>
                <p>{project.term}</p>
                <p className="mb-2 mt-6 text-secondary-cadet-grey">
                  Опубликован
                </p>
                <p>{project.published.toString()}</p>
              </div>
              <p>{project.status}</p>
            </div>
          </SectionWrapper>

          <SectionWrapper>
            <h2 className="text-xl font-bold">Цель</h2>
            <p>{project.target}</p>
          </SectionWrapper>

          <SectionWrapper>
            <h2 className="text-xl font-bold">Описание</h2>
            <p className="mt-6">{project.description}</p>
          </SectionWrapper>

          <div className="flex flex-row gap-6">
            <SectionWrapper className="w-1/2">
              <h2 className="text-xl font-bold">Кто требуется</h2>
              <div className="mt-8 flex w-fit flex-col gap-3">
                {Object.entries(project.requiredPeople)
                  .filter(([_key, value]) => value !== 0)
                  .map((item) => {
                    const [key, value] = item;

                    return <Badge text={key} counterValue={value} key={key} />;
                  })}
              </div>
            </SectionWrapper>

            <SectionWrapper className="w-1/2">
              <h2 className="text-xl font-bold">Участники команды</h2>
              <div className="mt-8">
                <div className="flex w-full flex-col gap-3">
                  <Link
                    href={`/user/${project.creator.id}`}
                    className="flex flex-row justify-between"
                  >
                    <div className="flex flex-row gap-3">
                      <ProfileImage
                        imageSrc={project.creator.image}
                        alt="не найдено"
                        width={38}
                        height={38}
                      />
                      <p>{project.creator.name}</p>
                    </div>
                    <p>Создатель/{project.creator.profession}</p>
                  </Link>
                  {project.members.map((member) => {
                    return (
                      <Link
                        href={`/user/${member.id}`}
                        className="flex flex-row justify-between"
                      >
                        <div className="flex flex-row gap-3">
                          <ProfileImage
                            imageSrc={member.image}
                            alt="не найдено"
                            width={38}
                            height={38}
                          />
                          <p>{member.name}</p>
                        </div>
                        <p>{member.profession}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </SectionWrapper>
          </div>

          <OpenModalButton
            projectId={project.id}
            projects={projects}
            className="mt-6 w-min"
          />
        </div>

        <div className="mt-12">
          <p className=" text-3xl">Отклики</p>
          <div className="item-center mt-8 flex justify-between">
            <div className=" flex items-center gap-5">
              <p>По тегам:</p>
              <Badge text="Frontend" />
              <Badge text="Backend" />
              <Badge text="Design" />
            </div>
            <div className=" flex items-center">
              <p>За всё время</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 grid-rows-3 gap-6">
            {response.map((response) => {
              return (
                <Link
                  href={`/projects/${params.id}/response/${response.id}/${response.userId}`}
                >
                  <SectionWrapper className="flex flex-col gap-6">
                    <div className=" flex items-center justify-between">
                      <p>{response.project.title}</p>
                      <Badge text="Frontend" />
                    </div>
                    <div className=" flex items-center gap-3">
                      <ProfileImage
                        imageSrc={response.candidate.image}
                        alt="не найдено"
                        width={38}
                        height={38}
                      />
                      <p>{response.candidate.name}</p>
                    </div>
                    <div className=" flex items-center justify-between">
                      <p>{response.date.toString()}</p>
                    </div>
                  </SectionWrapper>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Project;

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const project = await api.project.findById.query(params.id);
  return {
    title: `${project?.title}`,
  };
};
