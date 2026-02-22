'use client';

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "@/components/card";
import DefaultNavbar from "@/components/navbar";
import { getTasks } from "@/services/taskService";
import { Task } from "@/types/note-types";
import { deleteTask } from "@/services/taskService";
import { list } from "@material-tailwind/react";

export default function HomePage() {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchedTasks = getTasks();
    setTasks(fetchedTasks);
  }, []);
  
  const addNewTask = () => {
    router.push("/task");
  };

  const handleDelete = (id: number) => {
     console.log('handleDelete called, id:', id);
    deleteTask(id)
    router.refresh()
  }

  // Filter tasks by status
  const todoTasks = tasks.filter(task => task.status === 'todo');
  const inProgressTasks = tasks.filter(task => task.status === 'inProgress');
  const completedTasks = tasks.filter(task => task.status === 'completed');

  // Sort tasks by priority and then by ID
  const priorityRank: Record<string, number> = {
    High: 1,
    Medium: 2,
    Low: 3,
  };

  const sortTasks = (list: Task[]) => {
    return [...list].sort((a, b) => {
      const pa = priorityRank[a.priority.toLocaleLowerCase()] || 99;
      const pb = priorityRank[b.priority.toLocaleLowerCase()] || 99;
      if (pa !== pb) {
        return pa - pb;
      }
      return a.id - b.id;
    });
  };

  // Empty state per section
  const EmptyState = ({ label }: { label: string }) => (
    <div className="text-center text-[#757575] py-10">
      <p>No {label} tasks</p>
    </div>
  );

  const renderSection = (title: string, tasks: Task[]) => (
    <div className="mb-8">
      <h2 className="text-xl text-[#757575] font-semibold mb-4">{title}</h2>
      {tasks.length === 0 ? (
        <EmptyState label={title.toLowerCase()} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortTasks(tasks).map((task) => (
            <Card
              key={task.id}
              id={task.id}
              title={task.title}
              dueDate={task.dueDate}
              priority={task.priority}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FEFFF9] p-8">
      <DefaultNavbar />
        
       <div className="pt-17">
        {renderSection("To Do", todoTasks)}
        {renderSection("In Progress", inProgressTasks)}
        {renderSection("Completed", completedTasks)}
      </div>

      {/* Floating Add Button */}
      <button className="fixed bottom-8 right-8 bg-[#A1BC98] w-14 h-14 rounded-full text-white text-3xl shadow-lg hover:scale-105 transition"
      onClick={addNewTask}>
        +
      </button>
    </div>
  );
}