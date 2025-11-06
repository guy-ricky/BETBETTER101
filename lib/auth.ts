/* Admin gate (Clerk) */
import { auth, currentUser } from "@clerk/nextjs/server";

export async function requireAdmin() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");
  const u = await currentUser();

  const role = (u?.publicMetadata?.role as string) || "USER";
  if (role !== "ADMIN") throw new Error("Forbidden");
  return { userId, role };
}
