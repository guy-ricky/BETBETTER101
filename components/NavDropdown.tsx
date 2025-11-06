"use client";

import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  CreditCard,
  LayoutDashboard,
  LogOut,
  Shield,
  Crown,
} from "lucide-react";
import { useClerk } from "@clerk/nextjs";
import { toast } from "react-hot-toast";

type NavDropdownUser = {
  avatar?: string | null;
  username?: string | null;
  email?: string | null;
};

const Badge = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${className}`}
  >
    {children}
  </span>
);

const NavDropdown = ({
  user,
  isSubscribed,
  isAdmin,
  setIsMobileMenuOpen,
}: {
  user: NavDropdownUser;
  isSubscribed?: boolean;
  isAdmin?: boolean;
  setIsMobileMenuOpen?: (isOpen: boolean) => void;
}) => {
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    await signOut({ redirectUrl: "/" });

    toast("Successfully logged out!");
  };

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="relative w-8 h-8 rounded-full ring-2 ring-green-400 ring-offset-2 ring-offset-gray-900 overflow-hidden shadow-[0_0_20px_-5px_rgba(34,197,94,0.6)] hover:scale-105 transition-all cursor-pointer"
            aria-label="Open account menu"
          >
            <Image
              src={user?.avatar || "/default-avatar.png"}
              alt="User avatar"
              fill
              className="object-cover"
              sizes="20px"
              priority
            />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="w-72 border border-white/10 bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 shadow-2xl rounded-xl p-1"
          align="end"
          sideOffset={10}
        >
          {/* Header */}
          <div className="px-3 pt-3 pb-2">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-white/10">
                <Image
                  src={user?.avatar || "/default-avatar.png"}
                  alt="User avatar"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white truncate">
                  {user?.username || "My Account"}
                </p>
                {user?.email && (
                  <p className="text-xs text-gray-400 truncate">{user.email}</p>
                )}
                <div className="mt-1 flex items-center gap-2">
                  {isSubscribed && (
                    <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black">
                      <Crown className="w-3 h-3" /> VIP
                    </Badge>
                  )}
                  {isAdmin && (
                    <Badge className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
                      <Shield className="w-3 h-3" /> ADMIN
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>

          <DropdownMenuSeparator className="bg-white/10" />

          <DropdownMenuLabel className="text-xs uppercase tracking-wider text-gray-400">
            My Account
          </DropdownMenuLabel>

          <DropdownMenuGroup>
            {/* Dashboard */}
            <Link
              href="/user/dashboard"
              onClick={() => setIsMobileMenuOpen?.(false)}
            >
              <DropdownMenuItem className="cursor-pointer rounded-lg hover:bg-white/5 focus:bg-white/5">
                <LayoutDashboard className="mr-2 h-4 w-4 text-green-400" />
                <span>Dashboard</span>
                <DropdownMenuShortcut className="opacity-60">
                  ⇧⌘D
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>

            {/* Profile */}
            {/* <Link href="/user/dashboard">
              <DropdownMenuItem className="cursor-pointer rounded-lg hover:bg-white/5 focus:bg-white/5">
                <UserIcon className="mr-2 h-4 w-4 text-green-400" />
                <span>Profile</span>
                <DropdownMenuShortcut className="opacity-60">
                  ⇧⌘P
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link> */}

            {/* Billing */}
            <Link
              href="/user/dashboard/#billing"
              onClick={() => setIsMobileMenuOpen?.(false)}
            >
              <DropdownMenuItem className="cursor-pointer rounded-lg hover:bg-white/5 focus:bg-white/5">
                <CreditCard className="mr-2 h-4 w-4 text-green-400" />
                <span>Billing</span>
                <DropdownMenuShortcut className="opacity-60">
                  ⌘B
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>

            {/* Settings */}
            {/* <Link href="/user/settings">
              <DropdownMenuItem className="cursor-pointer rounded-lg hover:bg-white/5 focus:bg-white/5">
                <Settings className="mr-2 h-4 w-4 text-green-400" />
                <span>Settings</span>
                <DropdownMenuShortcut className="opacity-60">
                  ⌘S
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link> */}

            {/* Shortcuts */}
            {/* <DropdownMenuItem className="rounded-lg hover:bg-white/5 focus:bg-white/5">
              <Keyboard className="mr-2 h-4 w-4 text-green-400" />
              <span>Keyboard shortcuts</span>
              <DropdownMenuShortcut className="opacity-60">
                ⌘K
              </DropdownMenuShortcut>
            </DropdownMenuItem> */}

            {/* Admin-only link */}
            {isAdmin && (
              <Link
                href="/admin/dashboard"
                onClick={() => setIsMobileMenuOpen?.(false)}
              >
                <DropdownMenuItem className="cursor-pointer rounded-lg hover:bg-purple-900/30 focus:bg-purple-900/30 text-purple-300">
                  <Shield className="mr-2 h-4 w-4" />
                  <span>Admin Dashboard</span>
                </DropdownMenuItem>
              </Link>
            )}
          </DropdownMenuGroup>

          <DropdownMenuSeparator className="bg-white/10" />

          {/* Sign out */}
          <DropdownMenuItem
            onClick={handleSignOut}
            className="cursor-pointer rounded-lg hover:bg-red-500/10 focus:bg-red-500/10 text-red-300"
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sign out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavDropdown;
