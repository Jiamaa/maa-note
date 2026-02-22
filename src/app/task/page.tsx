'use client'

import { use } from "react"
import DefaultNavbar from "@/components/navbar"
import TaskForm from "@/components/taskForm"

interface PageProps {
  searchParams: Promise<{ id?: string }>
}

export default function TaskPage({ searchParams }: PageProps) {
  const { id } = use(searchParams)
  const taskId = id || null

  return (
    <div className="p-30 pt-25">
      <DefaultNavbar />
      <TaskForm taskId={taskId} />
    </div>
  )
}