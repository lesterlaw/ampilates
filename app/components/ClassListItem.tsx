"use client";

import Image from "next/image";
import { GripVertical } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import DifficultyIcon from "./DifficultyIcon";

type ClassOffering = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  difficulty: number | null;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

interface ClassListItemProps {
  classOffering: ClassOffering;
  isEditing: boolean;
  onEdit: () => void;
  onToggleActive: () => void;
  onDelete: () => void;
  loading: boolean;
  editForm: React.ReactNode;
}

export default function ClassListItem({
  classOffering,
  isEditing,
  onEdit,
  onToggleActive,
  onDelete,
  loading,
  editForm,
}: ClassListItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: classOffering.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  if (isEditing) {
    return (
      <div ref={setNodeRef} style={style} className="bg-white rounded-lg border border-gray-200">
        {editForm}
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow ${
        isDragging ? "shadow-lg" : ""
      }`}
    >
      <div className="flex items-start gap-4 p-4">
        <div
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing flex-shrink-0 pt-1 text-gray-400 hover:text-[#80978b] transition-colors"
        >
          <GripVertical size={20} />
        </div>

        <div className="relative w-40 h-32 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200 bg-[#f3f3ed]">
          <Image
            src={classOffering.imageUrl}
            alt={classOffering.imageAlt}
            fill
            className="object-cover object-center"
            unoptimized={classOffering.imageUrl.startsWith("blob:")}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h3 className="text-lg font-semibold text-[#232323] truncate">
              {classOffering.title}
            </h3>
            <span
              className={`px-2 py-1 text-xs rounded flex-shrink-0 ${
                classOffering.isActive
                  ? "bg-green-100 text-green-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {classOffering.isActive ? "Active" : "Inactive"}
            </span>
            <span className="text-xs text-[#656565] flex-shrink-0">
              Order: {classOffering.order}
            </span>
            {classOffering.difficulty ? (
              <span className="text-xs text-[#656565] flex items-center gap-1 flex-shrink-0">
                Difficulty:
                {Array.from({ length: classOffering.difficulty }).map((_, index) => (
                  <DifficultyIcon key={index} className="w-3 h-3 text-[#80978b]" />
                ))}
              </span>
            ) : null}
          </div>
          <p className="text-sm text-[#656565] line-clamp-3">{classOffering.description}</p>
        </div>

        <div className="flex flex-col gap-2 flex-shrink-0">
          <button
            onClick={onEdit}
            className="px-3 py-1.5 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            Edit
          </button>
          <button
            onClick={onToggleActive}
            disabled={loading}
            className="px-3 py-1.5 bg-yellow-600 text-white rounded text-sm hover:bg-yellow-700 transition-colors disabled:opacity-50 whitespace-nowrap"
          >
            {classOffering.isActive ? "Deactivate" : "Activate"}
          </button>
          <button
            onClick={onDelete}
            disabled={loading}
            className="px-3 py-1.5 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors disabled:opacity-50 whitespace-nowrap"
          >
            {loading ? "..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
