import React from "react";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";

import UserProjectCard from "@/modules/userProjectCard/UserProjectCard";
import UserDescription from "@/components/userDescription/UserDescription";

import Badge from "@/ui/badge/Badge";
import MainButtonLink from "@/ui/mainButton/MainButtonLink";
import ProfileImage from "@/ui/profileImage/ProfileImage";
import SectionWrapper from "@/ui/sectionWrapper/SectionWrapper";
import BackButton from "@/ui/backButton/BackButton";
import MarkdownViewer from "@/ui/markdown/MarkdownViewer";

type Props = {
  userId: string;
  coverLetter?: string;
  isAccepted?: boolean;
};

const UserPage: React.FC<Props> = React.memo(
  async ({ userId, coverLetter = "", isAccepted = false }) => {
    const session = await getServerAuthSession();
    const user = await api.user.get.query({ id: userId });

    if (!user) {
      return <p>error</p>;
    }

    return (
      <div className="mt-12 w-full text-onPrimary-anti-flash-withe">
        <div className="mb-6 flex justify-between">
          <div className="flex items-center">
            <BackButton />

            <h2 className="ml-4 text-3xl">Профиль</h2>
          </div>
          <MainButtonLink
            text="Редактировать"
            path={`/user/${user.id}/settings`}
            target="_self"
          />
        </div>

        {!!coverLetter.length && !isAccepted && (
          <SectionWrapper className="mb-6">
            <h2 className="text-3xl">Сопроводительное письмо</h2>

            <MarkdownViewer className="mt-6" source={coverLetter} />
          </SectionWrapper>
        )}

        <SectionWrapper className="mb-6 flex gap-6">
          <div>
            <ProfileImage
              imageSrc={user.image}
              alt={user.name ?? "Не найден"}
            />
          </div>
          <div className=" flex flex-col gap-5">
            <div className=" flex items-center gap-5">
              <p className="text-3xl font-bold ">{user.name}</p>
              <Badge text={user.profession ?? ""} />
            </div>
            <p>Город: {user.city}</p>
            <p>Возраст: {user.age}</p>
            <p>Владение языками: {user.languages}</p>
            <div className=" flex flex-col gap-6">
              <p className="font-bold">Контакты</p>
              <div className="flex">
                <div className=" mr-6 flex ">
                  <p>{user.email}</p>
                </div>
                <div className="flex">
                  <p>{user.telegram}</p>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="mb-6 flex w-full flex-col gap-6">
          <h2 className="text-xl font-bold">Обо мне</h2>

          <UserDescription description={user.description ?? ""} />
        </SectionWrapper>

        {(!!user.createdProjects.length || !!user.memberOfProjects.length) && (
          <div>
            <div className="mb-6 flex  justify-between">
              <h2 className="text-3xl">
                {session?.user.id === user.id
                  ? "Мои проекты"
                  : `Проекты ${user.name}`}
              </h2>

              {session?.user.id === user.id && (
                <MainButtonLink
                  text="Создать проект"
                  path={`/projects/create`}
                  target="_self"
                />
              )}
            </div>
            <div className="grid grid-cols-2 grid-rows-3 gap-6">
              {!!user.createdProjects.length &&
                user.createdProjects.map((project) => {
                  return (
                    <UserProjectCard
                      key={project.id}
                      project={project}
                      role="Создатель"
                    />
                  );
                })}

              {!!user.memberOfProjects.length &&
                user.memberOfProjects.map((project) => {
                  return (
                    <UserProjectCard
                      key={project.id}
                      project={project}
                      role="Участник"
                    />
                  );
                })}
            </div>
          </div>
        )}
      </div>
    );
  },
);

export default UserPage;
