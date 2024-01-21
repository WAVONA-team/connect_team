"use client";
import React, { type ChangeEvent, useState } from "react";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { api } from "@/trpc/react";

import Container from "@/ui/container/Container";
import SectionWrapper from "@/ui/sectionWrapper/SectionWrapper";
import NavBar from "@/components/navBar/NavBar";
import Input from "@/ui/input/Input";
import DatePicker from "@/ui/datepicker/DatePicker";
import MarkdownEditor from "@/ui/markdown/MarkdownEditor";
import ProfileImage from "@/ui/profileImage/ProfileImage";
import BackButton from "@/ui/backButton/BackButton";
import MainButton from "@/ui/mainButton/MainButton";
import CounterMultiSelect from "@/ui/counterMultiSelect/CounterMultiSelect";
import RadioButton from "@/ui/radioButton/RadioButton";
import SecondaryButton from "@/ui/secondaryButton/SecondaryButton";
import { InitialType } from "@/ui/counterMultiSelect/types/initialType";
import makeInitialState from "@/ui/counterMultiSelect/helpers/makeInitialState";

type InputsValue = {
  image: string,
  title: string,
  term: string,
  published: Date,
  deadline: Date,
  status: string,
  target: string,
  description: string,
  preferredTypeOfCommunication: string,
  email: string,
  telegram: string,
  discord: string,
  site: string,
  requiredPeopleState: InitialType
};
const calculateMonthDifference = (startDate: Date, endDate: Date) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const diffInMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

  return diffInMonths;
};
const ProjectCreate: React.FC = () => {
  const allItems = ['Frontend', 'Backend', 'UI']
  const projectMutation = api.project.create.useMutation();
  const requiredPeopleMutation = api.requiredPeople.create.useMutation();
  const [selectedItems, setSelectedItems] = useState<InitialType>(makeInitialState(allItems))
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const setDateRangefunction = (e: any) =>{
    setDateRange(e)
  }
  const terms = calculateMonthDifference(dateRange.startDate, dateRange.endDate)
  const termsValue = terms + ' Месяцев'
  console.log(termsValue)
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<InputsValue>({
    defaultValues: {
      image: "",
      title: "",
      term: "",
      published: new Date(dateRange.startDate),
      deadline: new Date(dateRange.endDate),
      status: "Не начат",
      target: "",
      description: "",
      email: "",
      telegram: "",
      discord: "",
      site: "",
      preferredTypeOfCommunication: "",
      requiredPeopleState: {  },
    },
  });
  const onSubmit: SubmitHandler<InputsValue> = (formData) => {
    console.log(formData)
    projectMutation.mutateAsync({
      image: formData.image,
      title: formData.title,
      term: `${termsValue}`,
      published: new Date(formData.published),
      deadline: new Date(formData.deadline),
      status: formData.status,
      target: formData.target,
      description: formData.description,
      preferredTypeOfCommunication: formData.preferredTypeOfCommunication,
      email: formData.email,
      telegram: formData.telegram,
      discord: formData.discord,
      site: formData.site,
    })
    .then((createdProject) => {
      requiredPeopleMutation.mutate({
        projectId: createdProject?.id as string,
        requiredPeople: JSON.stringify(selectedItems),
      })
    })

    reset();
  };

  const onCancel = () => {
    reset();
  };

  return (
    <Container>
      <NavBar></NavBar>
      <SectionWrapper className=' text-onPrimary-anti-flash-withe mt-12'>
        <form
          action="#"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
            <div>
              <div className=" flex">
                <BackButton></BackButton>
                <h2>Создание проекта</h2>
              </div>
              <div>
                <p className=" mb-8 mt-7"><span className=" text-error-imperial-red">*</span> - поля обязательные для заполнения</p>
              </div>
            </div>
            <div className=" flex flex-col gap-12">
              <h2 className=" font-bold">Основная информация</h2>
              <div>
                  <div>
                    <div className=" flex items-center">
                      <ProfileImage imageSrc="https://avatars.githubusercontent.com/u/70152685?v=4" alt="ded"></ProfileImage>
                      <MainButton text="Редактировать" className=" h-12 ml-8"></MainButton>
                    </div>
                    <div className=" flex items-center">
                      <p className=" mt-8 w-72 mr-24">Название вашего проекта<span className=" text-error-imperial-red">*</span></p>
                      <Controller
                        name="title"
                        control={control}
                        rules={{ required: "Обязательно к заполнению" }}
                        render={({ field }) => (
                        <Input
                        value={field.value}
                        onChange={(event) => field.onChange(event.target.value)}
                        error={errors.title?.message}
                        className=" !w-96"
                        placeholder="Connet Team" />
                      )}
                      />
                    </div>
                    <div className=" flex items-center">
                      <p className=" mt-8 w-72 mr-24">Сроки работы над проектом<span className=" text-error-imperial-red">*</span></p>
                      <div className=" w-96">
                      <Controller
                        name="target"
                        control={control}
                        rules={{ required: "Обязательно к заполнению" }}
                        render={({ field }) => (
                          <DatePicker date={dateRange} onDateChange={setDateRangefunction}></DatePicker>
                        )}
                      />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <h2 className=" font-bold mb-6">Цель<span className=" text-error-imperial-red">*</span></h2>
                  </div>
                  <p className=" text-secondary-cadet-grey">Опишите цель проекта (макс 300 символов 0/200)</p>
                  <Controller
                    name="target"
                    control={control}
                    rules={{ required: "Обязательно к заполнению" }}
                    render={({ field }) => (
                      <Input
                      value={field.value}
                      onChange={(event) => field.onChange(event.target.value)}
                      error={errors.target?.message}
                      className=" !w-96"
                      placeholder="Опишите цель" />
                    )}
                  />
                </div>
                <div>
                  <h2 className=" font-bold">Описание проекта<span className=" text-error-imperial-red">*</span></h2>
                  <p className=" text-secondary-cadet-grey mt-4 mb-8">Добавьте описание проекта,  чтобы соискатели быстрее  нашли ваш проект</p>
                  {errors.description && (<p>{errors.description.message}</p>)}
                  <Controller
                    name="description"
                    control={control}
                    rules={{ required: "Обязательно к заполнению" }}
                    render={({ field }) => (
                      <MarkdownEditor
                        source={field.value}
                        setSource={(event) => {
                          field.onChange(event);
                        }}
                        placeholder="Оформите описание так, как вам нравится: сделайте текст полужирным, курсивом или выделите его подчеркиванием.
                        Создайте списки, чтобы структурировать свои мысли,
                        добавьте разделы и заголовки,
                        чтобы все выглядело аккуратно и организовано.
                        Можете также добавить ссылки"
                      />
                  )}
                />
                </div>
                <div>
                  <h2 className=" font-bold">Кто вам требуеться в команду?<span className=" text-error-imperial-red">*</span></h2>
                  <p className=" text-secondary-cadet-grey mt-4 mb-8">Добавьте того, кто вам требуется</p>
                  {errors.requiredPeopleState && ('Обязательно к заполнению')}
                  <Controller
                    name="target"
                    control={control}
                    rules={{ required: "Обязательно к заполнению" }}
                    render={({ field }) => (
                      <CounterMultiSelect allItems={selectedItems ?? []} onNumberChange={setSelectedItems} placeholder="Выберите профессию" className=" w-fit h-12"/>
                    )}
                  />
                </div>
                <div>
                  <p className=" font-bold">Ссылки на связи<span className=" text-error-imperial-red">*</span></p>
                  <p className=" text-secondary-cadet-grey mt-4 mb-8">Добавьте хотя бы один контакт</p>
                  <div className=" flex items-center">
                    <p className=" mt-8 w-72">Электронная почта</p>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <Input
                        value={field.value}
                        onChange={(event) => field.onChange(event.target.value)}
                        error={errors.email?.message}
                        className=" !w-96"
                        placeholder="example@mail.com" />
                      )}
                    />
                    <Controller
                      name="preferredTypeOfCommunication"
                      control={control}
                      render={({ field }) => (
                        <RadioButton labelText="Желаемый вид связи" radioName="links"  onChange={(event) => field.onChange(event.target.value)} radioValue='email' labelClassName=" ml-9 flex mt-10 gap-4"/>
                      )}
                    />
                  </div>
                  <div className=" flex items-center">
                    <p className=" mt-8 w-72">Телеграмм</p>
                    <Controller
                      name="telegram"
                      control={control}
                      render={({ field }) => (
                        <Input
                        value={field.value}
                        onChange={(event) => field.onChange(event.target.value)}
                        className=" !w-96"
                        placeholder="@example" />
                      )}
                    />
                    <Controller
                      name="preferredTypeOfCommunication"
                      control={control}
                      render={({ field }) => (
                        <RadioButton labelText="Желаемый вид связи" radioName="links"  onChange={(event) => field.onChange(event.target.value)} radioValue='telegram' labelClassName=" ml-9 flex mt-10 gap-4"/>
                      )}
                    />                  </div>
                  <div className=" flex items-center">
                    <p className=" mt-8 w-72">Дискорд</p>
                    <Controller
                      name="discord"
                      control={control}
                      render={({ field }) => (
                        <Input
                        value={field.value}
                        onChange={(event) => field.onChange(event.target.value)}
                        className=" !w-96"
                        placeholder="https://discord.gg/" />
                      )}
                    />
                    <Controller
                      name="preferredTypeOfCommunication"
                      control={control}
                      render={({ field }) => (
                        <RadioButton labelText="Желаемый вид связи" radioName="links"  onChange={(event) => field.onChange(event.target.value)} radioValue='discord' labelClassName=" ml-9 flex mt-10 gap-4"/>
                      )}
                    />
                  </div>
                  <div className=" flex items-center">
                    <p className=" mt-8 w-72">Другой сайт</p>
                    <Controller
                      name="site"
                      control={control}
                      render={({ field }) => (
                        <Input
                        value={field.value}
                        onChange={(event) => field.onChange(event.target.value)}
                        className=" !w-96"
                        placeholder="https://" />
                      )}
                    />
                  </div>
                </div>
                <div className=" flex gap-6">
                  <MainButton text='Опубликовать' type="submit"></MainButton>
                  <SecondaryButton text='Отменить' onClick={onCancel}></SecondaryButton>
                </div>
            </div>
        </form>
      </SectionWrapper>
    </Container>
  );
};

export default ProjectCreate;
