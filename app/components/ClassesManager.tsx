"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

import {
  createClassOffering,
  updateClassOffering,
  deleteClassOffering,
  seedDefaultClassOfferings,
} from "@/app/actions/classes-admin";

import ImageUploader from "./ImageUploader";
import ClassListItem from "./ClassListItem";

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

interface ClassesManagerProps {
  initialClassOfferings: ClassOffering[];
}

export default function ClassesManager({
  initialClassOfferings,
}: ClassesManagerProps) {
  const router = useRouter();
  const [classOfferings, setClassOfferings] = useState<ClassOffering[]>(
    initialClassOfferings
  );
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [isImporting, setIsImporting] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) {
      return;
    }

    const previousOfferings = [...classOfferings];
    const oldIndex = classOfferings.findIndex((offering) => offering.id === active.id);
    const newIndex = classOfferings.findIndex((offering) => offering.id === over.id);
    const reorderedOfferings = arrayMove(classOfferings, oldIndex, newIndex).map(
      (offering, index) => ({
        ...offering,
        order: index,
      })
    );

    setClassOfferings(reorderedOfferings);
    setError("");

    try {
      const results = await Promise.all(
        reorderedOfferings.map((offering) =>
          updateClassOffering(offering.id, { order: offering.order })
        )
      );

      const failedUpdate = results.find((result) => result.error);
      if (failedUpdate?.error) {
        throw new Error(failedUpdate.error);
      }

      router.refresh();
    } catch (err) {
      console.error("Failed to update class order:", err);
      setError("Failed to save new order");
      setClassOfferings(previousOfferings);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this class?")) {
      return;
    }

    setLoading(id);
    setError("");
    const result = await deleteClassOffering(id);

    if (result.error) {
      setError(result.error);
      setLoading(null);
      return;
    }

    setClassOfferings(classOfferings.filter((offering) => offering.id !== id));
    setLoading(null);
    router.refresh();
  };

  const handleToggleActive = async (classOffering: ClassOffering) => {
    setLoading(classOffering.id);
    setError("");
    const result = await updateClassOffering(classOffering.id, {
      isActive: !classOffering.isActive,
    });

    if (result.error) {
      setError(result.error);
      setLoading(null);
      return;
    }

    setClassOfferings(
      classOfferings.map((offering) =>
        offering.id === classOffering.id
          ? { ...offering, isActive: !offering.isActive }
          : offering
      )
    );
    setLoading(null);
    router.refresh();
  };

  const handleImportDefaults = async () => {
    setIsImporting(true);
    setError("");

    const result = await seedDefaultClassOfferings();

    if (result.error) {
      setError(result.error);
      setIsImporting(false);
      return;
    }

    setIsImporting(false);
    router.refresh();
  };

  return (
    <div className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold text-[#232323]">All Classes</h2>
        <div className="flex flex-wrap gap-2">
          {classOfferings.length === 0 && (
            <button
              onClick={handleImportDefaults}
              disabled={isImporting}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200 disabled:opacity-50"
            >
              {isImporting ? "Importing..." : "Import Default Classes"}
            </button>
          )}
          <button
            onClick={() => {
              setShowCreateForm(true);
              setEditingId(null);
            }}
            className="px-4 py-2 bg-[#80978b] text-white rounded-lg hover:bg-[#6d8579] transition-colors duration-200"
          >
            + Add Class
          </button>
        </div>
      </div>

      {showCreateForm && (
        <ClassOfferingForm
          nextOrder={classOfferings.length}
          onClose={() => setShowCreateForm(false)}
          onSuccess={(classOffering) => {
            setClassOfferings([...classOfferings, classOffering]);
            setShowCreateForm(false);
            router.refresh();
          }}
        />
      )}

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToVerticalAxis]}
      >
        <SortableContext
          items={classOfferings.map((offering) => offering.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-3">
            {classOfferings.map((classOffering) => (
              <ClassListItem
                key={classOffering.id}
                classOffering={classOffering}
                isEditing={editingId === classOffering.id}
                onEdit={() => setEditingId(classOffering.id)}
                onToggleActive={() => handleToggleActive(classOffering)}
                onDelete={() => handleDelete(classOffering.id)}
                loading={loading === classOffering.id}
                editForm={
                  editingId === classOffering.id ? (
                    <ClassOfferingForm
                      classOffering={classOffering}
                      nextOrder={classOffering.order}
                      onClose={() => setEditingId(null)}
                      onSuccess={(updatedClassOffering) => {
                        setClassOfferings(
                          classOfferings.map((offering) =>
                            offering.id === classOffering.id
                              ? updatedClassOffering
                              : offering
                          )
                        );
                        setEditingId(null);
                        router.refresh();
                      }}
                    />
                  ) : null
                }
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      {classOfferings.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <p className="text-[#656565]">
            No classes yet. Import the default classes or create your first one.
          </p>
        </div>
      )}
    </div>
  );
}

type ClassOfferingFormProps = {
  classOffering?: ClassOffering;
  nextOrder: number;
  onClose: () => void;
  onSuccess: (classOffering: ClassOffering) => void;
};

function ClassOfferingForm({
  classOffering,
  nextOrder,
  onClose,
  onSuccess,
}: ClassOfferingFormProps) {
  const [title, setTitle] = useState(classOffering?.title || "");
  const [description, setDescription] = useState(classOffering?.description || "");
  const [imageUrl, setImageUrl] = useState(classOffering?.imageUrl || "");
  const [imageAlt, setImageAlt] = useState(classOffering?.imageAlt || "");
  const [difficulty, setDifficulty] = useState(
    classOffering?.difficulty?.toString() || ""
  );
  const [order, setOrder] = useState(
    classOffering?.order.toString() || nextOrder.toString()
  );
  const [isActive, setIsActive] = useState(classOffering?.isActive ?? true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (!imageUrl || imageUrl.startsWith("blob:")) {
      setError("Please upload an image and wait for the upload to finish");
      return;
    }

    setLoading(true);

    const parsedDifficulty = difficulty.trim()
      ? Number.parseInt(difficulty, 10)
      : null;

    const payload = {
      title,
      description,
      imageUrl,
      imageAlt: imageAlt || title,
      difficulty: parsedDifficulty,
      order: Number.parseInt(order, 10) || 0,
      isActive,
    };

    const result = classOffering
      ? await updateClassOffering(classOffering.id, payload)
      : await createClassOffering(payload);

    if (result.error) {
      setError(result.error);
      setLoading(false);
      return;
    }

    if (result.classOffering) {
      onSuccess(result.classOffering);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 space-y-4">
      <h3 className="text-xl font-semibold text-[#232323] mb-4">
        {classOffering ? "Edit Class" : "Create Class"}
      </h3>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-[#232323] mb-1">
          Title *
        </label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80978b] focus:border-transparent outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#232323] mb-1">
          Description *
        </label>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80978b] focus:border-transparent outline-none"
        />
      </div>

      <ImageUploader
        value={imageUrl}
        onChange={setImageUrl}
        bucket="promotions"
        pathPrefix="classes"
      />

      <div>
        <label className="block text-sm font-medium text-[#232323] mb-1">
          Image Alt Text
        </label>
        <input
          type="text"
          value={imageAlt}
          onChange={(event) => setImageAlt(event.target.value)}
          placeholder="Describe the image for accessibility"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80978b] focus:border-transparent outline-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#232323] mb-1">
            Difficulty (1-3, optional)
          </label>
          <input
            type="number"
            min={1}
            max={3}
            value={difficulty}
            onChange={(event) => setDifficulty(event.target.value)}
            placeholder="Leave empty for none"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80978b] focus:border-transparent outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#232323] mb-1">
            Order
          </label>
          <input
            type="number"
            value={order}
            onChange={(event) => setOrder(event.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80978b] focus:border-transparent outline-none"
          />
        </div>
      </div>

      <div className="flex items-center">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={isActive}
            onChange={(event) => setIsActive(event.target.checked)}
            className="w-4 h-4 text-[#80978b] border-gray-300 rounded focus:ring-[#80978b]"
          />
          <span className="text-sm font-medium text-[#232323]">Active</span>
        </label>
      </div>

      <div className="flex gap-2 pt-4">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 px-4 py-2 bg-[#80978b] text-white rounded-lg hover:bg-[#6d8579] transition-colors duration-200 disabled:opacity-50"
        >
          {loading ? "Saving..." : classOffering ? "Update" : "Create"}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
