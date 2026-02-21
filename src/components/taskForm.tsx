'use client'

import { useTaskForm } from "@/hooks/useTaskForm";

interface Props {
  taskId: string | null
}

export default function TaskForm({ taskId }: Props) {
  const {
    formData,
    handleChange,
    handleSubmit,
    loading,
    isEdit,
  } = useTaskForm(taskId)

  if (loading) return <p>Loading...</p>

  return (
    <div className="w-full bg-white p-8 rounded-lg shadow border border-[#D9D9D9] ">

      <h1 className="text-2xl font-bold mb-6 ">
        {isEdit ? 'Edit Task' : 'Add Task'}
      </h1>

      <div className="space-y-4">

        <input
          name="ID"
          value={formData.id}
          onChange={handleChange}
          placeholder="ID"
          className="w-full border p-2 rounded border-[#D9D9D9] focus:border-[#D9D9D9] focus:ring-0 focus:outline-none"
        />
        
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full border p-2 rounded border-[#D9D9D9] focus:border-[#D9D9D9] focus:ring-0 focus:outline-none"
        />

        <input
          name="status"
          value={formData.status}
          onChange={handleChange}
          placeholder="Status"
          className="w-full border p-2 rounded border-[#D9D9D9] focus:border-[#D9D9D9] focus:ring-0 focus:outline-none"
        />

        <input
          name="dueDate"
          type="date"
          value={formData.dueDate}
          onChange={handleChange}
          placeholder="Due date"
          className="w-full border p-2 rounded border-[#D9D9D9] focus:border-[#D9D9D9] focus:ring-0 focus:outline-none"
        />

        <input
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          placeholder="Priority"
          className="w-full border p-2 rounded border-[#D9D9D9] focus:border-[#D9D9D9] focus:ring-0 focus:outline-none"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border p-2 rounded h-50 border-[#D9D9D9] focus:border-[#D9D9D9] focus:ring-0 focus:outline-none"
        />

        <div className="flex gap-4 justify-end">
          <button 
            className="bg-[#757575] text-white px-4 py-2 rounded-md text-sm hover:opacity-90 transition"
        >
            Delete
          </button>

          <button
            onClick={handleSubmit}
            className="bg-[#A1BC98] text-white px-4 py-2 rounded-md text-sm hover:opacity-90 transition"
          >
            {isEdit ? 'Edit' : 'Save'}
          </button>
        </div>

      </div>
    </div>
  )
}