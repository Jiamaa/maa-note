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

        <label htmlFor="ID" className="block text-l font-bold mb-1">
          ID
        </label>
        <input
          id="id"
          name="ID"
          value={formData.id}
          onChange={handleChange}
          placeholder="ID"
          className="w-full border p-2 rounded border-[#D9D9D9] focus:border-[#D9D9D9] focus:ring-0 focus:outline-none"
        />
        
        <label htmlFor="title" className="block text-l font-bold mb-1">
          Title
        </label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full border p-2 rounded border-[#D9D9D9] focus:border-[#D9D9D9] focus:ring-0 focus:outline-none"
        />

        <label htmlFor="status" className="block text-l font-bold mb-1">
          Status
        </label>
        <input
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          placeholder="Status"
          className="w-full border p-2 rounded border-[#D9D9D9] focus:border-[#D9D9D9] focus:ring-0 focus:outline-none"
        />

        <label htmlFor="dueDate" className="block text-l font-bold mb-1">
          Due Date
        </label>
        <input
          id="dueDate"
          name="dueDate"
          type="date"
          value={formData.dueDate}
          onChange={handleChange}
          placeholder="Due date"
          className="w-full border p-2 rounded border-[#D9D9D9] focus:border-[#D9D9D9] focus:ring-0 focus:outline-none"
        />

        <label htmlFor="priority" className="block text-l font-bold mb-1">
          Priority
        </label>
        <input
          id="priority"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          placeholder="Priority"
          className="w-full border p-2 rounded border-[#D9D9D9] focus:border-[#D9D9D9] focus:ring-0 focus:outline-none"
        />

        <label htmlFor="description" className="block text-l font-bold mb-1">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border p-2 rounded h-30 border-[#D9D9D9] focus:border-[#D9D9D9] focus:ring-0 focus:outline-none"
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