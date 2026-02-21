'use client'

 interface CardProps {
    title: string;
    dueDate: string;
    priority: "Low" | "Medium" | "High";
    onEdit?: () => void;
    onDelete?: () => void;
}

export default function Card({ 
    title, 
    dueDate, 
    priority, 
    onEdit, 
    onDelete 
}: CardProps) {
    return (
        <div className="w-full rounded-lg border border-[#D9D9D9] bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold mb-3">{title}</h3>

            <div className="text-sm text-gray-600 space-y-1 mb-4">
                <p>Due Date: {dueDate}</p>
                <p>Priority: {priority}</p>
            </div>

            <div className="flex justify-end gap-5">
                <button
                onClick={onDelete}
                className="bg-[#757575] text-white px-4 py-1.5 rounded-md text-sm hover:opacity-90 transition"
                >
                Delete
                </button>

                <button
                onClick={onEdit}
                className="bg-[#A1BC98] text-white px-4 py-1.5 rounded-md text-sm hover:opacity-90 transition"
                >
                Edit
                </button>
            </div>
        </div>
    );
}