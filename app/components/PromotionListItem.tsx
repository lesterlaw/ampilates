"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";
import { GripVertical } from "lucide-react";

type Promotion = {
  id: string;
  title: string;
  description: string | null;
  imageUrl: string;
  features: string[];
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type PromotionListItemProps = {
  promotion: Promotion;
  isEditing: boolean;
  onEdit: () => void;
  onToggleActive: () => void;
  onDelete: () => void;
  loading: boolean;
  editForm: React.ReactNode;
};

export default function PromotionListItem({
  promotion,
  isEditing,
  onEdit,
  onToggleActive,
  onDelete,
  loading,
  editForm,
}: PromotionListItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: promotion.id });

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
        {/* Drag Handle */}
        <div
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing flex-shrink-0 pt-1 text-gray-400 hover:text-[#80978b] transition-colors"
        >
          <GripVertical size={20} />
        </div>

        {/* Image */}
        <div className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200">
          <Image
            src={promotion.imageUrl}
            alt={promotion.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-lg font-semibold text-[#232323] truncate">
                  {promotion.title}
                </h3>
                <span
                  className={`px-2 py-1 text-xs rounded flex-shrink-0 ${
                    promotion.isActive
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {promotion.isActive ? "Active" : "Inactive"}
                </span>
                <span className="text-xs text-[#656565] flex-shrink-0">
                  Order: {promotion.order}
                </span>
              </div>
              {promotion.description && (
                <p className="text-sm text-[#656565] mb-2 line-clamp-2">
                  {promotion.description}
                </p>
              )}
              <div className="space-y-1">
                {promotion.features.slice(0, 2).map((feature, idx) => (
                  <div
                    key={idx}
                    className="text-xs text-[#656565] line-clamp-1"
                    dangerouslySetInnerHTML={{ __html: feature }}
                  />
                ))}
                {promotion.features.length > 2 && (
                  <div className="text-xs text-[#656565]">
                    +{promotion.features.length - 2} more
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
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
            {promotion.isActive ? "Deactivate" : "Activate"}
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

