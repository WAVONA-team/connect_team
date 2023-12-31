"use client";
import React, { type ChangeEvent } from "react";
import { useState } from "react";
import Container from "@/ui/container/Container";

const ProjectCreate: React.FC = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    target: "",
    image: "",
    date: "",
    description: "",
    email: "",
    telegram: "",
    discord: "",
    site: "",
  });
  const sendDataToServer = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <Container>
      <form onSubmit={sendDataToServer} className="w-full rounded-2xl bg-zinc-800 p-12    ">
        <div className=" font-['Roboto'] text-3xl font-normal leading-normal tracking-wide text-white">
          Создай проект
        </div>
        <span className="font-['Inter'] text-base font-normal leading-normal text-red-400">
          *
        </span>
        <span className="font-['Inter'] text-base font-normal leading-normal text-white">
          - поля обязательные для заполнения
        </span>
        <div className="font-['Roboto'] text-3xl font-normal leading-normal tracking-wide text-white">
          Основная информация
        </div>
        <div className=" w-fit      ">
          <div className="flex items-center">
            <div className=" h-64 w-64 rounded-3xl bg-white  " />
            <button className=" ml-10 h-14 rounded-lg bg-white px-8    py-4 font-['Roboto'] text-base font-medium leading-tight tracking-wide text-stone-900">
              Добавить
            </button>
          </div>
          <div className=" my-9 flex h-10 w-fit">
            <div className="flex w-72 ">
              <span className=" font-['Roboto'] text-xl font-normal leading-normal tracking-wide text-white">
                Название вашего проекта
              </span>
              <span className="font-['Roboto'] text-xl font-normal leading-normal tracking-wide text-red-400">
                *
              </span>
            </div>
            <input
              className=" border-gray-200 text-gray-500 ml-20 h-10 w-64 rounded-lg border bg-white pl-1 font-['Inter'] text-base font-medium tracking-tight shadow"
              placeholder="Имя фамилия"
              onChange={(event) =>
                setFormValues({ ...formValues, name: event.target.value })
              }
            ></input>
          </div>
          <div className=" mb-9 flex h-10 w-full">
            <div className=" w-72">
              <span className="font-['Roboto'] text-xl font-normal leading-normal tracking-wide text-white">
                Сроки работы над проектом
              </span>
              <span className="font-['Roboto'] text-xl font-normal leading-normal tracking-wide text-red-400">
                *
              </span>
            </div>
            <input
              className=" border-gray-200 text-gray-500 ml-20 h-10 w-64 rounded-lg border bg-white pl-1 font-['Inter'] text-base font-medium tracking-tight shadow"
              placeholder="Дата"
              onChange={(event) =>
                setFormValues({ ...formValues, date: event.target.value })
              }
            ></input>
          </div>
        </div>
        <div className="  mb-9">
          <div>
            <span className="font-['Roboto'] text-3xl font-normal leading-normal tracking-wide text-white">
              Цель
            </span>
            <span className="font-['Roboto'] text-3xl font-normal leading-normal tracking-wide text-red-400">
              *
            </span>
          </div>
          <div className="font-['Roboto'] text-lg font-normal leading-tight tracking-wide text-neutral-200">
            Напишите то, к чему стремится ваш проект
          </div>
          <textarea
            className="h-14 w-full rounded border border-stone-300 bg-white p-2.5 font-['Inter'] text-xl font-normal leading-tight placeholder-stone-300"
            placeholder="Создание сайта"
            onChange={(event) =>
              setFormValues({ ...formValues, target: event.target.value })
            }
          ></textarea>
        </div>
        <div className="  mb-9">
          <div className="  ">
            <div>
              <span className="font-['Roboto'] text-3xl font-normal leading-normal tracking-wide text-white">
                Описание проекта
              </span>
              <span className="font-['Roboto'] text-3xl font-normal leading-normal tracking-wide text-red-400">
                *
              </span>
            </div>
            <div className=" h-7    ">
              <div className="font-['Roboto'] text-lg font-normal leading-tight tracking-wide text-neutral-200">
                Опишите вашу команду, кто вам требуется и какими навыками он
                должен обладать
              </div>
            </div>
          </div>
          <textarea
            className="border-gray-200 h-72 w-full rounded-xl border bg-white p-3    "
            placeholder="Мы молодая развивающаяся команда. Сейчас работаем над крупным проектом. Очень нужен фронтенд разработчик. Требуются хорошие знания HTML и CSS, а остальному можно обучиться в процессе. Будем рады видеть тебя в нашей комнде!"
            onChange={(event) =>
              setFormValues({
                ...formValues,
                description: event.target.value,
              })
            }
          ></textarea>
        </div>
        <div className=" h-40    ">
          <div>
            <span className="font-['Inter'] text-3xl font-normal leading-normal tracking-tight text-white">
              Кто вам требуется в команду?
            </span>
            <span className="font-['Inter'] text-3xl font-normal leading-normal tracking-tight text-red-400">
              *
            </span>
          </div>
          <div className="font-['Roboto'] text-lg font-normal leading-tight tracking-wide text-neutral-200">
            Укажите кто вам нужен и в каком количестве
          </div>
          <div className=" border-gray-200 text-gray-500 w-1/3 rounded-lg border bg-white   px-6    py-3.5    font-['Inter'] text-xl font-medium tracking-tight shadow">
            Select Input
          </div>
        </div>
        <div className="      ">
          <div className="  mb-9">
            <div className="   ">
                <span className="font-['Roboto'] text-3xl font-normal leading-normal tracking-wide text-zinc-100">
                  Ссылки для связи
                </span>
                <span className="font-['Roboto'] text-3xl font-normal leading-normal tracking-wide text-red-400">
                  *
                </span>
            </div>

            <div className="pb-1    ">
              <div className="font-['Roboto'] text-lg font-normal leading-normal tracking-wide text-neutral-200">
                Обязательно укажите ссылку для связи, чтобы с вами смогли
                связаться.
                <br />
                Должна быть заполнена хотя бы одна ссылка
              </div>
            </div>
            <div className=" flex w-96 flex-col gap-6">
              <div className="w-full    ">
                <div className=" w-full pr-8   ">
                  <div className=" font-['Inter'] text-sm font-semibold tracking-tight text-neutral-200">
                    Электронная почта
                  </div>
                  <input
                    className="border-gray-200 h-11  w-full rounded-lg border bg-white font-['Inter']    text-base font-medium tracking-tight placeholder-stone-300 shadow"
                    placeholder="example@gmail.com"
                    type="email"
                    onChange={(event) =>
                      setFormValues({
                        ...formValues,
                        email: event.target.value,
                      })
                    }
                  ></input>
                </div>
              </div>
              <div className="w-full    ">
                <div className=" w-full pr-8   ">
                  <div className=" font-['Inter'] text-sm font-semibold tracking-tight text-neutral-200">
                    Телеграм
                  </div>
                  <input
                    className="border-gray-200 h-11  w-full rounded-lg border bg-white font-['Inter']    text-base font-medium tracking-tight placeholder-stone-300 shadow"
                    placeholder="@"
                    onChange={(event) =>
                      setFormValues({
                        ...formValues,
                        telegram: event.target.value,
                      })
                    }
                  ></input>
                </div>
              </div>
              <div className="w-full    ">
                <div className=" w-full pr-8   ">
                  <div className=" font-['Inter'] text-sm font-semibold tracking-tight text-neutral-200">
                    Дискорд
                  </div>
                  <input
                    className="border-gray-200 h-11  w-full rounded-lg border bg-white font-['Inter']    text-base font-medium tracking-tight placeholder-stone-300 shadow"
                    onChange={(event) =>
                      setFormValues({
                        ...formValues,
                        discord: event.target.value,
                      })
                    }
                  ></input>
                </div>
              </div>
              <div className="w-full    ">
                <div className=" w-full pr-8   ">
                  <div className=" font-['Inter'] text-sm font-semibold tracking-tight text-neutral-200">
                    Другой сайт
                  </div>
                  <input
                    className="border-gray-200 h-11  w-full rounded-lg border bg-white font-['Inter']    text-base font-medium tracking-tight placeholder-stone-300 shadow"
                    placeholder="https://"
                    onChange={(event) =>
                      setFormValues({
                        ...formValues,
                        site: event.target.value,
                      })
                    }
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex gap-5">
            <button
              type="submit"
              className="rounded-2xl bg-neutral-600 px-8 py-4     font-['Roboto'] text-base font-normal leading-normal tracking-wide text-white"
            >
              Опубликовать
            </button>
            <button
              type="reset"
              className="rounded-2xl border border-zinc-100 px-8 py-4     font-['Roboto'] text-base font-normal leading-normal tracking-wide text-white"
            >
              Отменить
            </button>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default ProjectCreate;
