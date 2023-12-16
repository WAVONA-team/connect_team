'use client'
import React from "react";
import { useState } from 'react'


const ProjectCreate: React.FC = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    target: '',
    image: '',
    date: '',
    description: '',
    email: '',
    telegram: '',
    discord: '',
    site: '',
  })
  const sendDataToServer = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(formValues);
  };
  return (
  <form className="w-full p-12 bg-zinc-800 rounded-2xl flex-col justify-start items-end gap-14 inline-flex">
    <div className="self-stretch  flex-col justify-start items-center gap-12 flex">
      <div className="self-stretch h-8 justify-start items-center gap-6 inline-flex">
        <div className=" relative">
          <div className=" left-0 top-0 absolute">
            <div className=" left-0 top-0 absolute">
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 text-white text-3xl font-normal font-['Roboto'] leading-normal tracking-wide">Создай проект</div>
      </div>
      <div className="self-stretch"><span className="text-red-400 text-base font-normal font-['Inter'] leading-normal">*</span><span className="text-white text-base font-normal font-['Inter'] leading-normal"> - поля обязательные для заполнения</span></div>
      <div className="self-stretch  flex-col justify-start items-start gap-14 flex">
        <div className="self-stretch  flex-col justify-start items-start gap-10 flex">
          <div className="self-stretch justify-start items-center gap-3 inline-flex">
            <div className=" justify-start items-center gap-2 flex">
              <div className=" justify-start items-center gap-2.5 flex">
                <div className="text-white text-3xl font-normal font-['Roboto'] leading-normal tracking-wide">Основная информация</div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-col justify-center items-start gap-8 flex">
            <div className="justify-start items-center gap-9 inline-flex">
              <div className=" w-64 h-64 bg-white rounded-3xl justify-between items-center flex" />
              <button className="px-8 py-4 bg-white rounded-lg  items-center gap-9 flex flex-row text-stone-900 text-base font-medium font-['Roboto'] leading-tight tracking-wide">Добавить</button>
            </div>
            <div className="justify-start items-center gap-24 inline-flex w-2/3 h-10">
              <div className=" justify-start items-center gap-2 flex w-full">
                <div className=" justify-start items-center gap-2.5 flex">
                  <div><span className="text-white text-xl font-normal font-['Roboto'] leading-normal tracking-wide">Название вашего проекта</span><span className="text-red-400 text-xl font-normal font-['Roboto'] leading-normal tracking-wide"> *</span></div>
                </div>
              </div>
              <div className="justify-start items-start gap-2.5 flex w-full">
                <input
                  className=" bg-white rounded-lg shadow border border-gray-200 justify-start items-center flex w-full h-10 text-gray-500 text-base font-medium font-['Inter'] tracking-tight pl-1" placeholder="Имя фамилия"
                  onChange={(event) =>
                    setFormValues({ ...formValues, name: event.target.value })
                  }
                >
                </input>
              </div>
            </div>
            <div className="justify-start items-center gap-24 inline-flex w-2/3 h-10">
              <div className=" justify-start items-center gap-2 flex w-full">
                <div className=" justify-start items-center gap-2.5 flex">
                  <div><span className="text-white text-xl font-normal font-['Roboto'] leading-normal tracking-wide">Сроки работы над проектом</span><span className="text-red-400 text-xl font-normal font-['Roboto'] leading-normal tracking-wide"> *</span></div>
                </div>
              </div>
              <div className="justify-start items-start gap-2.5 flex w-full">
                <div className=" bg-white rounded-lg shadow border border-gray-200 justify-start items-center flex w-full h-10">
                  <p className="grow shrink basis-0 text-gray-500 text-base font-medium font-['Inter'] tracking-tight pl-1">Дата</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch  flex-col justify-start items-start gap-12 flex">
          <div className="self-stretch  flex-col justify-start items-start gap-8 flex">
            <div className="self-stretch justify-start items-start gap-64 inline-flex">
              <div className="justify-start items-center gap-3 flex">
                <div className=" justify-start items-center gap-2 flex">
                  <div className=" justify-start items-center gap-2.5 flex">
                    <div><span className="text-white text-3xl font-normal font-['Roboto'] leading-normal tracking-wide">Цель </span><span className="text-red-400 text-3xl font-normal font-['Roboto'] leading-normal tracking-wide">*</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-neutral-200 text-lg font-normal font-['Roboto'] leading-tight tracking-wide">Напишите то, к чему стремится ваш проект</div>
            <textarea
              className="w-full h-14 text-stone-300 text-xl font-normal font-['Inter'] leading-tight p-2.5 bg-white rounded border border-stone-300" placeholder="Создание сайта"
              onChange={(event) =>
                setFormValues({ ...formValues, target: event.target.value })
              }
            >
            </textarea>
          </div>
          <div className="self-stretch  flex-col justify-start items-start gap-14 flex">
            <div className="self-stretch  flex-col justify-start items-start gap-10 flex">
              <div className="self-stretch  flex-col justify-start items-start gap-8 flex">
                <div className="self-stretch justify-start items-center gap-3 inline-flex">
                  <div className=" justify-start items-center gap-2 flex">
                    <div className=" justify-start items-center gap-2.5 flex">
                      <div><span className="text-white text-3xl font-normal font-['Roboto'] leading-normal tracking-wide">Описание проекта </span><span className="text-red-400 text-3xl font-normal font-['Roboto'] leading-normal tracking-wide">*</span></div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-7 justify-start items-center gap-6 inline-flex">
                  <div className=" self-stretch justify-start items-center gap-2 flex">
                    <div className="justify-start items-center gap-2.5 flex">
                      <div className="text-neutral-200 text-lg font-normal font-['Roboto'] leading-tight tracking-wide">Опишите вашу команду, кто вам требуется и какими навыками он должен обладать</div>
                    </div>
                  </div>
                </div>
              </div>
              <textarea
                className=" p-3 self-stretch h-72 bg-white rounded-xl border border-gray-200 flex-col justify-start items-start flex" placeholder="Мы молодая развивающаяся команда. Сейчас работаем над крупным проектом. Очень нужен фронтенд разработчик. Требуются хорошие знания HTML и CSS, а остальному можно обучиться в процессе. Будем рады видеть тебя в нашей комнде!"
                onChange={(event) =>
                  setFormValues({ ...formValues, description: event.target.value })
                }
              >
              </textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch h-40 flex-col justify-start items-start gap-8 flex">
      <div><span className="text-white text-3xl font-normal font-['Inter'] leading-normal tracking-tight">Кто вам требуется в команду? </span><span className="text-red-400 text-3xl font-normal font-['Inter'] leading-normal tracking-tight">*</span></div>
      <div className="text-neutral-200 text-lg font-normal font-['Roboto'] leading-tight tracking-wide">Укажите кто вам нужен и в каком количестве</div>
      <div className=" bg-white rounded-lg shadow border border-gray-200 justify-start items-center inline-flex">
        <div className="grow shrink basis-0  px-2.5 rounded-md justify-start items-center flex">
          <div className="grow shrink basis-0 px-4 py-3.5 justify-start items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-gray-500 text-xl font-medium font-['Inter'] tracking-tight">Select Input</div>
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch  flex-col justify-start items-end gap-10 flex">
      <div className="self-stretch  flex-col justify-start items-end gap-8 flex">
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 h-6 justify-start items-start flex">
            <div className="grow shrink basis-0 h-6 justify-start items-center gap-2.5 flex">
              <div><span className="text-zinc-100 text-3xl font-normal font-['Roboto'] leading-normal tracking-wide">Ссылки для связи </span><span className="text-red-400 text-3xl font-normal font-['Roboto'] leading-normal tracking-wide">*</span></div>
            </div>
            <div className="h-6" />
          </div>
        </div>
        <div className="self-stretch  flex-col justify-start items-start gap-6 flex">
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="pb-1 justify-start items-center gap-2 flex">
              <div className=" self-stretch justify-start items-center gap-2.5 flex">
                <div className="text-neutral-200 text-lg font-normal font-['Roboto'] leading-normal tracking-wide">Обязательно укажите ссылку для связи, чтобы с вами смогли связаться.<br/>Должна быть заполнена хотя бы одна ссылка</div>
              </div>
            </div>
          </div>
          <div className="self-stretch  flex-col justify-start items-start gap-3 flex">
            <div className="self-stretch  flex-col justify-start items-start flex">
              <div className=" w-2/6 flex-col justify-start items-start gap-6 flex">
              <div className="w-full self-stretch justify-start items-start gap-8 inline-flex">
                  <div className="w-full grow shrink basis-0  justify-start items-center gap-44 flex">
                    <div className="w-full justify-start items-start gap-2.5 flex">
                      <div className=" w-full pr-8 flex-col justify-start items-start inline-flex">
                        <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                            <div className="grow shrink basis-0 text-neutral-200 text-sm font-semibold font-['Inter'] tracking-tight">Электронная почта</div>
                        </div>
                        <input
                          className="w-full h-11 self-stretch bg-white rounded-lg shadow border border-gray-200 justify-start items-center inline-flex text-stone-300 text-base font-medium font-['Inter'] tracking-tight" placeholder="example@gmail.com" type="email"
                          onChange={(event) =>
                            setFormValues({ ...formValues, email: event.target.value })
                          }
                        >
                        </input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full self-stretch justify-start items-start gap-8 inline-flex">
                  <div className="w-full grow shrink basis-0  justify-start items-center gap-44 flex">
                    <div className="w-full justify-start items-start gap-2.5 flex">
                      <div className=" w-full pr-8 flex-col justify-start items-start inline-flex">
                        <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                            <div className="grow shrink basis-0 text-neutral-200 text-sm font-semibold font-['Inter'] tracking-tight">Телеграм</div>
                        </div>
                        <input
                          className="w-full h-11 self-stretch bg-white rounded-lg shadow border border-gray-200 justify-start items-center inline-flex text-stone-300 text-base font-medium font-['Inter'] tracking-tight" placeholder="@"
                          onChange={(event) =>
                            setFormValues({ ...formValues, telegram: event.target.value })
                          }
                        >
                        </input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full self-stretch justify-start items-start gap-8 inline-flex">
                  <div className="w-full grow shrink basis-0  justify-start items-center gap-44 flex">
                    <div className="w-full justify-start items-start gap-2.5 flex">
                      <div className=" w-full pr-8 flex-col justify-start items-start inline-flex">
                        <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                            <div className="grow shrink basis-0 text-neutral-200 text-sm font-semibold font-['Inter'] tracking-tight">Дискорд</div>
                        </div>
                        <input
                          className="w-full h-11 self-stretch bg-white rounded-lg shadow border border-gray-200 justify-start items-center inline-flex text-stone-300 text-base font-medium font-['Inter'] tracking-tight"
                          onChange={(event) =>
                            setFormValues({ ...formValues, discord: event.target.value })
                          }
                        >
                        </input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full self-stretch justify-start items-start gap-8 inline-flex">
                  <div className="w-full grow shrink basis-0  justify-start items-center gap-44 flex">
                    <div className="w-full justify-start items-start gap-2.5 flex">
                      <div className=" w-full pr-8 flex-col justify-start items-start inline-flex">
                        <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                            <div className="grow shrink basis-0 text-neutral-200 text-sm font-semibold font-['Inter'] tracking-tight">Другой сайт</div>
                        </div>
                        <input
                          className="w-full h-11 self-stretch bg-white rounded-lg shadow border border-gray-200 justify-start items-center inline-flex text-stone-300 text-base font-medium font-['Inter'] tracking-tight" placeholder="https://"
                          onChange={(event) =>
                            setFormValues({ ...formValues, site: event.target.value })
                          }
                        >
                        </input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch justify-start items-start gap-6 inline-flex">
        <button
          className="px-8 py-4 bg-neutral-600 rounded-2xl justify-center items-center gap-2.5 flex text-white text-base font-normal font-['Roboto'] leading-normal tracking-wide"
          onClick={sendDataToServer}
          >
          Опубликовать
        </button>
        <button className="px-8 py-4 rounded-2xl border border-zinc-100 justify-center items-center gap-2.5 flex text-white text-base font-normal font-['Roboto'] leading-normal tracking-wide">
          Отменить
        </button>
      </div>
    </div>
  </form>
  )
};

export default ProjectCreate;
