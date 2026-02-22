import { validatePasswordStrength } from "@/lib/password";

export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResult {
  success: boolean;
  message?: string;
}

export async function loginService(payload: LoginPayload): Promise<LoginResult> {
  const { username, password } = payload;

  const passwordCheck = validatePasswordStrength(password);
  if (!passwordCheck.valid) {
    return { success: false, message: passwordCheck.message };
  }

  try {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    return {
      success: res.ok && data.success,
      message: data.message,
    };
  } catch {
    return { success: false, message: "Terjadi kesalahan. Coba lagi." };
  }
}