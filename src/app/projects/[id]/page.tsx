import Image from "next/image";
import { api } from "@/trpc/server";
import Tabs from "@/ui/tabs/tabs";
import Badge from "@/ui/badge/Badge";
import { type Metadata } from "next";
import Container from "@/ui/container/Container";
import arrowDown from '../../../../public/images/arrowLeft.svg'
import Link from "next/link";
import userNoAvatar from '../../../../public/images/avatar.svg'
interface Props {
  params: {
    id: string;
  };
}
const Project: React.FC<Props> = async ({ params }) => {
  const project = await api.project.findById.query(params.id);
  return (
    <Container>
      <div className="text-onPrimary-anti-flash-withe">
        <nav className=" flex">
          <Tabs link='./projects' title='Проекты' isActive={true}></Tabs>
          <Tabs link='./profile' title='Профиль'></Tabs>
          <Tabs link='./' title='Отклики'></Tabs>
          <div className=" w-full border-zinc-300 border-b-2"></div>
        </nav>
        <div className="flex flex-col mt-8 gap-6">
          <div className="flex">
            <Link href='/projects' className=" flex">
              <Image src={arrowDown as string} alt="arrowDown" width={24} height={24} />
            </Link>
            <p className="ml-4 text-3xl">Проект</p>
          </div>
          <div className="bg-surface-raisin-black border-2 border-secondary-dark-purple flex p-12">
              {project?.image && project?.title ? (
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
                    alt='Изображение проекта'
                    width={208}
                    height={208}
                    className="rounded-lg"
                  />
                )}
              <div className="w-full ml-8 flex flex-row justify-between">
                <div>
                  <p className="font-bold text-xl">{project?.title}</p>
                  <p className="mt-8 mb-2 text-secondary-cadet-grey">Длительность</p>
                  <p>{project?.term}</p>
                  <p className="mt-6 mb-2 text-secondary-cadet-grey">Опубликован</p>
                  <p>{project?.published.toString()}</p>
                </div>
                <p>{project?.status}</p>
              </div>
          </div>
          <div className="bg-surface-raisin-black border-2 border-secondary-dark-purple p-12">
            <p className="font-bold text-xl">Цель</p>
            <p>{project?.target}</p>
          </div>
          <div className="bg-surface-raisin-black border-2 border-secondary-dark-purple p-12">
            <p className="font-bold text-xl">Описание</p>
            <p className="mt-6">{project?.description}</p>
          </div>
          <div className="flex flex-row gap-6">
            <div className="w-1/2 bg-surface-raisin-black border-2 border-secondary-dark-purple p-12">
              <p className="font-bold text-xl">Кто требуется</p>
              <div className="w-fit flex flex-col gap-3  mt-8">
                {project?.requiredPeople?.map((requiredPeople) => {
                  return (
                    <Badge text={requiredPeople.Profession} counterValue={requiredPeople.numberOfRequiredPeople}/>
                  );
                })}
              </div>
            </div>
            <div className="w-1/2 bg-surface-raisin-black border-2 border-secondary-dark-purple p-12">
              <p className="font-bold text-xl">Участники команды</p>
              <div className="mt-8">
                <div className="w-full flex flex-col gap-3">
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-3">
                      <Image
                        src={project.creator.image.toString()}
                        alt='Изображение не загружено'
                        width={26}
                        height={26}
                        className="rounded-full"
                      />
                      <p>{project?.creator.name}</p>
                    </div>
                    <p>Создатель/{project?.creator.profession}</p>
                  </div>
                  {project?.members?.map((member) => {
                  return (
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-row gap-3">
                        <Image
                          src={member.image.toString()}
                          alt='Изображение не загружено'
                          width={26}
                          height={26}
                          className="rounded-full"
                        />
                        <p>{member.name}</p>
                      </div>
                      <p>{member.profession}</p>
                    </div>
                  );
                  })}
                </div>
              </div>
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
  const project = await api.project.findById.query( params.id );
  return {
    title: `${project?.title}`,
  };
};
