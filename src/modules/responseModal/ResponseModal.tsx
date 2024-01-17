import React, { useState } from "react";
import { api } from "@/trpc/react";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";

import type NewProject from "@/shared/types/extendedModels/NewProject";
import createSearchParams from "@/shared/helpers/createSearchParams";

import Modal from "@/ui/modal/Modal";
import Badge from "@/ui/badge/Badge";
import MarkdownEditor from "@/ui/markdown/MarkdownEditor";
import SecondaryButton from "@/ui/secondaryButton/SecondaryButton";
import MainButton from "@/ui/mainButton/MainButton";

type Props = {
  active: boolean;
  projectId: string;
  projects: NewProject[];
};

type InputValues = {
  profession: string;
  message: string;
};

const ResponseModal: React.FC<Props> = React.memo(
  ({ active, projectId, projects }) => {
    const router = useRouter();
    const searchParams = useSearchParams()!;

    const { data: project } = api.project.findById.useQuery(projectId);
    const responseMutation = api.response.create.useMutation();

    const [badgeValue, setBadgeValue] = useState("");
    const [isMarkdownShowed, setIsMarkdownShowed] = useState(false);

    const {
      handleSubmit,
      formState: { errors },
      control,
      reset,
      setValue,
    } = useForm<InputValues>({
      defaultValues: {
        profession: "",
        message: "",
      },
    });

    const onSubmit: SubmitHandler<InputValues> = (data) => {
      responseMutation.mutate({
        projectId,
        status: "На рассмотрении",
        date: new Date().toISOString(),
        message: data.message,
        profession: data.profession,
      });
      reset();
      router.push(
        createSearchParams({ responseProjectId: null }, searchParams),
      );
    };

    const isProjectExists = projects.some(
      (project) => project.id === projectId,
    );

    return (
      <Modal active={active} paramName="responseProjectId">
        {!isProjectExists ? (
          <p className="text-base text-error-imperial-red">
            К сожалению, при выполнении запроса произошла ошибка. Обратитесь в
            службу поддержки
          </p>
        ) : (
          <form
            action="#"
            method="POST"
            className="flex flex-col items-start"
            onSubmit={handleSubmit(onSubmit)}
          >
            <p className="text-3xl text-onPrimary-anti-flash-withe">
              Отклик на проект
            </p>

            <div className="relative mt-10 flex w-full items-center gap-5">
              {errors.profession && (
                <p className="absolute -top-8 font-semibold text-error-imperial-red">
                  {errors.profession.message}
                </p>
              )}

              {[...new Set(project?.requiredPeople)]
                .sort((a, b) => a.profession.localeCompare(b.profession))
                .map((requiredPerson) => {
                  const { profession, id } = requiredPerson;

                  return (
                    <Badge
                      text={profession}
                      key={id}
                      isActive={badgeValue === profession}
                      onClick={() => {
                        setValue("profession", profession);
                        setBadgeValue(profession);
                      }}
                    />
                  );
                })}

              <Controller
                name="profession"
                control={control}
                rules={{ required: "Пожалуйста, выберите профессию" }}
                render={({ field }) => (
                  <input
                    type="text"
                    defaultValue={field.value}
                    className="absolute left-[9999px] top-[9999px] h-0 w-0"
                  />
                )}
              />
            </div>

            <h2 className="mt-8 block text-xl font-bold text-onPrimary-anti-flash-withe">
              {project?.title}
            </h2>

            {isMarkdownShowed ? (
              <div className="mt-8 w-full">
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <MarkdownEditor
                      source={field.value}
                      setSource={(value) => field.onChange(value)}
                      withoutToolBar
                      withDragBar={false}
                    />
                  )}
                />
              </div>
            ) : (
              <button
                type="button"
                className="text-accent-azure border-accent-azure mt-8 block border-b-2 border-dashed pb-1"
                onClick={() => setIsMarkdownShowed(true)}
              >
                Сопроводительное письмо
              </button>
            )}

            <div className="mt-10 flex w-full justify-end gap-4">
              <SecondaryButton
                onClick={() => {
                  router.push(
                    createSearchParams(
                      { responseProjectId: null },
                      searchParams,
                    ),
                  );
                }}
                text="Отмена"
              />

              <MainButton type="submit" text="Отправить" />
            </div>
          </form>
        )}
      </Modal>
    );
  },
);

export default ResponseModal;
