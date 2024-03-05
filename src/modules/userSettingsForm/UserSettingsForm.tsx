  "use client";
  import React from "react";
  import { useForm, Controller, type SubmitHandler } from "react-hook-form";
  import { useSession } from "next-auth/react";
  import { useRouter } from "next/navigation";
  import { api } from "@/trpc/react";
  import { useTranslation } from "@/shared/localization/i18n";

  import type InputsValue from "./types/InputsValue";
  import generalClassNames from "./helpers/GeneralClassNames";

  import Image from "next/image";
  import userNoAvatar from "../../../public/images/avatar.svg";

  import Input from "@/ui/input/Input";
  import BackButton from "@/ui/backButton/BackButton";
  import Switch from "@/ui/switch/Switch";
  import RadioButton from "@/ui/radioButton/RadioButton";
  import MarkdownEditor from "@/ui/markdown/MarkdownEditor";
  import MainButton from "@/ui/mainButton/MainButton";
  import SecondaryButton from "@/ui/secondaryButton/SecondaryButton";
  import SectionWrapper from "@/ui/sectionWrapper/SectionWrapper";

  const UserSettingsForm: React.FC = React.memo( async () => {
    const { t } = await useTranslation('en');
    const { data } = useSession();
    const router = useRouter();
    const userMutation = api.user.update.useMutation();

    const {
      control,
      formState: { errors },
      handleSubmit,
      reset,
    } = useForm<InputsValue>({
      defaultValues: {
        name: "",
        profession: "",
        city: "",
        isVisibleForTeam: false,
        age: "",
        languages: "",
        email: "",
        preferredTypeOfCommunication: "",
        telegram: "",
        discord: "",
        description: "",
      },
    });

    const onSubmit: SubmitHandler<InputsValue> = async (formData) => {
      const userData = data!;

      await userMutation
        .mutateAsync({
          id: userData.user.id,
          name: formData.name,
          city: formData.city,
          isVisibleForTeam: formData.isVisibleForTeam,
          age: formData.age,
          languages: formData.languages,
          email: formData.email,
          preferredTypeOfCommunication: formData.preferredTypeOfCommunication,
          telegram: formData.telegram,
          discord: formData.discord,
          description: formData.description,
          profession: formData.profession,
        })
        .then(() => {
          router.push(`/user/${data?.user.id}`);
          reset();
        })
        .catch((error) => console.log(error));
    };

    const onCancel = () => {
      router.push(`/pages/user/${data?.user.id}`);
      reset();
    };

    return (
      <section>
        <SectionWrapper className="mt-12">
          <form
            action="#"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
            className="
              flex
              flex-col
              gap-12
            "
          >
            <div className={generalClassNames.sectionWrapper}>
              <div className="flex items-center gap-2">
                <BackButton />

                <h2 className="text-3xl text-onPrimary-anti-flash-withe">
                  {t("profile")}
                </h2>
              </div>

              <p className={generalClassNames.sectionAdditionalText}>
                {t("settingsAdditionalText")}
              </p>
            </div>
            <div className={generalClassNames.sectionWrapper}>
              <h2 className={generalClassNames.sectionTitle}>
                {t("inforamtion")}
              </h2>

              {data?.user.image ? (
                <Image
                  src={data.user.image}
                  alt="Аватарка пользователя"
                  width={204}
                  height={204}
                  className="rounded-lg"
                />
              ) : (
                <Image
                  src={userNoAvatar as string}
                  alt="Аватарка пользователя"
                  className="rounded-lg"
                />
              )}

              <div className={generalClassNames.inputWrapper}>
                <div className={generalClassNames.labelWrapper}>
                  <label className={generalClassNames.label}>
                    <p className={generalClassNames.labelText}>{t("nickname")}</p>

                    <Controller
                      name="name"
                      control={control}
                      rules={{ required: `${t("required")}` }}
                      render={({ field }) => (
                        <Input
                          value={field.value}
                          onChange={(event) => field.onChange(event.target.value)}
                          error={errors.name?.message}
                          placeholder={t("chooseNickname")}
                          className={generalClassNames.labelInput}
                        />
                      )}
                    />
                  </label>
                </div>

                <div className={generalClassNames.labelWrapper}>
                  <label className={generalClassNames.label}>
                    <p className={generalClassNames.labelText}>{t("Profession")}</p>

                    <Controller
                      name="profession"
                      control={control}
                      rules={{ required: `${t("required")}` }}
                      render={({ field }) => (
                        <Input
                          value={field.value}
                          onChange={(event) => field.onChange(event.target.value)}
                          error={errors.profession?.message}
                          placeholder={t("chooseProfession")}
                          className={generalClassNames.labelInput}
                        />
                      )}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className={generalClassNames.sectionWrapper}>
              <h2 className={generalClassNames.sectionTitle}>
                {t("additionalInformation")}
              </h2>

              <div className="grid grid-cols-3">
                <label className="col-span-2 flex justify-between">
                  <p className={generalClassNames.sectionAdditionalText}>
                    {t("onlyTeamInfo")}
                  </p>

                  <Controller
                    name="isVisibleForTeam"
                    control={control}
                    render={({ field }) => (
                      <Switch
                        checked={field.value}
                        onChange={(checked) => field.onChange(checked)}
                      />
                    )}
                  />
                </label>
              </div>

              <div className={generalClassNames.inputWrapper}>
                <div className={generalClassNames.labelWrapper}>
                  <label className={generalClassNames.label}>
                    <p className={generalClassNames.labelText}>
                      {t("placeOfResidence")}
                    </p>

                    <Controller
                      name="city"
                      control={control}
                      rules={{ required: `${t("required")}` }}
                      render={({ field }) => (
                        <Input
                          value={field.value}
                          onChange={(event) => field.onChange(event.target.value)}
                          error={errors.city?.message}
                          placeholder={t("CityCountry")}
                          className={generalClassNames.labelInput}
                        />
                      )}
                    />
                  </label>
                </div>

                <div className={generalClassNames.labelWrapper}>
                  <label className={generalClassNames.label}>
                    <p className={generalClassNames.labelText}>{t("age")}</p>

                    <Controller
                      name="age"
                      control={control}
                      rules={{ required: `${t("required")}` }}
                      render={({ field }) => (
                        <Input
                          value={field.value}
                          onChange={(event) => field.onChange(event.target.value)}
                          error={errors.age?.message}
                          placeholder={t("writeAge")}
                          className={generalClassNames.labelInput}
                        />
                      )}
                    />
                  </label>
                </div>

                <div className={generalClassNames.labelWrapper}>
                  <label className={generalClassNames.label}>
                    <p className={generalClassNames.labelText}>
                      {t("languages")}
                    </p>

                    <Controller
                      name="languages"
                      control={control}
                      rules={{ required: `${t("required")}` }}
                      render={({ field }) => (
                        <Input
                          value={field.value}
                          onChange={(event) => field.onChange(event.target.value)}
                          error={errors.languages?.message}
                          placeholder={t("languagesExample")}
                          className={generalClassNames.labelInput}
                        />
                      )}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className={generalClassNames.sectionWrapper}>
              <h2 className={generalClassNames.sectionTitle}>{t("contacts")}</h2>

              <div className={generalClassNames.sectionAdditionalWrapper}>
                <p className={generalClassNames.sectionAdditionalText}>
                  {t("requiredContact")}
                </p>
              </div>

              <div className={generalClassNames.inputWrapper}>
                <div className={generalClassNames.labelWrapper}>
                  <label className={generalClassNames.label}>
                    <p className={generalClassNames.labelText}>
                      {t("email")}
                    </p>

                    <Controller
                      name="email"
                      control={control}
                      rules={{ required: `${t("required")}` }}
                      render={({ field }) => (
                        <Input
                          value={field.value}
                          onChange={(event) => field.onChange(event.target.value)}
                          error={errors.email?.message}
                          placeholder="email@email.com"
                          className={generalClassNames.labelInput}
                        />
                      )}
                    />
                  </label>

                  <label className={generalClassNames.labelAdditional}>
                    <Controller
                      name="preferredTypeOfCommunication"
                      control={control}
                      render={({ field }) => (
                        <RadioButton
                          labelText={t("preferredTypeOfCommunication")}
                          labelClassName={generalClassNames.radioLabel}
                          radioName="preferredTypeOfCommunication"
                          radioValue="email"
                          onChange={(event) => field.onChange(event.target.value)}
                        />
                      )}
                    />
                  </label>
                </div>

                <div className={generalClassNames.labelWrapper}>
                  <label className={generalClassNames.label}>
                    <p className={generalClassNames.labelText}>{t("telegram")}</p>

                    <Controller
                      name="telegram"
                      control={control}
                      rules={{ required: `${t("required")}` }}
                      render={({ field }) => (
                        <Input
                          value={field.value}
                          onChange={(event) => field.onChange(event.target.value)}
                          error={errors.telegram?.message}
                          placeholder="@"
                          className={generalClassNames.labelInput}
                        />
                      )}
                    />
                  </label>

                  <label className={generalClassNames.labelAdditional}>
                    <Controller
                      name="preferredTypeOfCommunication"
                      control={control}
                      render={({ field }) => (
                        <RadioButton
                          labelText={t("preferredTypeOfCommunication")}
                          labelClassName={generalClassNames.radioLabel}
                          radioName="preferredTypeOfCommunication"
                          radioValue="telegram"
                          onChange={(event) => field.onChange(event.target.value)}
                        />
                      )}
                    />
                  </label>
                </div>

                <div className={generalClassNames.labelWrapper}>
                  <label className={generalClassNames.label}>
                    <p className={generalClassNames.labelText}>{t("discord")}</p>

                    <Controller
                      name="discord"
                      control={control}
                      rules={{ required: `${t("required")}` }}
                      render={({ field }) => (
                        <Input
                          value={field.value}
                          onChange={(event) => field.onChange(event.target.value)}
                          error={errors.discord?.message}
                          placeholder={t("nameUser")}
                          className={generalClassNames.labelInput}
                        />
                      )}
                    />
                  </label>

                  <label className={generalClassNames.labelAdditional}>
                    <Controller
                      name="preferredTypeOfCommunication"
                      control={control}
                      render={({ field }) => (
                        <RadioButton
                          labelText={t("preferredTypeOfCommunication")}
                          labelClassName={generalClassNames.radioLabel}
                          radioName="preferredTypeOfCommunication"
                          radioValue="discord"
                          onChange={(event) => field.onChange(event.target.value)}
                        />
                      )}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className={generalClassNames.sectionWrapper}>
              <h2 className={generalClassNames.sectionTitle}>{t("aboutMe")}</h2>

              <div className={generalClassNames.sectionAdditionalWrapper}>
                <p className={generalClassNames.sectionAdditionalText}>
                  {t("writeAboutMe")}
                </p>
              </div>

              <label className="relative">
                {errors.description && (
                  <p className="absolute top-0 font-semibold text-error-imperial-red">
                    {errors.description.message}
                  </p>
                )}

                <Controller
                  name="description"
                  control={control}
                  rules={{ required: `${t("required")}` }}
                  render={({ field }) => (
                    <MarkdownEditor
                      className="mt-8"
                      source={field.value}
                      setSource={(event) => {
                        field.onChange(event);
                      }}
                    />
                  )}
                />
              </label>
            </div>

            <div className="flex items-center gap-6">
              <MainButton text={t("save")} type="submit" />

              <SecondaryButton text={t("cancel")} onClick={onCancel} />
            </div>
          </form>
        </SectionWrapper>
      </section>
    );
  });

  export default UserSettingsForm;
