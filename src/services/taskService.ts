import { Task } from "@/types/note-types";

const STORAGE_KEY = "tasks";

function getAllTasks(): Task[] {
    if(typeof window === "undefined") return [];
    const tasks = localStorage.getItem(STORAGE_KEY);
    return tasks ? JSON.parse(tasks) : [];
}

function saveTasks(tasks: Task[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function getNextId(): number {
    const tasks = getAllTasks();
    if (tasks.length === 0) return 1;
    const maxId = Math.max(...tasks.map(task => task.id));
    return maxId + 1;
}

export function getTasks(): Task[] {
    return getAllTasks();
}

export function getTaskById(id: number): Task | undefined {
    const tasks = getAllTasks();
    return tasks.find(task => task.id === id);
}

export function createTask(task: Omit<Task, "id">): Task {
    const tasks = getAllTasks();
    const newTask: Task = { id: getNextId(), ...task };
    saveTasks([...tasks, newTask]);
    return newTask;
}

export function updateTask(id: number, updatedTask: Omit<Task, "id">): Task | null {
    const tasks = getAllTasks();
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) return null;
    tasks[index] = { id, ...updatedTask };
    saveTasks(tasks);
    return tasks[index];
}

export function deleteTask(id: number): void {
    console.log('deleteTask called, id:', id);
    const tasks = getAllTasks();
    const filteredTasks = tasks.filter(task => task.id !== id);
    console.log('tasks after filter:', tasks); 
    saveTasks(filteredTasks);
}