'use client'
import React from "react";
import { useState } from 'react'
import Container from "@/ui/container/Container";


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
  };
  return (
    <Container>
      <form className="w-full p-12 bg-zinc-800 rounded-2xl  items-end gap-14 ">
        <div className="self-stretch  items-center gap-12 ">
          <div className="self-stretch h-8  items-center gap-6 ">
            <div className=" left-0 top-0 absolute">
              <div className=" left-0 top-0 absolute"/>
            </div>
            <div className=" text-white text-3xl font-normal font-['Roboto'] leading-normal tracking-wide">Создай проект</div>
          </div>
          <div className="self-stretch"><span className="text-red-400 text-base font-normal font-['Inter'] leading-normal">*</span><span className="text-white text-base font-normal font-['Inter'] leading-normal"> - поля обязательные для заполнения</span></div>
          <div className=" gap-14 ">
            <div className=" gap-10 ">
              <div className="self-stretch  items-center gap-3 ">
                <div className="  items-center gap-2 ">
                  <div className="  items-center gap-2.5 ">
                    <div className="text-white text-3xl font-normal font-['Roboto'] leading-normal tracking-wide">Основная информация</div>
                  </div>
                </div>
              </div>
              <div className=" w-4/6 self-stretch  justify-center items-start gap-8 ">
                <div className="r gap-9 flex items-center">
                  <div className=" w-64 h-64 bg-white rounded-3xl justify-between items-center " />
                  <button className=" h-14 px-8 py-4 bg-white rounded-lg  items-center gap-9 text-stone-900 text-base font-medium font-['Roboto'] leading-tight tracking-wide">Добавить</button>
                </div>
                <div className=" flex gap-24 h-10 w-full my-9">
                  <div className=" gap-5.5  w-full flex items-center">
                    <span className="text-white text-xl font-normal font-['Roboto'] leading-normal tracking-wide">Название вашего проекта</span><span className="text-red-400 text-xl font-normal font-['Roboto'] leading-normal tracking-wide"> *</span>
                  </div>
                  <div className=" gap-2.5 w-full">
                    <input
                      className=" w-full bg-white rounded-lg shadow border border-gray-200 h-10 text-gray-500 text-base font-medium font-['Inter'] tracking-tight pl-1" placeholder="Имя фамилия"
                      onChange={(event) =>
                        setFormValues({ ...formValues, name: event.target.value })
                      }
                    >
                    </input>
                  </div>
                </div>
                <div className="flex gap-24 h-10 w-full mb-9">
                  <div className="  gap-2  w-full">
                    <div className=" gap-2.5 flex items-center">
                      <span className="text-white text-xl font-normal font-['Roboto'] leading-normal tracking-wide">Сроки работы над проектом</span><span className="text-red-400 text-xl font-normal font-['Roboto'] leading-normal tracking-wide"> *</span>
                    </div>
                  </div>
                  <div className=" gap-2.5  w-full">
                    <div className=" bg-white rounded-lg shadow border border-gray-200   w-full h-10">
                      <p className=" text-gray-500 text-base font-medium font-['Inter'] tracking-tight pl-1">Дата</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" gap-12 ">
              <div className=" gap-8 mb-9">
                <div className="self-stretch  gap-64 ">
                  <div className=" items-center gap-3 ">
                    <div className="  items-center gap-2 ">
                      <div className="  items-center gap-2.5 ">
                        <div><span className="text-white text-3xl font-normal font-['Roboto'] leading-normal tracking-wide">Цель </span><span className="text-red-400 text-3xl font-normal font-['Roboto'] leading-normal tracking-wide">*</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-neutral-200 text-lg font-normal font-['Roboto'] leading-tight tracking-wide">Напишите то, к чему стремится ваш проект</div>
                <textarea
                  className="w-full h-14 placeholder-stone-300 text-xl font-normal font-['Inter'] leading-tight p-2.5 bg-white rounded border border-stone-300" placeholder="Создание сайта"
                  onChange={(event) =>
                    setFormValues({ ...formValues, target: event.target.value })
                  }
                >
                </textarea>
              </div>
              <div className=" gap-14 ">
                <div className=" gap-10 mb-9">
                  <div className=" gap-8 ">
                    <div className="self-stretch  items-center gap-3 ">
                      <div className="  items-center gap-2 ">
                        <div className="  items-center gap-2.5 ">
                          <div><span className="text-white text-3xl font-normal font-['Roboto'] leading-normal tracking-wide">Описание проекта </span><span className="text-red-400 text-3xl font-normal font-['Roboto'] leading-normal tracking-wide">*</span></div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-7  items-center gap-6 ">
                      <div className=" self-stretch  items-center gap-2 ">
                        <div className=" items-center gap-2.5 ">
                          <div className="text-neutral-200 text-lg font-normal font-['Roboto'] leading-tight tracking-wide">Опишите вашу команду, кто вам требуется и какими навыками он должен обладать</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <textarea
                    className="w-full p-3 h-72 bg-white rounded-xl border border-gray-200   items-start " placeholder="Мы молодая развивающаяся команда. Сейчас работаем над крупным проектом. Очень нужен фронтенд разработчик. Требуются хорошие знания HTML и CSS, а остальному можно обучиться в процессе. Будем рады видеть тебя в нашей комнде!"
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
        <div className="self-stretch h-40   gap-8 ">
          <div><span className="text-white text-3xl font-normal font-['Inter'] leading-normal tracking-tight">Кто вам требуется в команду? </span><span className="text-red-400 text-3xl font-normal font-['Inter'] leading-normal tracking-tight">*</span></div>
          <div className="text-neutral-200 text-lg font-normal font-['Roboto'] leading-tight tracking-wide">Укажите кто вам нужен и в каком количестве</div>
          <div className=" w-1/3 bg-white rounded-lg shadow border border-gray-200   px-6   items-center py-3.5  gap-2.5  text-gray-500 text-xl font-medium font-['Inter'] tracking-tight">Select Input</div>
        </div>
        <div className="self-stretch    items-end gap-10 ">
          <div className="self-stretch tems-end gap-8 mb-9">
            <div className="self-stretch  gap-8 ">
                  <div><span className="text-zinc-100 text-3xl font-normal font-['Roboto'] leading-normal tracking-wide">Ссылки для связи </span><span className="text-red-400 text-3xl font-normal font-['Roboto'] leading-normal tracking-wide">*</span></div>
            </div>
            <div className=" gap-6 ">
              <div className=" items-center gap-2 ">
                <div className="pb-1  items-center gap-2 ">
                  <div className=" self-stretch  items-center gap-2.5 ">
                    <div className="text-neutral-200 text-lg font-normal font-['Roboto'] leading-normal tracking-wide">Обязательно укажите ссылку для связи, чтобы с вами смогли связаться.<br/>Должна быть заполнена хотя бы одна ссылка</div>
                  </div>
                </div>
              </div>
              <div className=" gap-3 ">
                <div className=" ">
                  <div className=" w-2/6   gap-6 ">
                  <div className="w-full self-stretch  gap-8 ">
                      <div className="w-full    items-center gap-44 ">
                        <div className="w-full  gap-2.5 ">
                          <div className=" w-full pr-8   ">
                            <div className="w-full gap-2.5 ">
                                <div className=" text-neutral-200 text-sm font-semibold font-['Inter'] tracking-tight">Электронная почта</div>
                            </div>
                            <input
                              className="w-full h-11 self-stretch bg-white rounded-lg shadow border border-gray-200  items-center  placeholder-stone-300 text-base font-medium font-['Inter'] tracking-tight" placeholder="example@gmail.com" type="email"
                              onChange={(event) =>
                                setFormValues({ ...formValues, email: event.target.value })
                              }
                            >
                            </input>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full self-stretch  gap-8 ">
                      <div className="w-full    items-center gap-44 ">
                        <div className="w-full  gap-2.5 ">
                          <div className=" w-full pr-8   ">
                            <div className="w-full   gap-2.5 ">
                                <div className=" text-neutral-200 text-sm font-semibold font-['Inter'] tracking-tight">Телеграм</div>
                            </div>
                            <input
                              className="w-full h-11 self-stretch bg-white rounded-lg shadow border border-gray-200  items-center  placeholder-stone-300 text-base font-medium font-['Inter'] tracking-tight" placeholder="@"
                              onChange={(event) =>
                                setFormValues({ ...formValues, telegram: event.target.value })
                              }
                            >
                            </input>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full self-stretch  gap-8 ">
                      <div className="w-full    items-center gap-44 ">
                          <div className=" w-full pr-8   ">
                            <div className=" text-neutral-200 text-sm font-semibold font-['Inter'] tracking-tight">Дискорд</div>
                            <input
                              className="w-full h-11 self-stretch bg-white rounded-lg shadow border border-gray-200  items-center  placeholder-stone-300 text-base font-medium font-['Inter'] tracking-tight"
                              onChange={(event) =>
                                setFormValues({ ...formValues, discord: event.target.value })
                              }
                            >
                            </input>
                          </div>
                      </div>
                    </div>
                    <div className="w-full self-stretch  gap-8 ">
                      <div className="w-full    items-center gap-44 ">
                        <div className="w-full  gap-2.5 ">
                          <div className=" w-full pr-8   ">
                            <div className="w-full   gap-2.5 ">
                                <div className=" text-neutral-200 text-sm font-semibold font-['Inter'] tracking-tight">Другой сайт</div>
                            </div>
                            <input
                              className="w-full h-11 self-stretch bg-white rounded-lg shadow border border-gray-200  items-center  placeholder-stone-300 text-base font-medium font-['Inter'] tracking-tight" placeholder="https://"
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
          <div className=" flex self-stretch gap-6 ">
            <button
              type="submit"
              className="px-8 py-4 bg-neutral-600 rounded-2xl justify-center items-center gap-2.5  text-white text-base font-normal font-['Roboto'] leading-normal tracking-wide"
              onSubmit={sendDataToServer}
              >
              Опубликовать
            </button>
            <button type="reset" className="px-8 py-4 rounded-2xl border border-zinc-100 justify-center items-center gap-2.5  text-white text-base font-normal font-['Roboto'] leading-normal tracking-wide">
              Отменить
            </button>
          </div>
        </div>
      </form>
    </Container>
  )
};

export default ProjectCreate;
