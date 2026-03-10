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
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
  seedDefaultTeamMembers,
} from "@/app/actions/team-admin";

import ImageUploader from "./ImageUploader";
import TeamMemberListItem from "./TeamMemberListItem";

type TeamMember = {
  id: string;
  name: string;
  bio: string;
  imageUrl: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

interface TeamMembersManagerProps {
  initialTeamMembers: TeamMember[];
}

export default function TeamMembersManager({
  initialTeamMembers,
}: TeamMembersManagerProps) {
  const router = useRouter();
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(initialTeamMembers);
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

    const previousTeamMembers = [...teamMembers];
    const oldIndex = teamMembers.findIndex((member) => member.id === active.id);
    const newIndex = teamMembers.findIndex((member) => member.id === over.id);
    const reorderedTeamMembers = arrayMove(teamMembers, oldIndex, newIndex).map(
      (teamMember, index) => ({
        ...teamMember,
        order: index,
      })
    );

    setTeamMembers(reorderedTeamMembers);
    setError("");

    try {
      await Promise.all(
        reorderedTeamMembers.map((teamMember) =>
          updateTeamMember(teamMember.id, { order: teamMember.order })
        )
      );
      router.refresh();
    } catch (err) {
      console.error("Failed to update team member order:", err);
      setError("Failed to save new order");
      setTeamMembers(previousTeamMembers);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this team member?")) {
      return;
    }

    setLoading(id);
    setError("");

    const result = await deleteTeamMember(id);

    if (result.error) {
      setError(result.error);
      setLoading(null);
      return;
    }

    setTeamMembers(teamMembers.filter((teamMember) => teamMember.id !== id));
    setLoading(null);
    router.refresh();
  };

  const handleToggleActive = async (teamMember: TeamMember) => {
    setLoading(teamMember.id);
    setError("");

    const result = await updateTeamMember(teamMember.id, {
      isActive: !teamMember.isActive,
    });

    if (result.error) {
      setError(result.error);
      setLoading(null);
      return;
    }

    setTeamMembers(
      teamMembers.map((currentMember) =>
        currentMember.id === teamMember.id
          ? { ...currentMember, isActive: !currentMember.isActive }
          : currentMember
      )
    );
    setLoading(null);
    router.refresh();
  };

  const handleImportDefaults = async () => {
    setIsImporting(true);
    setError("");

    const result = await seedDefaultTeamMembers();

    if (result.error) {
      setError(result.error);
      setIsImporting(false);
      return;
    }

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
        <div>
          <h2 className="text-xl font-semibold text-[#232323]">All Team Members</h2>
          <p className="text-sm text-[#656565]">
            Reorder instructors by dragging, and control which profiles are live.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {teamMembers.length === 0 && (
            <button
              onClick={handleImportDefaults}
              disabled={isImporting}
              className="px-4 py-2 bg-[#e4e8e2] text-[#232323] rounded-lg hover:bg-[#d7ddd4] transition-colors duration-200 disabled:opacity-50"
            >
              {isImporting ? "Importing..." : "Import Current Team"}
            </button>
          )}
          <button
            onClick={() => {
              setShowCreateForm(true);
              setEditingId(null);
            }}
            className="px-4 py-2 bg-[#80978b] text-white rounded-lg hover:bg-[#6d8579] transition-colors duration-200"
          >
            + Add Team Member
          </button>
        </div>
      </div>

      {showCreateForm && (
        <TeamMemberForm
          nextOrder={teamMembers.length}
          onClose={() => setShowCreateForm(false)}
          onSuccess={(teamMember) => {
            setTeamMembers([...teamMembers, teamMember].sort((a, b) => a.order - b.order));
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
          items={teamMembers.map((teamMember) => teamMember.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-3">
            {teamMembers.map((teamMember) => (
              <TeamMemberListItem
                key={teamMember.id}
                teamMember={teamMember}
                isEditing={editingId === teamMember.id}
                onEdit={() => setEditingId(teamMember.id)}
                onToggleActive={() => handleToggleActive(teamMember)}
                onDelete={() => handleDelete(teamMember.id)}
                loading={loading === teamMember.id}
                editForm={
                  editingId === teamMember.id ? (
                    <TeamMemberForm
                      teamMember={teamMember}
                      nextOrder={teamMember.order}
                      onClose={() => setEditingId(null)}
                      onSuccess={(updatedTeamMember) => {
                        setTeamMembers(
                          teamMembers.map((currentMember) =>
                            currentMember.id === teamMember.id
                              ? updatedTeamMember
                              : currentMember
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

      {teamMembers.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <p className="text-[#656565]">
            No team members yet. Import the current team or create your first profile.
          </p>
        </div>
      )}
    </div>
  );
}

interface TeamMemberFormProps {
  teamMember?: TeamMember;
  nextOrder: number;
  onClose: () => void;
  onSuccess: (teamMember: TeamMember) => void;
}

function TeamMemberForm({
  teamMember,
  nextOrder,
  onClose,
  onSuccess,
}: TeamMemberFormProps) {
  const [name, setName] = useState(teamMember?.name || "");
  const [bio, setBio] = useState(teamMember?.bio || "");
  const [imageUrl, setImageUrl] = useState(teamMember?.imageUrl || "");
  const [order, setOrder] = useState(teamMember?.order.toString() || nextOrder.toString());
  const [isActive, setIsActive] = useState(teamMember?.isActive ?? true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (!imageUrl) {
      setError("Please upload an image");
      return;
    }

    setLoading(true);

    const payload = {
      name,
      bio,
      imageUrl,
      order: Number.parseInt(order, 10) || 0,
      isActive,
    };

    const result = teamMember
      ? await updateTeamMember(teamMember.id, payload)
      : await createTeamMember(payload);

    if (result.error) {
      setError(result.error);
      setLoading(false);
      return;
    }

    if (result.teamMember) {
      onSuccess(result.teamMember);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 space-y-4">
      <h3 className="text-xl font-semibold text-[#232323] mb-4">
        {teamMember ? "Edit Team Member" : "Create Team Member"}
      </h3>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-[#232323] mb-1">
          Name *
        </label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80978b] focus:border-transparent outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#232323] mb-1">
          Bio *
        </label>
        <textarea
          value={bio}
          onChange={(event) => setBio(event.target.value)}
          required
          rows={8}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80978b] focus:border-transparent outline-none"
        />
      </div>

      <ImageUploader
        value={imageUrl}
        onChange={setImageUrl}
        bucket="promotions"
        pathPrefix="team"
      />

      <div className="grid grid-cols-2 gap-4">
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
      </div>

      <div className="flex gap-2 pt-4">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 px-4 py-2 bg-[#80978b] text-white rounded-lg hover:bg-[#6d8579] transition-colors duration-200 disabled:opacity-50"
        >
          {loading ? "Saving..." : teamMember ? "Update" : "Create"}
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
