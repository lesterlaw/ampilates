"use client";

import { useState } from "react";
import { createPromotion, updatePromotion, deletePromotion } from "@/app/actions/promotions-admin";
import { useRouter } from "next/navigation";
import ImageUploader from "./ImageUploader";
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
import PromotionListItem from "./PromotionListItem";

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

type PromotionsManagerProps = {
  initialPromotions: Promotion[];
};

export default function PromotionsManager({ initialPromotions }: PromotionsManagerProps) {
  const router = useRouter();
  const [promotions, setPromotions] = useState<Promotion[]>(initialPromotions);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState("");

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

    const oldIndex = promotions.findIndex((p) => p.id === active.id);
    const newIndex = promotions.findIndex((p) => p.id === over.id);

    const newPromotions = arrayMove(promotions, oldIndex, newIndex);
    setPromotions(newPromotions);

    // Update orders in database
    const updates = newPromotions.map((promo, index) => ({
      id: promo.id,
      order: index,
    }));

    // Update all affected promotions
    try {
      await Promise.all(
        updates.map((update) =>
          updatePromotion(update.id, { order: update.order })
        )
      );
      router.refresh();
    } catch (err) {
      console.error("Failed to update order:", err);
      setError("Failed to save new order");
      // Revert on error
      setPromotions(promotions);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this promotion?")) {
      return;
    }

    setLoading(id);
    setError("");
    const result = await deletePromotion(id);

    if (result.error) {
      setError(result.error);
      setLoading(null);
    } else {
      setPromotions(promotions.filter((p) => p.id !== id));
      setLoading(null);
      router.refresh();
    }
  };

  const handleToggleActive = async (promotion: Promotion) => {
    setLoading(promotion.id);
    setError("");
    const result = await updatePromotion(promotion.id, {
      isActive: !promotion.isActive,
    });

    if (result.error) {
      setError(result.error);
      setLoading(null);
    } else {
      setPromotions(
        promotions.map((p) => (p.id === promotion.id ? { ...p, isActive: !p.isActive } : p))
      );
      setLoading(null);
      router.refresh();
    }
  };

  return (
    <div className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-[#232323]">All Promotions</h2>
        <button
          onClick={() => {
            setShowCreateForm(true);
            setEditingId(null);
          }}
          className="px-4 py-2 bg-[#80978b] text-white rounded-lg hover:bg-[#6d8579] transition-colors duration-200"
        >
          + Add Promotion
        </button>
      </div>

      {showCreateForm && (
        <PromotionForm
          onClose={() => setShowCreateForm(false)}
          onSuccess={(promotion) => {
            setPromotions([...promotions, promotion]);
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
          items={promotions.map((p) => p.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-3">
            {promotions.map((promotion) => (
              <PromotionListItem
                key={promotion.id}
                promotion={promotion}
                isEditing={editingId === promotion.id}
                onEdit={() => setEditingId(promotion.id)}
                onToggleActive={() => handleToggleActive(promotion)}
                onDelete={() => handleDelete(promotion.id)}
                loading={loading === promotion.id}
                editForm={
                  editingId === promotion.id ? (
                    <PromotionForm
                      promotion={promotion}
                      onClose={() => setEditingId(null)}
                      onSuccess={(updated) => {
                        setPromotions(
                          promotions.map((p) => (p.id === promotion.id ? updated : p))
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

      {promotions.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <p className="text-[#656565]">No promotions yet. Create your first one!</p>
        </div>
      )}
    </div>
  );
}

type PromotionFormProps = {
  promotion?: Promotion;
  onClose: () => void;
  onSuccess: (promotion: Promotion) => void;
};

function PromotionForm({ promotion, onClose, onSuccess }: PromotionFormProps) {
  const [title, setTitle] = useState(promotion?.title || "");
  const [description, setDescription] = useState(promotion?.description || "");
  const [imageUrl, setImageUrl] = useState(promotion?.imageUrl || "");
  const [features, setFeatures] = useState(
    promotion?.features.join("\n") || ""
  );
  const [order, setOrder] = useState(promotion?.order.toString() || "0");
  const [isActive, setIsActive] = useState(promotion?.isActive ?? true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!imageUrl) {
      setError("Please upload an image");
      return;
    }
    
    setLoading(true);

    const featuresArray = features
      .split("\n")
      .map((f) => f.trim())
      .filter((f) => f.length > 0);

    const result = promotion
      ? await updatePromotion(promotion.id, {
          title,
          description: description || undefined,
          imageUrl,
          features: featuresArray,
          order: parseInt(order) || 0,
          isActive,
        })
      : await createPromotion({
          title,
          description: description || undefined,
          imageUrl,
          features: featuresArray,
          order: parseInt(order) || 0,
          isActive,
        });

    if (result.error) {
      setError(result.error);
      setLoading(false);
    } else if (result.promotion) {
      onSuccess(result.promotion);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 space-y-4">
      <h3 className="text-xl font-semibold text-[#232323] mb-4">
        {promotion ? "Edit Promotion" : "Create Promotion"}
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
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80978b] focus:border-transparent outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#232323] mb-1">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80978b] focus:border-transparent outline-none"
        />
      </div>

      <ImageUploader
        value={imageUrl}
        onChange={setImageUrl}
        bucket="promotions"
      />

      <div>
        <label className="block text-sm font-medium text-[#232323] mb-1">
          Features (one per line) *
        </label>
        <textarea
          value={features}
          onChange={(e) => setFeatures(e.target.value)}
          required
          rows={6}
          placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80978b] focus:border-transparent outline-none font-mono text-sm"
        />
        <p className="text-xs text-[#656565] mt-1">
          You can use HTML tags like &lt;span&gt; for styling
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#232323] mb-1">
            Order
          </label>
          <input
            type="number"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80978b] focus:border-transparent outline-none"
          />
        </div>

        <div className="flex items-center">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
              className="w-4 h-4 text-[#80978b] border-gray-300 rounded focus:ring-[#80978b]"
            />
            <span className="text-sm font-medium text-[#232323]">Active</span>
          </label>
        </div>
      </div>

      <div className="flex gap-2 pt-4">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 px-4 py-2 bg-[#80978b] text-white rounded-lg hover:bg-[#6d8579] transition-colors duration-200 disabled:opacity-50"
        >
          {loading ? "Saving..." : promotion ? "Update" : "Create"}
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

