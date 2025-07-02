import { AddTaskModals } from "@/components/module/tasks/AddTaskModals";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTask } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Task = () => {
  const tasks = useAppSelector(selectTask);
  console.log(tasks);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between items-center">
        <h1>Tasks</h1>
        <AddTaskModals />
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task, idx) => (
          <TaskCard key={idx} task={task} />
        ))}
      </div>
    </div>
  );
};
export default Task;
