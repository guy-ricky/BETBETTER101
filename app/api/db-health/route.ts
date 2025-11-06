/* eslint-disable @typescript-eslint/no-explicit-any */
export const runtime = "nodejs";
import { NextResponse } from "next/server";
import prisma from "@/utils";

export async function GET() {
  try {
    await prisma.$connect();
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: String(e?.message ?? e) }, { status: 500 });
  } finally {
    await prisma.$disconnect().catch(() => {});
  }
}
