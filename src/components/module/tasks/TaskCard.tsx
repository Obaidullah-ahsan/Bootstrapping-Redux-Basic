import { Trash } from "lucide-react";
import { Button } from "../../ui/button";
import { Checkbox } from "../../ui/checkbox";
import type { ITask } from "@/type";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  deleteTask,
  toggleCompleteState,
} from "@/redux/features/task/taskSlice";
import { selectUser } from "@/redux/features/user/userSlice";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const users = useAppSelector(selectUser);
  const assignUser = users.find((user) => user.id === task.assignedTo);
  const dispatch = useAppDispatch();
  return (
    <div className="border px-5 py-3 rounded-b-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority === "Low",
              "bg-yellow-500": task.priority === "Mediam",
              "bg-red-500": task.priority === "High",
            })}
          ></div>
          <h1>{task.title}</h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button
            onClick={() => dispatch(deleteTask(task.id))}
            variant="link"
            className="p-0 text-red-500"
          >
            <Trash />
          </Button>
          <Checkbox
            checked={task.isCompleted}
            onClick={() => dispatch(toggleCompleteState(task.id))}
          />
        </div>
      </div>
      <p className="mt-5">
        Assign To -{assignUser ? assignUser.name : "No One"}
      </p>
      <p className="mt-5">{task.description}</p>
    </div>
  );
};

export default TaskCard;
