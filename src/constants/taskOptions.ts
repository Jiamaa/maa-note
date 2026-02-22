import { BadgeOption } from '@/components/badgePicker'

export const PRIORITY_OPTIONS: BadgeOption[] = [
  {
    value: 'high',
    label: 'High',
    color: 'bg-[#EA7B7B]',
    textColor: 'text-white',
  },
  {
    value: 'medium',
    label: 'Medium',
    color: 'bg-[#F5C27A]',
    textColor: 'text-white',
  },
  {
    value: 'low',
    label: 'Low',
    color: 'bg-[#A1BC98]',
    textColor: 'text-white',
  },
]

export const STATUS_OPTIONS: BadgeOption[] = [
  {
    value: 'todo',
    label: 'To Do',
    color: 'bg-[#757575]',
    textColor: 'text-white',
    dotColor: 'bg-gray-200',
  },
  {
    value: 'inProgress',
    label: 'In Progress',
    color: 'bg-[#A1BC98]',
    textColor: 'text-white',
    dotColor: 'bg-[#FEFFF9]',
  },
  {
    value: 'completed',
    label: 'Completed',
    color: 'bg-[#6D94C5]',
    textColor: 'text-white',
    dotColor: 'bg-[#CBDCEB]',
  },
]