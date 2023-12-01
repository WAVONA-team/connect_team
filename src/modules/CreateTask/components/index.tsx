import MainCheckbox from "@/ui/MainCheckbox";
import MainInput from "@/ui/MainInput";
import MainButton from "@/ui/MainButton";

import { api } from "@/trpc/react";
import { useState } from "react";

interface Props {
  onTaskCreate: () => void;
}

interface State {
  done: boolean;
  task: string;
}

export const CreateTask: React.FC<Props> = ({ onTaskCreate }) => {
  const [newTask, setNewTask] = useState<State>({ done: false, task: "" });
  const handleTaskUpdate = (value: string | boolean, inputName: string) => {
    setNewTask((previous) => ({
      ...previous,
      [inputName]: value,
    }));
  };

  const createTask = api.task.create.useMutation({
    onSuccess: () => {
      onTaskCreate();
    },
  });
  const handleSubmit = async () => {
    createTask.mutate(newTask);
  };

  return (
    <div className="flex w-full flex-grow-0 items-center gap-2">
      <div className="flex-grow-0">
        <MainCheckbox
          value={newTask.done}
          name="done"
          onChange={handleTaskUpdate}
        />
      </div>
      <div className="flex-grow">
        <MainInput
          placeholder="Description"
          value={newTask.task}
          name="task"
          onChange={handleTaskUpdate}
        />
      </div>
      <div className="flex-grow-0">
        <MainButton type="main" onClick={handleSubmit}>
          CREATE
        </MainButton>
      </div>
    </div>
  );
};
