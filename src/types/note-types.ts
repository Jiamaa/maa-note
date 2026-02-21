export interface Note {
    id: number;
    title: string;
    status: string;
    dueDate: Date;
    priority: string;
    description: string;
    onEdit: () => void;
    onDelete: () => void;
}