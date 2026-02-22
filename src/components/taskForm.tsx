'use client'

import { useTaskForm } from "@/hooks/useTaskForm"
import BadgePicker from "@/components/badgePicker"
import { STATUS_OPTIONS, PRIORITY_OPTIONS } from "@/constants/taskOptions"

interface Props {
  taskId: string | null
}

export default function TaskForm({ taskId }: Props) {
  const {
    formData,
    errors,
    handleChange,
    handleOptionChange,
    handleSubmit,
    loading,
    isEdit,
  } = useTaskForm(taskId)

  if (loading) return <p>Loading...</p>

  return (
    <div className="w-full bg-white p-8 rounded-lg shadow border border-[#D9D9D9]">
      <h1 className="text-2xl font-bold mb-6">
        {isEdit ? 'Edit Task' : 'Add Task'}
      </h1>

      <div className="space-y-4">

        {/* ID — auto increment, readonly */}
        <div>
          <label htmlFor="id" className="block text-l font-bold mb-1">ID</label>
          <input
            id="id"
            name="id"
            value={formData.id}
            readOnly
            className="w-full border p-2 rounded border-[#D9D9D9] bg-gray-100 text-gray-500 cursor-not-allowed focus:outline-none"
          />
        </div>

        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-l font-bold mb-1">Title</label>
          <input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className={`w-full border p-2 rounded focus:ring-0 focus:outline-none ${
              errors.title ? 'border-red-400' : 'border-[#D9D9D9]'
            }`}
          />
          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
        </div>

        {/* Status — inline badge picker dengan dot */}
        <BadgePicker
          label="Status"
          value={formData.status}
          options={STATUS_OPTIONS}
          onChange={(val) => handleOptionChange('status', val)}
          error={errors.status}
          withDot={true}
        />

        {/* Due Date */}
        <div>
          <label htmlFor="dueDate" className="block text-l font-bold mb-1">Due Date</label>
          <input
            id="dueDate"
            name="dueDate"
            type="date"
            value={formData.dueDate}
            onChange={handleChange}
            className={`w-full border p-2 rounded focus:ring-0 focus:outline-none ${
              errors.dueDate ? 'border-red-400' : 'border-[#D9D9D9]'
            }`}
          />
          {errors.dueDate && <p className="text-red-500 text-xs mt-1">{errors.dueDate}</p>}
        </div>

        {/* Priority — inline badge picker tanpa dot */}
        <BadgePicker
          label="Priority"
          value={formData.priority}
          options={PRIORITY_OPTIONS}
          onChange={(val) => handleOptionChange('priority', val)}
          error={errors.priority}
          withDot={false}
        />

        {/* Description — boleh kosong */}
        <div>
          <label htmlFor="description" className="block text-l font-bold mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description (optional)"
            className="w-full border p-2 rounded h-30 border-[#D9D9D9] focus:border-[#D9D9D9] focus:ring-0 focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-end">
          <button
            type="button"
            disabled={!isEdit}
            className={`px-4 py-2 rounded-md text-sm transition text-white ${
              isEdit
                ? 'bg-[#757575] hover:opacity-90 cursor-pointer'
                : 'bg-[#D9D9D9] cursor-not-allowed opacity-60'
            }`}
          >
            Delete
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-[#A1BC98] text-white px-4 py-2 rounded-md text-sm hover:opacity-90 transition cursor-pointer"
          >
            Save
          </button>
        </div>

      </div>
    </div>
  )
}