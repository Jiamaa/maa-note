import DefaultNavbar from "@/components/navbar";
import TaskForm from "@/components/taskForm";

interface PageProps {
  params: {
    id: string
  }
}

export default function TaskPage({ params }: PageProps) {
  const isEdit = params.id !== 'new'

  return (
    <div className="p-30 pt-25">
      <DefaultNavbar />
      <TaskForm taskId={isEdit ? params.id : null} />
    </div>
  )
}