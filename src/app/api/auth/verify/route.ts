import { NextRequest, NextResponse } from "next/server";
import { verifyToken, extractTokenFromRequest } from "@/lib/auth";

export async function GET(request: NextRequest) {
  try {
    const token = extractTokenFromRequest(request);

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Token tidak ditemukan." },
        { status: 401 }
      );
    }

    const payload = verifyToken(token);

    return NextResponse.json(
      {
        success: true,
        username: payload.username,
        exp: payload.exp,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Token tidak valid atau sudah expired." },
      { status: 401 }
    );
  }
}