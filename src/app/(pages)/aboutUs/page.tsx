import React from "react";
import Image from "next/image";
import { useTranslation } from "@/shared/localization/i18n";

import BackButton from "@/ui/backButton/BackButton";
import Container from "@/ui/container/Container";

import wavonaLogo from "../../../../public/images/wavonaLogo.png";
import Link from "next/link";

const AboutUs: React.FC = React.memo(async() => {
  const { t, i18n } = await useTranslation('en');

  const members = [
    {
      url: `bg-[url("/images/team/Oleksii.jpg")]`,
      name: 'Алексей',
      position: "Project Manager",
      social: {
        Linkedin: "https://www.linkedin.com/in/oleksii-kalinichenko-333616264",
      },
    },
    {
      url: `bg-[url("/images/team/Oleg.jpg")]`,
      name: "Олег",
      position: "Team Lead, Developer",
      social: {
        Github: "https://github.com/VofSwords",
      },
    },
    {
      url: `bg-[url("/images/team/Jegor.jpg")]`,
      name: "Егор",
      position: "Developer",
      social: {
        Github: "https://github.com/vo7kov",
      },
    },
    {
      url: `bg-[url("/images/team/Artem.jpg")]`,
      name: "Артем",
      position: "Developer",
      social: {
        Github: "https://github.com/aguilam",
      },
    },
    {
      url: `bg-[url("/images/team/Darya.jpg")]`,
      name: "Дарья",
      position: "Designer",
      social: {
        Behance: "https://www.behance.net/dashhasano662b",
      },
    },
    {
      url: `bg-[url("/images/team/Anastasiia.jpg")]`,
      name: "Анастасия",
      position: "Designer",
      social: {
        Behance: "https://www.behance.net/messhx",
      },
    },
  ];

  return (
    <section className="mt-12">
      <Container>
        <div className="flex items-center gap-2">
          <BackButton />

          <h2 className="text-3xl text-onPrimary-anti-flash-withe">
            {t("aboutUs.ourTeam")}
          </h2>
        </div>

        <div className="mt-8 flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <Image src={wavonaLogo} alt="Wavona logo" width={70} height={70} />

            <p className="text-3xl font-black text-onPrimary-anti-flash-withe">
              Wavona team
            </p>
          </div>

          <p className="max-w-4xl text-2xl text-onPrimary-anti-flash-withe">
            {t("aboutUs.description")}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-x-6 gap-y-12">
          {members.map((member) => {
            const { url, name, position, social } = member;

            return (
              <div
                key={url}
                className="
                  relative
                  flex
                  flex-col
                  items-center
                  gap-9
                  rounded-2xl
                  px-12
                  py-8
                  after:absolute
                  after:-z-10
                  after:block
                  after:h-full
                  after:w-full
                  after:rounded-2xl
                  after:bg-gradient-to-t
                  after:from-primary-majorelle-blue
                  after:opacity-0
                  after:transition-all
                  after:content-['']
                  hover:after:opacity-100
                "
              >
                <div
                  className={`${url} h-64 w-64 rounded-full bg-contain bg-center bg-no-repeat`}
                />

                <div className="flex flex-col items-center gap-6">
                  <div className="flex flex-col items-center gap-4">
                    <h2 className="text-2xl font-bold text-onPrimary-anti-flash-withe">
                      {name}
                    </h2>

                    <p className="text-base font-bold text-onPrimary-anti-flash-withe">
                      {position}
                    </p>
                  </div>

                  {Object.entries(
                    social as Record<string, string | undefined>,
                  ).map((item) => {
                    const [key, value] = item;

                    return (
                      <Link
                        className="text-sm text-onPrimary-anti-flash-withe"
                        href={value!}
                        target="_blank"
                        key={value}
                      >
                        {key}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
});

export default AboutUs;
