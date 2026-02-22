import DefaultNavbar from "@/components/navbar";
import TaskForm from "@/components/taskForm";

interface PageProps {
  searchParams: Promise<{ id?: string }>
}

export default async function TaskPage({ searchParams }: PageProps) {
  const { id } = await searchParams;
  const taskId = id || null;

  return (
    <div className="p-30 pt-25">
      <DefaultNavbar />
      <TaskForm taskId={taskId} />
    </div>
  )
}