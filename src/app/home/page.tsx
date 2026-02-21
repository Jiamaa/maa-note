'use client';

import Card from "@/components/card";
import { useRouter } from "next/navigation";

export default function HomePage() {
   const router = useRouter();
  
  const addNewTask = () => {
    router.push("/task");
  };

  const tasks = {
    todo: [
      { id: 1, title: "Fix API Bug", dueDate: "2026-02-26", priority: "Medium" },
      { id: 2, title: "Design UI", dueDate: "2026-02-25", priority: "High" },
    ],
    inProgress: [
      { id: 3, title: "Build Auth", dueDate: "2026-02-28", priority: "High" },
    ],
    completed: [
      { id: 4, title: "Setup Database", dueDate: "2026-02-20", priority: "Low" },
    ],
  };

  const sortTasks = (taskList: typeof tasks.todo) => {
    const priorityRank: Record<string, number> = {
      High: 1,
      Medium: 2,
      Low: 3,
    };
    return [...taskList].sort((a, b) => {
      if (priorityRank[a.priority] !== priorityRank[b.priority]) {
        return priorityRank[a.priority] - priorityRank[b.priority];
      }
      return a.id - b.id;
    });
  };

  return (
    <div className="min-h-screen bg-[#FEFFF9] p-8">
      <div className="fixed top-0 left-0 right-0 flex items-center justify-end bg-[#ECEFE2] h-17 pr-30">
        <h2 className="text-lg font-medium">Hi, Rahma!</h2>
      </div>
        
      {/* TO DO */}
      <div className="pt-17 mb-8">
        <h2 className="text-xl font-semibold mb-4">To Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortTasks(tasks.todo).map((task) => (
            <Card
              key={task.id}
              title={task.title}
              dueDate={task.dueDate}
              priority={task.priority as any}
            />
          ))}
        </div>
      </div>

      {/* IN PROGRESS */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">In Progress</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortTasks(tasks.inProgress).map((task) => (
            <Card
              key={task.id}
              title={task.title}
              dueDate={task.dueDate}
              priority={task.priority as any}
            />
          ))}
        </div>
      </div>

      {/* COMPLETED */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Completed</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortTasks(tasks.completed).map((task) => (
            <Card
              key={task.id}
              title={task.title}
              dueDate={task.dueDate}
              priority={task.priority as any}
            />
          ))}
        </div>
      </div>

      {/* Floating Add Button */}
      <button className="fixed bottom-8 right-8 bg-[#A1BC98] w-14 h-14 rounded-full text-white text-3xl shadow-lg hover:scale-105 transition"
      onClick={addNewTask}>
        +
      </button>
    </div>
  );
}