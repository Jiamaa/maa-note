export interface VerifyResult {
  success: boolean;
  username?: string;
}

export interface LogoutResult {
  success: boolean;
}

export async function verifyService(): Promise<VerifyResult> {
  try {
    const res = await fetch("/api/auth/verify");
    const data = await res.json();
    return {
      success: data.success,
      username: data.username,
    };
  } catch {
    return { success: false };
  }
}

export async function logoutService(): Promise<LogoutResult> {
  try {
    const res = await fetch("/api/auth/logout", { method: "POST" });
    const data = await res.json();
    return { success: data.success };
  } catch {
    return { success: false };
  }
}