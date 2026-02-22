import { NextRequest, NextResponse } from "next/server";
import { verifyPassword, validatePasswordStrength } from "@/lib/password";
import { signToken } from "@/lib/auth";

const ADMIN_USERNAME = process.env.ADMIN_USERNAME!;
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH!;

export async function POST(request: NextRequest) {
 console.log("ADMIN_USERNAME dari env:", process.env.ADMIN_USERNAME);
  console.log("ADMIN_PASSWORD_HASH dari env:", process.env.ADMIN_PASSWORD_HASH);
  try {
    const body = await request.json();
    const { username, password } = body as {
      username: string;
      password: string;
    };

    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: "Username dan password wajib diisi." },
        { status: 400 }
      );
    }

    const passwordCheck = validatePasswordStrength(password);
    if (!passwordCheck.valid) {
      return NextResponse.json(
        { success: false, message: passwordCheck.message },
        { status: 400 }
      );
    }

    if (username !== ADMIN_USERNAME) {
      return NextResponse.json(
        { success: false, message: "Username atau password salah." },
        { status: 401 }
      );
    }

    const passwordValid = await verifyPassword(password, ADMIN_PASSWORD_HASH);
    if (!passwordValid) {
      return NextResponse.json(
        { success: false, message: "Username atau password salah." },
        { status: 401 }
      );
    }

    // Generate JWT token (3 jam)
    const token = signToken(username);

    // Set token di HTTP-only cookie + return di body
    const response = NextResponse.json(
      {
        success: true,
        message: "Login berhasil.",
        token,
        expiresIn: 3 * 60 * 60,
      },
      { status: 200 }
    );

    // Set HTTP-only cookie
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 3 * 60 * 60,
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json(
      { success: false, message: "Terjadi kesalahan server." },
      { status: 500 }
    );
  }
}