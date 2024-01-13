import React from "react";

import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string | null;
  userId: string;
  term: string;
  status: string;
}

type Props = {
  project: Project;
  href: string;
};

const ProjectCard: React.FC<Props> = React.memo(
({ project, href }) => {
  return (
    <Link href={`./projects/${href}`} className="inline-flex items-start justify-start gap-8 self-stretch">
      <div className="inline-flex shrink grow basis-0 flex-col items-end justify-start gap-7">
        <div className="flex  flex-col items-start justify-start gap-5 self-stretch rounded-2xl bg-zinc-800 p-8">
          <div className="flex flex-col items-start justify-start gap-5 self-stretch">
            <div className="inline-flex items-start justify-start gap-3 self-stretch">
              <div className="flex items-center justify-end gap-6">
                <div className="flex items-start justify-start gap-3">
                  <div className="flex items-center justify-end gap-2.5 rounded-xl border border-white px-3 py-0.5">
                    <p className="text-center font-['Roboto'] text-lg font-normal leading-normal tracking-wide text-white">
                      Frontend
                    </p>
                  </div>
                  <div className="flex items-center justify-end gap-2.5 rounded-xl border border-white px-3 py-0.5">
                    <p className="text-center font-['Roboto'] text-lg font-normal leading-normal tracking-wide text-white">
                      Design
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex shrink grow  basis-0 items-center justify-end gap-2.5">
                <p className="font-['Inter'] text-base font-normal leading-tight tracking-tight text-zinc-100">
                  Создатель
                </p>
              </div>
            </div>
            <div className="flex  flex-col items-start justify-start gap-5 self-stretch">
              <div className="flex  flex-col items-start justify-start gap-4 self-stretch">
                <div className="flex  flex-col items-start justify-start gap-4 self-stretch">
                  <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
                    <p className="shrink grow basis-0 font-['Inter'] text-2xl font-normal leading-tight tracking-tight text-white">
                      {project?.title}
                    </p>
                  </div>
                  <div className=" inline-flex items-start justify-start gap-4">
                    <div className="  relative">
                      <p className="absolute left-0 top-0 font-['Inter'] text-base font-normal leading-tight tracking-tight text-zinc-100">
                        Описание
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
                    <p className="shrink grow basis-0 font-['Inter'] text-2xl font-normal leading-tight tracking-tight text-white">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center justify-end gap-2.5">
                <p className="font-['Inter'] text-base font-normal leading-tight tracking-tight text-zinc-100">
                  {project.term}
                </p>
              </div>
              <div className="inline-flex items-center justify-center gap-2.5">
                <div className="font-['Inter'] text-base font-normal leading-tight tracking-tight text-zinc-100">
                  {project.status}
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex items-center justify-start gap-16 self-stretch">
            <div className="flex items-start justify-start">
              <div className="flex items-center justify-center gap-2.5 rounded-lg bg-zinc-100 px-8 py-4">
                <button className="font-['Roboto'] text-base font-medium leading-tight tracking-wide text-stone-900">
                  Откликнуться
                </button>
              </div>
            </div>
            <div className="flex shrink grow basis-0 items-center justify-end gap-2.5">
              <div className="font-['Inter'] text-base font-normal leading-tight tracking-tight text-zinc-100">
                Не могу вывести
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
)
export default ProjectCard;
