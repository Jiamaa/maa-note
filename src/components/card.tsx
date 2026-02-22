'use client'

import { useRouter } from "next/navigation";

 interface CardProps {
    id: number;
    title: string;
    dueDate: string;
    priority: string;
    onDelete?: (id: number) => void;
}

const priorityStyles: Record<string, string> = {
    high: 'bg-[#EA7B7B]',
    medium: 'bg-[#F5C27A]',
    low: 'bg-[#A1BC98]',
};

export default function Card({ 
    id,
    title, 
    dueDate, 
    priority,
    onDelete, 
}: CardProps) {
    const router = useRouter();

    const handleCardClick = () => {
        router.push(`/task?id=${id}`);
    }

    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation();
         console.log('handleDelete called, id:', id);
        onDelete?.(id);
    };
    return (
        <div onClick={handleCardClick} 
            className="cursor-pointer w-full rounded-lg border border-[#D9D9D9] bg-white p-5 shadow-sm">
            <span className="text-xs text-gray-400">#{id}</span>

            <h3 className="text-lg text-[#757575] font-semibold mb-3">{title}</h3>
            <div className="text-sm text-[#757575] space-y-1 mb-4">
                <p>Due Date: {dueDate}</p>
                
                <div className="flex items-center gap-2">
                    <span>Priority:</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-white text-xs font-medium ${priorityStyles[priority.toLocaleLowerCase()] ?? 'bg-gray-300'}`}>
                        {priority}
                    </span>
                </div>
            </div>

            <div className="flex justify-end gap-5">
                <button
                onClick={handleDelete}
                className=" cursor-pointer bg-[#757575] text-white px-4 py-1.5 rounded-md text-sm hover:opacity-90 transition"
                >
                Delete
                </button>

                <button
                onClick={handleCardClick}
                className=" cursor-pointer bg-[#A1BC98] text-white px-4 py-1.5 rounded-md text-sm hover:opacity-90 transition"
                >
                Edit
                </button>
            </div>
        </div>
    );
}