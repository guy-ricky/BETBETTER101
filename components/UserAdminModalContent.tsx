"use client";

import Image from "next/image";
import React, { useState } from "react";
import { UserAdminModalContentProps } from "@/types";
import { formatRelativeTime } from "@/utils/dateFormatter";

const UserAdminModalContent = ({
  users,
  onUserUpdate,
}: UserAdminModalContentProps) => {
  const [selectedRole, setSelectedRole] = useState<Record<string, string>>({});
  const [selectedSubscription, setSelectedSubscription] = useState<
    Record<string, boolean>
  >({});
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("ALL");
  const [filterSubscription, setFilterSubscription] = useState("ALL");
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [newUserData, setNewUserData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    role: "USER" as "USER" | "ADMIN",
  });
  const [addUserStatus, setAddUserStatus] = useState<{
    loading: boolean;
    error: string | null;
    success: string | null;
  }>({ loading: false, error: null, success: null });

  const handleRoleChange = (userId: string, newRole: string) => {
    setSelectedRole((prev) => ({ ...prev, [userId]: newRole }));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onUserUpdate(userId, { role: newRole as any });
  };

  const handleSubscriptionChange = (userId: string, isSubscribed: boolean) => {
    setSelectedSubscription((prev) => ({ ...prev, [userId]: isSubscribed }));
    onUserUpdate(userId, { isSubscribed });
  };

  // Filter users based on search and filters
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (user.username &&
        user.username.toLowerCase().includes(searchTerm.toLowerCase())) ||
      user.clerkUserId.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole = filterRole === "ALL" || user.role === filterRole;
    const matchesSubscription =
      filterSubscription === "ALL" ||
      (filterSubscription === "SUBSCRIBED" && user.isSubscribed) ||
      (filterSubscription === "UNSUBSCRIBED" && !user.isSubscribed);

    return matchesSearch && matchesRole && matchesSubscription;
  });

  // Handle adding a new user
  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setAddUserStatus({ loading: true, error: null, success: null });

    try {
      const response = await fetch("/api/admin/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to add user");
      }

      setAddUserStatus({
        loading: false,
        error: null,
        success: `User ${
          result.status === "created" ? "created" : "updated"
        } successfully!`,
      });

      // Reset form and close modal after a short delay
      setTimeout(() => {
        setNewUserData({
          email: "",
          firstName: "",
          lastName: "",
          role: "USER",
        });
        setShowAddUserModal(false);
        setAddUserStatus({ loading: false, error: null, success: null });

        // Refresh the user list (you might want to implement a proper refresh mechanism)
        window.location.reload();
      }, 1500);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error adding user:", error);
      setAddUserStatus({
        loading: false,
        error: error.message,
        success: null,
      });
    }
  };

  /** ---------- Export helpers ---------- */
  const escapeCsv = (value: unknown): string => {
    const str =
      value === null || value === undefined
        ? ""
        : String(value).replace(/\r?\n/g, " ");
    // Escape quotes and wrap in quotes if needed
    const needsQuotes = /[",\n]/.test(str) || str.includes(",");
    const safe = str.replace(/"/g, '""');
    return needsQuotes ? `"${safe}"` : safe;
  };

  const toCsv = (
    rows: Record<string, unknown>[],
    columns: string[]
  ): string => {
    const header = columns.map(escapeCsv).join(",");
    const body = rows
      .map((r) => columns.map((c) => escapeCsv(r[c])).join(","))
      .join("\n");
    // Prepend BOM for Excel compatibility
    return "\uFEFF" + header + "\n" + body;
  };

  const downloadCsv = (csv: string, filename: string) => {
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const handleExport = () => {
    // Columns shown (or implied) in the table
    const columns = [
      "id",
      "clerkUserId",
      "username",
      "email",
      "role",
      "isSubscribed",
      "telegramLinked",
      "telegramUsername",
      "createdAtISO",
    ];

    const rows = filteredUsers.map((u) => {
      const role = selectedRole[u.id] || u.role;
      const isSubscribed =
        selectedSubscription[u.id] !== undefined
          ? selectedSubscription[u.id]
          : u.isSubscribed;

      return {
        id: u.id,
        clerkUserId: u.clerkUserId,
        username: u.username ?? "",
        email: u.email,
        role,
        isSubscribed: isSubscribed ? "Yes" : "No",
        telegramLinked: u.telegramLinkedAt ? "Yes" : "No",
        telegramUsername: u.telegramUsername ?? "",
        createdAtISO: new Date(u.createdAt).toISOString(),
      };
    });

    const csv = toCsv(rows, columns);
    const dt = new Date();
    const pad = (n: number) => n.toString().padStart(2, "0");
    const filename = `users-${dt.getFullYear()}${pad(dt.getMonth() + 1)}${pad(
      dt.getDate()
    )}-${pad(dt.getHours())}${pad(dt.getMinutes())}.csv`;

    downloadCsv(csv, filename);
  };
  /** ---------- /Export helpers ---------- */

  return (
    <div className="p-4 bg-[#111] text-white max-h-full overflow-y-auto">
      {/* Add User Modal */}
      {showAddUserModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1a1a1a] border border-[#333] rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Add New User</h3>
              <button
                onClick={() => setShowAddUserModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleAddUser} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={newUserData.email}
                  onChange={(e) =>
                    setNewUserData({ ...newUserData, email: e.target.value })
                  }
                  className="w-full bg-[#222] border border-[#333] rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00FF66]"
                  placeholder="user@example.com"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={newUserData.firstName}
                    onChange={(e) =>
                      setNewUserData({
                        ...newUserData,
                        firstName: e.target.value,
                      })
                    }
                    className="w-full bg-[#222] border border-[#333] rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00FF66]"
                    placeholder="Optional"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={newUserData.lastName}
                    onChange={(e) =>
                      setNewUserData({
                        ...newUserData,
                        lastName: e.target.value,
                      })
                    }
                    className="w-full bg-[#222] border border-[#333] rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00FF66]"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Role
                </label>
                <select
                  value={newUserData.role}
                  onChange={(e) =>
                    setNewUserData({
                      ...newUserData,
                      role: e.target.value as "USER" | "ADMIN",
                    })
                  }
                  className="w-full bg-[#222] border border-[#333] rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00FF66]"
                >
                  <option value="USER">User</option>
                  <option value="ADMIN">Admin</option>
                </select>
              </div>

              {addUserStatus.error && (
                <div className="p-3 bg-red-900/30 border border-red-800 rounded-lg text-red-400 text-sm">
                  {addUserStatus.error}
                </div>
              )}

              {addUserStatus.success && (
                <div className="p-3 bg-emerald-900/30 border border-emerald-800 rounded-lg text-emerald-400 text-sm">
                  {addUserStatus.success}
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddUserModal(false)}
                  className="flex-1 py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={addUserStatus.loading}
                  className="flex-1 py-2 px-4 bg-[#00FF66] hover:bg-[#00cc52] text-[#111] font-medium rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center"
                >
                  {addUserStatus.loading ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4 mr-2 text-[#111]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Adding...
                    </>
                  ) : (
                    "Add User"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Filters and Search */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="md:col-span-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg py-2 px-4 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-[#00FF66]"
            />
            <svg
              className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div>
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00FF66]"
          >
            <option value="ALL">All Roles</option>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>

        <div>
          <select
            value={filterSubscription}
            onChange={(e) => setFilterSubscription(e.target.value)}
            className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00FF66]"
          >
            <option value="ALL">All Subscriptions</option>
            <option value="SUBSCRIBED">Subscribed</option>
            <option value="UNSUBSCRIBED">Not Subscribed</option>
          </select>
        </div>
      </div>

      {/* User Count and Actions */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-400">
          Showing {filteredUsers.length} of {users.length} users
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setShowAddUserModal(true)}
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center cursor-pointer"
            title="Add New User"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Add User
          </button>
          <button
            onClick={handleExport}
            className="px-4 py-2 bg-[#00FF66] text-[#111] font-medium rounded-lg hover:bg-[#00cc52] transition-colors flex items-center cursor-pointer"
            title="Download Users CSV"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Export Data
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-[#1a1a1a] rounded-xl border border-[#333] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#222]">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  User
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden md:table-cell">
                  Email
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Subscription
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden lg:table-cell">
                  Telegram
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Joined
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#333]">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-[#222] transition-colors">
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <Image
                        className="h-10 w-10 rounded-full border-2 border-[#333]"
                        src={
                          user.avatar ||
                          "https://i.pinimg.com/736x/af/2f/7c/af2f7c0b2abfb0bfd94c7c57ffeb0e39.jpg"
                        }
                        width={40}
                        height={40}
                        alt={user.username || user.email}
                      />
                      <div className="ml-3">
                        <div className="text-sm font-medium text-white">
                          {user.username || "No username"}
                        </div>
                        <div className="text-xs text-gray-400 md:hidden">
                          {user.email}
                        </div>
                        <div className="text-xs text-gray-500">
                          ID: {user.clerkUserId.substring(0, 8)}...
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300 hidden md:table-cell">
                    {user.email}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <select
                      value={selectedRole[user.id] || user.role}
                      onChange={(e) =>
                        handleRoleChange(user.id, e.target.value)
                      }
                      className="text-sm bg-[#222] border border-[#333] rounded-lg px-3 py-1 text-white focus:outline-none focus:ring-2 focus:ring-[#00FF66]"
                    >
                      <option value="USER" className="bg-[#222]">
                        User
                      </option>
                      <option value="ADMIN" className="bg-[#222]">
                        Admin
                      </option>
                    </select>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <label className="inline-flex items-center cursor-pointer">
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={
                            selectedSubscription[user.id] ?? user.isSubscribed
                          }
                          onChange={(e) =>
                            handleSubscriptionChange(user.id, e.target.checked)
                          }
                          className="sr-only"
                        />
                        <div
                          className={`w-10 h-6 rounded-full ${
                            selectedSubscription[user.id] ?? user.isSubscribed
                              ? "bg-[#00FF66]"
                              : "bg-gray-600"
                          }`}
                        ></div>
                        <div
                          className={`absolute left-0.5 top-0.5 bg-white border border-gray-300 rounded-full h-5 w-5 transition-transform ${
                            selectedSubscription[user.id] ?? user.isSubscribed
                              ? "transform translate-x-4"
                              : ""
                          }`}
                        ></div>
                      </div>
                      <span className="ml-2 text-sm text-gray-300">
                        {selectedSubscription[user.id] ?? user.isSubscribed
                          ? "Active"
                          : "Inactive"}
                      </span>
                    </label>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300 hidden lg:table-cell">
                    {user.telegramLinkedAt ? (
                      <div className="flex items-center">
                        <span className="text-[#00FF66] flex items-center">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm5.797 17.305l-2.118-2.153-2.285 1.566-4.16-4.215 9.711-9.711 1.414 1.414-8.297 8.297 2.124 2.122 2.283-1.565 2.118 2.153-1.415 1.414-2.118-2.153-2.285 1.566-2.118-2.153 1.414-1.414 2.117 2.153 2.285-1.566 2.118 2.153-1.414 1.414z" />
                          </svg>
                          Linked
                        </span>
                        {user.telegramUsername && (
                          <span className="ml-2 text-gray-400">
                            @{user.telegramUsername}
                          </span>
                        )}
                      </div>
                    ) : (
                      <span className="text-gray-500 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        Not linked
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-400">
                    {formatRelativeTime(user.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-12 text-gray-500 bg-[#1a1a1a] rounded-lg border border-[#333] mt-4">
          <svg
            className="w-12 h-12 mx-auto text-gray-600 mb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-lg">No users found</p>
          <p className="text-sm mt-1">Try adjusting your search or filters</p>
        </div>
      )}

      {/* Mobile card view for small screens */}
      <div className="md:hidden mt-4 space-y-3">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="bg-[#1a1a1a] rounded-lg border border-[#333] p-4"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <Image
                  className="h-12 w-12 rounded-full border-2 border-[#333]"
                  src={
                    user.avatar ||
                    "https://i.pinimg.com/736x/af/2f/7c/af2f7c0b2abfb0bfd94c7c57ffeb0e39.jpg"
                  }
                  width={48}
                  height={48}
                  alt={user.username || user.email}
                />
                <div className="ml-3">
                  <div className="text-sm font-medium text-white">
                    {user.username || "No username"}
                  </div>
                  <div className="text-xs text-gray-400">{user.email}</div>
                </div>
              </div>
              <div className="text-xs text-gray-500">
                {formatRelativeTime(user.createdAt)}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <div className="text-gray-400 mb-1">Role</div>
                <select
                  value={selectedRole[user.id] || user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                  className="w-full bg-[#222] border border-[#333] rounded-lg px-2 py-1 text-white focus:outline-none focus:ring-1 focus:ring-[#00FF66] text-xs"
                >
                  <option value="USER" className="bg-[#222]">
                    User
                  </option>
                  <option value="ADMIN" className="bg-[#222]">
                    Admin
                  </option>
                </select>
              </div>

              <div>
                <div className="text-gray-400 mb-1">Subscription</div>
                <label className="inline-flex items-center">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={
                        selectedSubscription[user.id] ?? user.isSubscribed
                      }
                      onChange={(e) =>
                        handleSubscriptionChange(user.id, e.target.checked)
                      }
                      className="sr-only"
                    />
                    <div
                      className={`w-10 h-5 rounded-full ${
                        selectedSubscription[user.id] ?? user.isSubscribed
                          ? "bg-[#00FF66]"
                          : "bg-gray-600"
                      }`}
                    ></div>
                    <div
                      className={`absolute left-0.5 top-0.5 bg-white border border-gray-300 rounded-full h-4 w-4 transition-transform ${
                        selectedSubscription[user.id] ?? user.isSubscribed
                          ? "transform translate-x-5"
                          : ""
                      }`}
                    ></div>
                  </div>
                  <span className="ml-2 text-xs text-gray-300">
                    {selectedSubscription[user.id] ?? user.isSubscribed
                      ? "Active"
                      : "Inactive"}
                  </span>
                </label>
              </div>

              <div className="col-span-2">
                <div className="text-gray-400 mb-1">Telegram</div>
                <div className="text-xs text-gray-300">
                  {user.telegramLinkedAt ? (
                    <span className="text-[#00FF66]">
                      ✓ Linked{" "}
                      {user.telegramUsername && `(@${user.telegramUsername})`}
                    </span>
                  ) : (
                    <span className="text-gray-500">Not linked</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserAdminModalContent;
