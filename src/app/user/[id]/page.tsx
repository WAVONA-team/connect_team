import Image from "next/image";
import { api } from "@/trpc/server";
import { type Metadata } from "next";
import Container from "@/ui/container/Container";

interface Props {
  params: {
    id: string;
  };
}

const User: React.FC<Props> = async ({ params }) => {
  const user = await api.user.get.query({ id: params.id });

  return (
    <Container>
      <nav className="mb-6 w-full border-b-2 border-gray-400">
        <div className=" flex w-3/12 flex-row justify-between">
          <a
            href={`/projects`}
            className="font-['Inter'] text-base font-medium leading-tight text-gray-500"
          >
            Проекты
          </a>
          <a
            href=""
            className="border-b-4 font-['Inter'] text-base font-medium leading-tight text-zinc-100"
          >
            Профиль
          </a>
          <a
            href={`/responses/${params.id}`}
            className="font-['Inter'] text-base font-medium leading-tight text-gray-500"
          >
            Отклики
          </a>
        </div>
      </nav>
      <div className=" w-full">
        <div className=" w-full">
          <div className=" mb-6 flex flex-row justify-between">
            <p className=" font-['Roboto'] text-3xl font-normal leading-normal tracking-wide text-white">
              Профиль
            </p>
            <button className="flex h-14 w-44 items-center justify-center gap-5 rounded-lg bg-neutral-600 px-6 py-4 font-['Roboto'] text-base font-normal leading-normal tracking-wide text-zinc-100">
              Редактировать
            </button>
          </div>
          <div className=" mb-6 flex flex-row gap-6 rounded-2xl border border-hidden bg-zinc-800 p-12">
            <div>
              {user?.image && user?.name ? (
                <Image
                  src={user.image}
                  alt={user.name}
                  width={208}
                  height={208}
                  className="rounded-full"
                />
              ) : (
                <div className="h-52 w-52 rounded-full bg-zinc-100" />
              )}
            </div>
            <div>
              <div className=" flex flex-row gap-5">
                <p className="font-['Roboto'] text-2xl font-normal leading-normal tracking-wide text-white">
                  {user?.name}
                </p>
                <div className="inline-flex items-center justify-end gap-2.5 rounded-xl border border-white px-3 py-0.5">
                  <p className="text-center font-['Roboto'] text-xl font-normal leading-normal tracking-wide text-white">
                    {user?.profession}
                  </p>
                </div>
              </div>
              <p className="font-['Roboto'] text-lg font-normal leading-normal tracking-wide text-white">
                Город: {user?.city}
              </p>
              <p className="font-['Roboto'] text-lg font-normal leading-normal tracking-wide text-white">
                Возраст: {user?.age}
              </p>
              <p className="font-['Roboto'] text-lg font-normal leading-normal tracking-wide text-white">
                Владение языками: {user?.languages}
              </p>
              <div className=" flex flex-col">
                <p className="font-['Roboto'] text-xl font-normal leading-normal tracking-wide text-white">
                  Контакты
                </p>
                <div className=" flex flex-row">
                  <div className=" mr-6 flex flex-row">
                    <p className="font-['Roboto'] text-xl font-normal leading-normal tracking-wide text-white">
                      {user?.email}
                    </p>
                  </div>
                  <div className=" flex flex-row">
                    <p className="font-['Roboto'] text-xl font-normal leading-normal tracking-wide text-white">
                      {user?.telegram}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6 inline-flex w-full flex-col gap-6 rounded-2xl border border-hidden bg-zinc-800 p-12">
            <p className="font-['Roboto'] text-3xl font-normal leading-normal tracking-wide text-zinc-100">
              Обо мне
            </p>
            <p className=" w-3/4 font-['Roboto'] text-base font-normal leading-normal tracking-wide text-zinc-100">
              {user?.description}
            </p>
          </div>
        </div>
        <div>
          <div className=" mb-6 flex flex-row justify-between">
            <p className="font-['Roboto'] text-3xl font-normal leading-normal tracking-wide text-white">
              Мои проекты
            </p>
            <button className="flex h-14 w-44 items-center justify-center gap-5 rounded-lg bg-neutral-600 px-6 py-4 font-['Roboto'] text-base font-normal leading-normal tracking-wide text-zinc-100">
              Создать проект
            </button>
          </div>
          <div className=" grid grid-cols-2 grid-rows-3 gap-6">
            {user?.memberOfProjects.map((project) => {
              return (
                <div className=" flex flex-row gap-6 rounded-2xl border  border-hidden bg-zinc-800 p-8">
                  <div className=" flex flex-col justify-between ">
                    <div>
                      <p className="font-['Inter'] text-2xl font-normal leading-7 tracking-tight text-white">
                        {project.title}
                      </p>
                    </div>
                    <div>
                      <p className="font-['Inter'] text-base font-normal leading-tight tracking-tight text-zinc-100">
                        Не могу вывести
                      </p>
                    </div>
                    <div>
                      <p className="font-['Inter'] text-base font-normal leading-tight tracking-tight text-zinc-100">
                        {project.status}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="font-['Inter'] text-base font-normal leading-tight tracking-tight text-zinc-100">
                        Участник
                      </p>
                    </div>
                    <div>
                      <p className="font-['Inter'] text-base font-normal leading-tight tracking-tight text-zinc-100">
                        {project.term}
                      </p>
                    </div>
                  </div>
                </div>
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
