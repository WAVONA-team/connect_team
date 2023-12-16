import { api } from "@/trpc/server";
import React from "react";


const Projects: React.FC = async () => {
  const projects = await api.project.getAll.query()
  console.log(projects)

  return (
    <div className=" pt-9 flex-col justify-start items-start gap-8 inline-flex">
      <div className="self-stretch h-9 flex-col justify-start items-start gap-2.5 flex">
        <div className="w-full relative">
          <div className=" w-full h-px left-0 top-[37px] absolute bg-gray-200" />
          <div className="left-0 top-0 absolute justify-center items-center gap-8 inline-flex">
            <div className="flex-col justify-center items-center inline-flex">
              <div className="px-1 pb-4 justify-center items-center inline-flex">
                <div className="text-zinc-100 text-base font-medium font-['Inter'] leading-tight">Проекты</div>
              </div>
              <div className="self-stretch h-0.5 bg-zinc-100" />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-col justify-start items-start gap-6 flex">
        <div className="self-stretch  justify-start items-center gap-2.5 inline-flex">
          <div className="text-stone-300 text-xl font-normal font-['Roboto'] leading-normal tracking-wide">Зарегистрируйтесь, чтобы увидеть больше</div>
        </div>
        <div className="self-stretch  pb-6 rounded-2xl flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch  flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch justify-start items-center gap-6 inline-flex">
              <div className="grow shrink basis-0 justify-start items-start gap-8 flex">
                <div className="self-stretch justify-start items-center gap-2.5 flex">
                  <div className="text-white text-3xl font-normal font-['Roboto'] leading-normal tracking-wide">Проекты</div>
                </div>
              </div>
              <div className="justify-start items-start flex">
                <div className="px-8 py-4 bg-zinc-100 rounded-lg justify-center items-center gap-2.5 flex">
                  <a href="projects/create" className="text-zinc-500 text-base font-normal font-['Roboto'] leading-normal tracking-wide">Создать проект</a>
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-6 inline-flex">
              <div className=" self-stretch justify-start items-center gap-2.5 flex">
                <p className="text-white text-xl font-normal font-['Roboto'] leading-normal tracking-wide">По тегам:</p>
              </div>
              <div className="justify-start items-start gap-5 flex">
                <button className="px-3 py-0.5 rounded-xl border border-white justify-end items-center gap-2.5 flex">
                  <p className="text-center text-white text-xl font-normal font-['Roboto'] leading-normal tracking-wide">Frontend </p>
                </button>
                <button className="px-3 py-0.5 rounded-xl border border-white justify-end items-center gap-2.5 flex">
                  <p className="text-center text-white text-xl font-normal font-['Roboto'] leading-normal tracking-wide">Backend</p>
                </button>
                <button className="px-3 py-0.5 rounded-xl border border-white justify-end items-center gap-2.5 flex">
                  <p className="text-center text-white text-xl font-normal font-['Roboto'] leading-normal tracking-wide">Design </p>
                </button>
              </div>
            </div>
            <div className=" justify-start items-start gap-6 inline-flex">
              <div className="grow shrink basis-0  justify-start items-start gap-6 flex">
                <div className="grow shrink basis-0  justify-start items-center gap-8 flex">
                  <div className=" justify-start items-start flex">
                    <div className="opacity-70 rounded-lg justify-start items-start gap-4 flex">
                      <div className="flex-row justify-start items-center inline-flex gap-4">
                        <input type="checkbox" />
                        <p className="self-stretch text-zinc-100 text-base font-medium font-['Inter'] leading-normal tracking-tight">Мои проекты</p>
                      </div>
                    </div>
                  </div>
                  <div className="justify-start items-start flex">
                    <div className="rounded-lg justify-start items-start gap-4 flex">
                      <div className="flex-row justify-start items-center inline-flex gap-4">
                        <input type="checkbox" />
                        <p className="self-stretch text-zinc-100 text-base font-medium font-['Inter'] leading-normal tracking-tight">Остальные проекты</p>
                      </div>
                    </div>
                  </div>
                  <div className=" justify-center items-center gap-2.5 flex">
                    <button className="text-white text-xl font-normal font-['Roboto'] leading-normal tracking-wide">За все время</button>
                    <div className=" relative">
                      <div className=" left-0 top-0 absolute">
                      </div>
                    </div>
                  </div>
                  <div className=" justify-center items-center gap-2.5 flex">
                    <button className="text-white text-xl font-normal font-['Roboto'] leading-normal tracking-wide">Любая длительность</button>
                    <div className=" relative">
                      <div className=" left-0 top-0 absolute">
                      </div>
                    </div>
                  </div>
                  <div className=" justify-center items-center gap-2.5 flex">
                    <button className="text-white text-xl font-normal font-['Roboto'] leading-normal tracking-wide">Любой статус</button>
                    <div className=" relative">
                      <div className=" left-0 top-0 absolute">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" self-stretch justify-start items-start gap-3 flex">
                <div className=" relative">
                  <div className=" left-0 top-0 absolute">
                  </div>
                </div>
                <div className=" self-stretch justify-start items-center gap-2.5 flex">
                  <div className=" relative">
                    <div className=" left-0 top-0 absolute">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-5 flex">
              {projects.map(project => {return(
                <div className="self-stretch justify-start items-start gap-8 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-end gap-7 inline-flex">
                  <div className="self-stretch  p-8 bg-zinc-800 rounded-2xl flex-col justify-start items-start gap-5 flex">
                    <div className="self-stretch flex-col justify-start items-start gap-5 flex">
                      <div className="self-stretch justify-start items-start gap-3 inline-flex">
                        <div className="justify-end items-center gap-6 flex">
                          <div className="justify-start items-start gap-3 flex">
                            <div className="px-3 py-0.5 rounded-xl border border-white justify-end items-center gap-2.5 flex">
                              <p className="text-center text-white text-lg font-normal font-['Roboto'] leading-normal tracking-wide">Frontend </p>
                            </div>
                            <div className="px-3 py-0.5 rounded-xl border border-white justify-end items-center gap-2.5 flex">
                              <p className="text-center text-white text-lg font-normal font-['Roboto'] leading-normal tracking-wide">Backend</p>
                            </div>
                            <div className="px-3 py-0.5 rounded-xl border border-white justify-end items-center gap-2.5 flex">
                              <p className="text-center text-white text-lg font-normal font-['Roboto'] leading-normal tracking-wide">Design</p>
                            </div>
                          </div>
                        </div>
                        <div className="grow shrink basis-0  justify-end items-center gap-2.5 flex">
                          <p className="text-zinc-100 text-base font-normal font-['Inter'] leading-tight tracking-tight">Создатель</p>
                        </div>
                      </div>
                      <div className="self-stretch  flex-col justify-start items-start gap-5 flex">
                        <div className="self-stretch  flex-col justify-start items-start gap-4 flex">
                          <div className="self-stretch  flex-col justify-start items-start gap-4 flex">
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                              <p className="grow shrink basis-0 text-white text-2xl font-normal font-['Inter'] leading-tight tracking-tight">{project?.title}</p>
                            </div>
                            <div className=" justify-start items-start gap-4 inline-flex">
                              <div className="  relative">
                                <p className="left-0 top-0 absolute text-zinc-100 text-base font-normal font-['Inter'] leading-tight tracking-tight">Описание</p>
                              </div>
                            </div>
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                              <p className="grow shrink basis-0 text-white text-2xl font-normal font-['Inter'] leading-tight tracking-tight">{project.description}</p>
                            </div>
                          </div>
                        </div>
                        <div className="justify-end items-center gap-2.5 inline-flex">
                          <p className="text-zinc-100 text-base font-normal font-['Inter'] leading-tight tracking-tight">{project.term}</p>
                        </div>
                        <div className="justify-center items-center gap-2.5 inline-flex">
                          <div className="text-zinc-100 text-base font-normal font-['Inter'] leading-tight tracking-tight">{project.status}</div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-center gap-16 inline-flex">
                      <div className="justify-start items-start flex">
                        <div className="px-8 py-4 bg-zinc-100 rounded-lg justify-center items-center gap-2.5 flex">
                          <button className="text-stone-900 text-base font-medium font-['Roboto'] leading-tight tracking-wide">Откликнуться</button>
                        </div>
                      </div>
                      <div className="grow shrink basis-0 justify-end items-center gap-2.5 flex">
                        <div className="text-zinc-100 text-base font-normal font-['Inter'] leading-tight tracking-tight">Не могу вывести</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )})}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Projects;
