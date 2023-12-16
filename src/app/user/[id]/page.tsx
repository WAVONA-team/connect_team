import Image from "next/image";
import { api } from "@/trpc/server";
import { type Metadata } from "next";

interface Props {
  params: {
    id: string;
  };
}

const User: React.FC<Props> = async ({ params }) => {
  const user = await api.user.get.query({ id: params.id });
  return (
    <div>
      <header className=" w-full mb-6">
        <nav className=" border-b-2 border-gray-400">
          <div className=" flex flex-row w-3/12 justify-between">
            <a href={`/user/${params.id}/projects`} className="text-gray-500 text-base font-medium font-['Inter'] leading-tight">Проекты</a>
            <a href="" className="text-zinc-100 text-base font-medium font-['Inter'] leading-tight border-b-4">Профиль</a>
            <a href={`/user/${params.id}/reviews`}  className="text-gray-500 text-base font-medium font-['Inter'] leading-tight">Отклики</a>
          </div>
        </nav>
      </header>
      <div className=" w-full">
        <div className="  flex flex-col w-full">
          <div className=" flex flex-row justify-between mb-6">
            <p className=" text-white text-3xl font-normal font-['Roboto'] leading-normal tracking-wide">Профиль</p>
            <button className="px-6 py-4 bg-neutral-600 rounded-lg justify-center items-center gap-5 flex w-44 h-14 text-zinc-100 text-base font-normal font-['Roboto'] leading-normal tracking-wide">Редактировать</button>
          </div>
          <div className=" p-12 bg-zinc-800 rounded-2xl border gap-6 flex flex-row border-hidden mb-6">
            <div>
              {user?.image && user?.name ? (
                <Image src={user.image} alt={user.name} width={208} height={208} className="rounded-full"/>
              ) : (
                <div className="w-52 h-52 bg-zinc-100 rounded-full"  />
              )}
            </div>
            <div>
              <div className=" flex flex-row gap-5">
                <p className="text-white text-2xl font-normal font-['Roboto'] leading-normal tracking-wide">{user?.name}</p>
                <div className="px-3 py-0.5 rounded-xl border border-white justify-end items-center gap-2.5 inline-flex">
                  <p className="text-center text-white text-xl font-normal font-['Roboto'] leading-normal tracking-wide">{user?.profesion}</p>
                </div>
              </div>
              <p className="text-white text-lg font-normal font-['Roboto'] leading-normal tracking-wide">Город: {user?.city}</p>
              <p className="text-white text-lg font-normal font-['Roboto'] leading-normal tracking-wide">Возраст: {user?.age}</p>
              <p className="text-white text-lg font-normal font-['Roboto'] leading-normal tracking-wide">Владение языками: {user?.languages}</p>
              <div className=" flex flex-col">
                <p className="text-white text-xl font-normal font-['Roboto'] leading-normal tracking-wide">Контакты</p>
                <div className=" flex flex-row">
                  <div className=" flex flex-row mr-6">
                    <p className="text-white text-xl font-normal font-['Roboto'] leading-normal tracking-wide">{user?.email}</p>
                  </div>
                  <div className=" flex flex-row">
                    <p className="text-white text-xl font-normal font-['Roboto'] leading-normal tracking-wide">{user?.telegram}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" p-12 bg-zinc-800 rounded-2xl border gap-6 inline-flex flex-col border-hidden mb-6">
            <p className="text-zinc-100 text-3xl font-normal font-['Roboto'] leading-normal tracking-wide" >Обо мне</p>
            <p className=" w-3/4 text-zinc-100 text-base font-normal font-['Roboto'] leading-normal tracking-wide">{user?.description}</p>
          </div>
        </div>
        <div>
          <div className=" flex flex-row justify-between mb-6">
            <p className="text-white text-3xl font-normal font-['Roboto'] leading-normal tracking-wide">Мои проекты</p>
            <button className="px-6 py-4 bg-neutral-600 rounded-lg justify-center items-center gap-5 flex w-44 h-14 text-zinc-100 text-base font-normal font-['Roboto'] leading-normal tracking-wide">Создать проект</button>
          </div>
          <div className=" grid grid-rows-3 grid-cols-2">
            {user?.projects.map(project => {return(
              <div className=" w-11/12 p-8 bg-zinc-800 rounded-2xl border gap-6  flex flex-row border-hidden mb-6">
                <div className=" flex flex-col justify-between ">
                  <div>
                    <p className="text-white text-2xl font-normal font-['Inter'] leading-7 tracking-tight">
                      {project.title}
                    </p>
                  </div>
                  <div>
                    <p className="text-zinc-100 text-base font-normal font-['Inter'] leading-tight tracking-tight">
                      Не могу вывести
                    </p>
                  </div>
                  <div>
                    <p className="text-zinc-100 text-base font-normal font-['Inter'] leading-tight tracking-tight">
                      {project.status}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                  <p className="text-zinc-100 text-base font-normal font-['Inter'] leading-tight tracking-tight">
                    Участник
                  </p>
                  </div>
                  <div>
                  <p className="text-zinc-100 text-base font-normal font-['Inter'] leading-tight tracking-tight">
                    {project.term}
                  </p>
                  </div>
                </div>
              </div>
            )})}
          </div>
        </div>
      </div>
    </div>
  );
}
export default User;

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const user = await api.user.get.query({ id: params.id });
  return {
    title: `${user?.name} profile`,
  };
};
