'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createTask, getNextId, getTaskById, updateTask, deleteTask } from '@/services/taskService'

interface TaskData {
  id: string
  title: string
  status: string
  dueDate: string
  priority: string
  description: string
}

interface ValidationErrors {
  title?: string
  status?: string
  dueDate?: string
  priority?: string
}

export function useTaskForm(taskId: string | null) {
  const router = useRouter()
  const isEdit = taskId !== null

  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [formData, setFormData] = useState<TaskData>({
    id: '',
    title: '',
    status: '',
    dueDate: '',
    priority: '',
    description: '',
  })

  useEffect(() => {
    if (isEdit && taskId) {
      const task = getTaskById(Number(taskId))
      if (task) {
        setFormData({
          id: String(task.id),
          title: task.title,
          status: task.status,
          dueDate: task.dueDate.toString(),
          priority: task.priority,
          description: task.description,
        })
      }
    } else {
      setFormData((prev) => ({ ...prev, id: String(getNextId()) }))
    }
    setLoading(false)
  }, [taskId, isEdit])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const validate = (): boolean => {
    const newErrors: ValidationErrors = {}
    if (!formData.title.trim()) newErrors.title = 'Title is required'
    if (!formData.status.trim()) newErrors.status = 'Status is required'
    if (!formData.dueDate.trim()) newErrors.dueDate = 'Due date is required'
    if (!formData.priority.trim()) newErrors.priority = 'Priority is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = () => {
    if (!validate()) return

    const payload = {
      title: formData.title.trim(),
      status: formData.status.trim(),
      dueDate: formData.dueDate.trim(),
      priority: formData.priority.trim(),
      description: formData.description.trim(),
    }

    if (isEdit && taskId) {
      updateTask(Number(taskId), payload)
    } else {
      createTask(payload)
    }

    router.push('/home')
  }

  const handleDelete = () => {
    if (isEdit && taskId){
      deleteTask(Number(taskId))
      router.push('/home')
    }
  }

  const handleOptionChange = (field: 'status' | 'priority', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }))

    if (errors[field as keyof ValidationErrors]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined,
      }))
    }
  }

  return {
    formData,
    errors,
    handleChange,
    handleOptionChange,
    handleSubmit,
    handleDelete,
    loading,
    isEdit,
  }
}