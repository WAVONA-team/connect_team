import React, { useState } from "react";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/shared/localization/i18n";

import Input from "@/ui/input/Input";
import DatePicker from "@/ui/datepicker/DatePicker";
import MarkdownEditor from "@/ui/markdown/MarkdownEditor";
import ProfileImage from "@/ui/profileImage/ProfileImage";
import BackButton from "@/ui/backButton/BackButton";
import MainButton from "@/ui/mainButton/MainButton";
import CounterMultiSelect from "@/ui/counterMultiSelect/CounterMultiSelect";
import RadioButton from "@/ui/radioButton/RadioButton";
import SecondaryButton from "@/ui/secondaryButton/SecondaryButton";
import type { InitialType } from "@/ui/counterMultiSelect/types/initialType";

import type { DateValueType } from "react-tailwindcss-datepicker";
import makeInitialState from "@/ui/counterMultiSelect/helpers/makeInitialState";
import type NewProject from "@/shared/types/extendedModels/NewProject";

export type InputsValue = {
  image: string;
  title: string;
  term: string;
  published: Date;
  deadline: Date;
  status: string;
  target: string;
  description: string;
  preferredTypeOfCommunication: string;
  email: string;
  telegram: string;
  discord: string;
  site: string;
  requiredPeople: InitialType;
};

interface Props {
  project: Omit<NewProject, "createdAt" | "updatedAt">;
}
const calculateMonthDifference = (startDate: Date, endDate: Date) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const diffInMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  return diffInMonths;
};
const ProjectForm: React.FC<Props> = async({ project }) => {
  const { t } = await useTranslation('en');

  const router = useRouter();
  const allItems = ["Frontend", "Backend", "UI"];
  const projectMutation = api.project.create.useMutation();
  const [selectedItems, setSelectedItems] = useState<InitialType>(
    project.requiredPeople ?? makeInitialState(allItems),
  );

  const [dateRange, setDateRange] = useState({
    startDate: new Date(project.published ?? ""),
    endDate: new Date(project.deadline ?? ""),
  });
  const setDateRangefunction = (e: DateValueType) => {
    if (e === null) return;
    setDateRange({
      startDate: new Date(e.startDate ?? Date.now()),
      endDate: new Date(e.endDate ?? Date.now()),
    });
  };

  const terms = calculateMonthDifference(
    dateRange.startDate,
    dateRange.endDate,
  );
  const termsValue = terms + " Месяцев";
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<InputsValue>({
    defaultValues: {
      ...project,
      preferredTypeOfCommunication: project.preferredTypeOfCommunication ?? "",
      email: project.email ?? "",
      telegram: project.telegram ?? "",
      discord: project.discord ?? "",
      site: project.site ?? "",
      published: dateRange.startDate,
      deadline: dateRange.endDate,
    },
  });
  const onSubmit: SubmitHandler<InputsValue> = async (formData) => {
    try {
      await projectMutation.mutateAsync({
        image: formData.image,
        title: formData.title,
        term: `${termsValue}`,
        published: dateRange.startDate,
        deadline: dateRange.endDate,
        status: formData.status,
        target: formData.target,
        description: formData.description,
        preferredTypeOfCommunication: formData.preferredTypeOfCommunication,
        email: formData.email,
        telegram: formData.telegram,
        discord: formData.discord,
        site: formData.site,
        requiredPeople: JSON.stringify(selectedItems),
      });

      reset();
      router.push('/projects')
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const onCancel = () => {
    reset();
  };

  return (
    <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className=" flex">
          <BackButton></BackButton>
          <h2>{t("creatingProject")}</h2>
        </div>
        <div>
          <p className=" mb-8 mt-7">
            <span className=" text-error-imperial-red">*</span>
            {t("requiredFields")}
          </p>
        </div>
      </div>
      <div className=" flex flex-col gap-12">
        <h2 className=" font-bold">{t("information")}</h2>
        <div>
          <div>
            <div className=" flex items-center">
              <ProfileImage
                imageSrc="https://avatars.githubusercontent.com/u/70152685?v=4"
                alt="projectImage"
              ></ProfileImage>
              <MainButton
                text={t("redact")}
                className=" ml-8 h-12"
              ></MainButton>
            </div>
            <div className=" flex items-center">
              <p className=" mr-24 mt-8 w-72">
                {t("yourProjectName")}
                <span className=" text-error-imperial-red">*</span>
              </p>
              <Controller
                name="title"
                control={control}
                rules={{ required: `${t("required")}` }}
                render={({ field }) => (
                  <Input
                    value={field.value}
                    onChange={(event) => field.onChange(event.target.value)}
                    error={errors.title?.message}
                    className=" !w-96"
                    placeholder="Connet Team"
                  />
                )}
              />
            </div>
            <div className=" flex items-center">
              <p className=" mr-24 mt-8 w-72">
                {t("termsForProjects")}
                <span className=" text-error-imperial-red">*</span>
              </p>
              <div className=" w-96">
                <Controller
                  name="target"
                  control={control}
                  rules={{ required: `${t("required")}` }}
                  render={() => (
                    <DatePicker
                      date={dateRange}
                      onDateChange={setDateRangefunction}
                    ></DatePicker>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2 className=" mb-6 font-bold">
             {t("target")}<span className=" text-error-imperial-red">*</span>
            </h2>
          </div>
          <p className=" text-secondary-cadet-grey">
            {t("targetDesctiption")}
          </p>
          <Controller
            name="target"
            control={control}
            rules={{ required: `${t("required")}` }}
            render={({ field }) => (
              <Input
                value={field.value}
                onChange={(event) => field.onChange(event.target.value)}
                error={errors.target?.message}
                className=" !w-96"
                placeholder={t("targetPlaceholder")}
              />
            )}
          />
        </div>
        <div>
          <h2 className=" font-bold">
            {t("projectDescription")}
            <span className=" text-error-imperial-red">*</span>
          </h2>
          <p className=" mb-8 mt-4 text-secondary-cadet-grey">
            {t("projectDescription.description")}
          </p>
          {errors.description && <p>{errors.description.message}</p>}
          <Controller
            name="description"
            control={control}
            rules={{ required: `${t("required")}` }}
            render={({ field }) => (
              <MarkdownEditor
                source={field.value}
                setSource={(event) => {
                  field.onChange(event);
                }}
                placeholder={t("markDownPlaceholder")}
              />
            )}
          />
        </div>
        <div>
          <h2 className=" font-bold">
          {t("whoNeeded")}
            <span className=" text-error-imperial-red">*</span>
          </h2>
          <p className=" mb-8 mt-4 text-secondary-cadet-grey">
            {t("addWhoNeeded")}
          </p>
          {errors.requiredPeople && `${t("required")}`}
          <Controller
            name="target"
            control={control}
            rules={{ required: `${t("required")}` }}
            render={() => (
              <CounterMultiSelect
                allItems={selectedItems ?? []}
                onNumberChange={setSelectedItems}
                placeholder={t("whoNeededPlaceholder")}
                className=" h-12 w-fit"
              />
            )}
          />
        </div>
        <div>
          <p className=" font-bold">
            {t("linkToContacts")}
            <span className=" text-error-imperial-red">*</span>
          </p>
          <p className=" mb-8 mt-4 text-secondary-cadet-grey">
            {t("linkToContactsDescription")}
          </p>
          <div className=" flex items-center">
            <p className=" mt-8 w-72">{t("email")}</p>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  value={field.value}
                  onChange={(event) => field.onChange(event.target.value)}
                  error={errors.email?.message}
                  className=" !w-96"
                  placeholder="example@mail.com"
                />
              )}
            />
            <Controller
              name="preferredTypeOfCommunication"
              control={control}
              render={({ field }) => (
                <RadioButton
                  labelText={t("preferredTypeOfCommunication")}
                  radioName="links"
                  onChange={(event) => field.onChange(event.target.value)}
                  radioValue="email"
                  labelClassName=" ml-9 flex mt-10 gap-4"
                />
              )}
            />
          </div>
          <div className=" flex items-center">
            <p className=" mt-8 w-72">{t("telegram")}</p>
            <Controller
              name="telegram"
              control={control}
              render={({ field }) => (
                <Input
                  value={field.value}
                  onChange={(event) => field.onChange(event.target.value)}
                  className=" !w-96"
                  placeholder="@example"
                />
              )}
            />
            <Controller
              name="preferredTypeOfCommunication"
              control={control}
              render={({ field }) => (
                <RadioButton
                  labelText={t("preferredTypeOfCommunication")}
                  radioName="links"
                  onChange={(event) => field.onChange(event.target.value)}
                  radioValue="telegram"
                  labelClassName=" ml-9 flex mt-10 gap-4"
                />
              )}
            />{" "}
          </div>
          <div className=" flex items-center">
            <p className=" mt-8 w-72">{t("discord")}</p>
            <Controller
              name="discord"
              control={control}
              render={({ field }) => (
                <Input
                  value={field.value}
                  onChange={(event) => field.onChange(event.target.value)}
                  className=" !w-96"
                  placeholder="https://discord.gg/"
                />
              )}
            />
            <Controller
              name="preferredTypeOfCommunication"
              control={control}
              render={({ field }) => (
                <RadioButton
                  labelText={t("preferredTypeOfCommunication")}
                  radioName="links"
                  onChange={(event) => field.onChange(event.target.value)}
                  radioValue="discord"
                  labelClassName=" ml-9 flex mt-10 gap-4"
                />
              )}
            />
          </div>
          <div className=" flex items-center">
            <p className=" mt-8 w-72">{t("site")}</p>
            <Controller
              name="site"
              control={control}
              render={({ field }) => (
                <Input
                  value={field.value}
                  onChange={(event) => field.onChange(event.target.value)}
                  className=" !w-96"
                  placeholder="https://"
                />
              )}
            />
          </div>
        </div>
        <div className=" flex gap-6">
          <MainButton text={t("published")} type="submit"></MainButton>
          <SecondaryButton text={t("cancel")} onClick={onCancel}></SecondaryButton>
        </div>
      </div>
    </form>
  );
};

export default ProjectForm;
