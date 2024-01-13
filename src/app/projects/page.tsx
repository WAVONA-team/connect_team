import React from "react";
import { api } from "@/trpc/server";

import ProjectsCard from "@/modules/projectCard/ProjectCard";

import Container from "@/ui/container/Container";

const Projects: React.FC = async () => {

  const projects = await api.project.getAll.query();

  return (
    <Container>
      <div className=" items-start justify-start gap-8 pt-9">
        <div className=" h-9  items-start justify-start gap-2.5 ">
          <div className="relative w-full">
            <div className=" bg-gray-200 absolute left-0 top-[37px] h-px w-full" />
            <div className="absolute left-0 top-0  items-center justify-center gap-8">
              <div className=" items-center justify-center">
                <div className=" items-center justify-center px-1 pb-4">
                  <div className="font-['Inter'] text-base font-medium leading-tight text-zinc-100">
                    Проекты
                  </div>
                </div>
                <div className="h-0.5  bg-zinc-100" />
              </div>
            </div>
          </div>
        </div>
        <div className=" items-start justify-start gap-6 ">
          <div className="  items-center justify-start gap-2.5 ">
            <div className="font-['Roboto'] text-xl font-normal leading-normal tracking-wide text-stone-300">
              Зарегистрируйтесь, чтобы увидеть больше
            </div>
          </div>
          <div className=" items-start justify-start gap-6  rounded-2xl pb-6">
            <div className=" items-start justify-start gap-6 ">
              <div className=" items-center justify-start gap-6 ">
                <div className="   items-start justify-start gap-8">
                  <div className=" items-center justify-start gap-2.5 ">
                    <div className="font-['Roboto'] text-3xl font-normal leading-normal tracking-wide text-white">
                      Проекты
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-start">
                  <div className=" items-center justify-center gap-2.5 rounded-lg bg-zinc-100 px-8 py-4">
                    <a
                      href="projects/create"
                      className="font-['Roboto'] text-base font-normal leading-normal tracking-wide text-zinc-500"
                    >
                      Создать проект
                    </a>
                  </div>
                </div>
              </div>
              <div className=" items-start justify-start gap-6 ">
                <div className="  items-center justify-start gap-2.5 ">
                  <p className="font-['Roboto'] text-xl font-normal leading-normal tracking-wide text-white">
                    По тегам:
                  </p>
                </div>
                <div className="flex items-start justify-start gap-5">
                  <button className=" items-center justify-end gap-2.5 rounded-xl border border-white px-3 py-0.5">
                    <p className="text-center font-['Roboto'] text-xl font-normal leading-normal tracking-wide text-white">
                      Frontend
                    </p>
                  </button>
                  <button className="items-center justify-end gap-2.5 rounded-xl border border-white px-3 py-0.5">
                    <p className="text-center font-['Roboto'] text-xl font-normal leading-normal tracking-wide text-white">
                      Backend
                    </p>
                  </button>
                  <button className=" items-center justify-end gap-2.5 rounded-xl border border-white px-3 py-0.5">
                    <p className="text-center font-['Roboto'] text-xl font-normal leading-normal tracking-wide text-white">
                      Design
                    </p>
                  </button>
                </div>
              </div>
              <div className="  items-start justify-start gap-6">
                <div className="    items-start justify-start gap-6">
                  <div className="flex    items-center justify-start gap-8">
                    <div className="  items-start justify-start">
                      <div className=" items-start justify-start gap-4 rounded-lg opacity-70">
                        <div className="  items-center justify-start gap-4">
                          <input type="checkbox" />
                          <p className=" font-['Inter'] text-base font-medium leading-normal tracking-tight text-zinc-100">
                            Мои проекты
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" items-start justify-start">
                      <div className=" items-start justify-start gap-4 rounded-lg">
                        <div className=" items-center justify-start gap-4">
                          <input type="checkbox" />
                          <p className=" font-['Inter'] text-base font-medium leading-normal tracking-tight text-zinc-100">
                            Остальные проекты
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="  items-center justify-center gap-2.5">
                      <button className="font-['Roboto'] text-xl font-normal leading-normal tracking-wide text-white">
                        За все время
                      </button>
                    </div>
                    <div className="  items-center justify-center gap-2.5">
                      <button className="font-['Roboto'] text-xl font-normal leading-normal tracking-wide text-white">
                        Любая длительность
                      </button>

                    </div>
                    <div className=" items-center justify-center gap-2.5">
                      <button className="font-['Roboto'] text-xl font-normal leading-normal tracking-wide text-white">
                        Любой статус
                      </button>

                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-5 ">
                {projects.map((project) => {
                  return (
                    <ProjectsCard project={project} href={project.id}/>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
