import React from "react";
import Image from "next/image";
import { api } from "@/trpc/server";

import Badge from "@/ui/badge/Badge";
import Container from "@/ui/container/Container";

import arrowLeft from "../../../../../public/images/arrowLeft.svg";
import userNoAvatar from "../../../../../public/images/avatar.svg";

import { type Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/navBar/NavBar";
import SectionWrapper from "@/ui/sectionWrapper/SectionWrapper";

interface Props {
  params: {
    id: string;
  };
}

const Project: React.FC<Props> = async ({ params }) => {
  const project = await api.project.findById.query(params.id);

  if (!project) {
    return <p>error</p>;
  }

  const response = await api.response.findByProjectId.query(project?.id);

  return (
    <Container>
      <div className="text-onPrimary-anti-flash-withe">
        <NavBar />
        <div className="mt-8 flex flex-col gap-6">
          <div className="flex">
            <Link href="/projects" className=" flex">
              <Image
                src={arrowLeft as string}
                alt="arrowDown"
                width={24}
                height={24}
              />
            </Link>
            <h2 className="ml-4 text-3xl">Проект</h2>
          </div>
          <div className="flex border-2 border-secondary-dark-purple bg-surface-raisin-black p-12">
            {project.image && project.title ? (
              <Image
                src={project.image}
                alt={project.title}
                width={208}
                height={208}
                className=" rounded-lg"
              />
            ) : (
              <Image
                src={userNoAvatar as string}
                alt="Изображение проекта"
                width={208}
                height={208}
                className="rounded-lg"
              />
            )}
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
          </div>
          <div className="border-2 border-secondary-dark-purple bg-surface-raisin-black p-12">
            <h2 className="text-xl font-bold">Цель</h2>
            <p>{project.target}</p>
          </div>
          <div className="border-2 border-secondary-dark-purple bg-surface-raisin-black p-12">
            <h2 className="text-xl font-bold">Описание</h2>
            <p className="mt-6">{project.description}</p>
          </div>
          <div className="flex flex-row gap-6">
            <div className="w-1/2 border-2 border-secondary-dark-purple bg-surface-raisin-black p-12">
              <h2 className="text-xl font-bold">Кто требуется</h2>
              <div className="mt-8 flex w-fit flex-col  gap-3">
                {project.requiredPeople.map((requiredPeople) => {
                  return (
                    <Badge
                      text={requiredPeople.profession}
                      counterValue={requiredPeople.numberOfRequiredPeople}
                    />
                  );
                })}
              </div>
            </div>
            <div className="w-1/2 border-2 border-secondary-dark-purple bg-surface-raisin-black p-12">
              <h2 className="text-xl font-bold">Участники команды</h2>
              <div className="mt-8">
                <div className="flex w-full flex-col gap-3">
                  <Link
                    href={`/user/${project.creator.id}`}
                    className="flex flex-row justify-between"
                  >
                    <div className="flex flex-row gap-3">
                      <Image
                        src={project.creator.image}
                        alt="Изображение не загружено"
                        width={26}
                        height={26}
                        className="rounded-full"
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
                          <Image
                            src={member.image}
                            alt="Изображение не загружено"
                            width={26}
                            height={26}
                            className="rounded-full"
                          />
                          <p>{member.name}</p>
                        </div>
                        <p>{member.profession}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className=" text-3xl">Отклики</p>
            <div className="item-center mt-8 flex justify-between">
              <div className=" flex items-center gap-5">
                <p>По тегам:</p>
                <Badge text="Frontend"></Badge>
                <Badge text="Backend"></Badge>
                <Badge text="Design"></Badge>
              </div>
              <div className=" flex items-center">
                <p>За всё время</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 grid-rows-3 gap-6">
              {response.map((response) => {
                return (
                  <SectionWrapper className="flex flex-col gap-6">
                    <div className=" flex items-center justify-between">
                      <p>{response.project.title}</p>
                      <Badge text="Frontend" />
                    </div>
                    <div className=" flex items-center gap-3">
                      <Image
                        src={response.candidate.image}
                        width={38}
                        height={38}
                        alt="не найдено"
                        className="rounded-full"
                      />
                      <p>{response.candidate.name}</p>
                    </div>
                    <div className=" flex items-center justify-between">
                      <p>{response.date.toString()}</p>
                    </div>
                  </SectionWrapper>
                );
              })}
            </div>
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
