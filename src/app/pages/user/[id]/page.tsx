
import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { api } from "@/trpc/server";

import UserProjectCard from "@/modules/userProjectCard/UserProjectCard"

import NavBar from "@/components/navBar/NavBar";

import Container from "@/ui/container/Container";
import SectionWrapper from "@/ui/sectionWrapper/SectionWrapper";
import Badge from "@/ui/badge/Badge";
import MainButtonLink from "@/ui/mainButton/MainButtonLink";
import ProfileImage from "@/ui/profileImage/ProfileImage";
import UserDescription from "@/components/userDescription/UserDescription";

import arrowLeft from "../../../../../public/images/arrowLeft.svg";

interface Props {
  params: {
    id: string;
  };
}

const User: React.FC<Props> = async ({ params }) => {
  const user = await api.user.get.query({ id: params.id });
  if (!user) {
    return <p>error</p>;
  }

  return (
    <Container>
      <NavBar />
      <div className=" mt-12 w-full text-onPrimary-anti-flash-withe">
        <div className=" mb-6 flex  justify-between">
          <div className="flex items-center">
            <Link href="/projects">
              <Image
                src={arrowLeft as string}
                alt="arrowDown"
                width={24}
                height={24}
              />
            </Link>
            <h2 className="ml-4 text-3xl">Профиль</h2>
          </div>
          <MainButtonLink
            text="Редактировать"
            path={`/pages/user/${user.id}/settings`}
            target="_self"
          />
        </div>
        <SectionWrapper className=" mb-6 flex  gap-6">
          <div>
            <ProfileImage
              imageSrc={user.image}
              alt={user.name ?? "Не найден"}
            ></ProfileImage>
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
          <UserDescription description={user.description ?? ""}/>
        </SectionWrapper>
        <div>
          <div className=" mb-6 flex  justify-between">
            <h2 className="text-3xl ">Мои проекты</h2>
            <MainButtonLink
              text="Создать проект"
              path={`/pages/projects/create`}
              target="_self"
            />
          </div>
          <div className=" grid grid-cols-2 grid-rows-3 gap-6">
            {user.createdProjects.map((project) => {
              return (
                <UserProjectCard project={project} role="Участник"/>
              );
            })}
            {user.memberOfProjects.map((project) => {
              return (
                <UserProjectCard project={project} role="Создатель"/>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};
export default User;

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const user = await api.user.get.query({ id: params.id });
  return {
    title: `${user?.name} profile`,
  };
};
