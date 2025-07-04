import { AddTaskModals } from "@/components/module/tasks/AddTaskModals";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTaskQuery } from "@/redux/api/baseApi";
import { selectTask, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const Task = () => {
  const { data, isLoading, isError } = useGetTaskQuery(undefined);
  const tasks = useAppSelector(selectTask);
  const dispatch = useAppDispatch();
  if(isLoading){
    return <p>Loading...</p>
  }
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-end items-center gap-5">
        <h1 className="mr-auto">Tasks</h1>
        <Tabs defaultValue="All">
          <TabsList>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("All"))}
              value="All"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("Low"))}
              value="Low"
            >
              Low
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("Mediam"))}
              value="Mediam"
            >
              Mediam
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("High"))}
              value="High"
            >
              High
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModals />
      </div>
      <div className="space-y-5 mt-5">
        {data?.tasks.map((task, idx: string) => (
          <TaskCard key={idx} task={task} />
        ))}
      </div>
    </div>
  );
};
export default Task;
