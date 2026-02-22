"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppInput } from "@/components/input";
import DefaultNavbar from "@/components/navbar";
import { loginService } from "@/services/login";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    const result = await loginService({ username, password });

    if (!result.success) {
      setError(result.message || "Login gagal. Coba lagi.");
      setLoading(false);
      return;
    }

    router.push("/home");
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <DefaultNavbar />
      <div className="w-96 rounded-lg bg-white p-8 shadow-xl border-[#D9D9D9]">
        <h1 className="mb-6 text-center text-xl font-semibold text-gray-700">
          Login
        </h1>

        <div className="flex flex-col gap-4">
          <AppInput 
            label="Username" 
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <AppInput
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={ (e) => e.key === "Enter" && handleLogin()}
          />

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            style={{ backgroundColor: "#A1BC98" }}
            className="mt-2 w-full rounded-md py-2 text-sm font-medium text-white cursor-pointer disabled:cursor-not-allowed"
            onClick={handleLogin}
            disabled={loading}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}