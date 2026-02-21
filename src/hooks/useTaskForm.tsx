'use client'

import { useEffect, useState } from 'react'

interface TaskData {
  id: string
  title: string
  status: string
  dueDate: string
  priority: string
  description: string
}

export function useTaskForm(taskId: string | null) {
  const isEdit = !!taskId

  const [formData, setFormData] = useState<TaskData>({
    id: taskId || '',
    title: '',
    status: '',
    dueDate: '',
    priority: '',
    description: '',
  })

  const [loading, setLoading] = useState(false)

  // Simulasi fetch (nanti tinggal ganti fetch API)
  useEffect(() => {
    if (isEdit) {
      setLoading(true)

      setTimeout(() => {
        setFormData({
          id: '5',
          title: 'Dummy Task',
          status: 'Open',
          dueDate: '2026-02-21',
          priority: 'High',
          description: 'Ini dummy data edit mode',
        })

        setLoading(false)
      }, 500)
    }
  }, [isEdit])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    if (isEdit) {
      console.log('UPDATE:', formData)
    } else {
      console.log('CREATE:', formData)
    }
  }

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
    isEdit,
  }
}