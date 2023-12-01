"use client";

import { CreateTask } from "@/modules/CreateTask";
import { TaskCheckbox } from "@/modules/TaskCheckbox";
import { DeleteTask } from "@/modules/DeleteTask";

import React, { useState, useEffect, ReactNode } from "react";
import { api } from "@/trpc/react";

const TestPage: React.FC = () => {
  const {
    data: tasks,
    isLoading,
    refetch: refetchTasks,
  } = api.task.getAll.useQuery();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] p-20 text-white">
      <div className="flex w-[512px] flex-grow flex-col items-start justify-start">
        <CreateTask onTaskCreate={refetchTasks} />
        {isLoading || tasks === undefined
          ? "Loading..."
          : tasks.map((el) => (
              <div
                key={el.id}
                className="flex w-full flex-grow-0 items-center gap-2"
              >
                <div className="flex-grow-0">
                  <TaskCheckbox
                    value={el.done}
                    id={el.id}
                    onTaskChange={refetchTasks}
                  />
                </div>
                <div className="flex-grow">{el.task}</div>
                <div className="flex-grow-0">
                  <DeleteTask onTaskChange={refetchTasks} id={el.id} />
                </div>
              </div>
            ))}
      </div>
    </main>
  );
};

export default TestPage;
