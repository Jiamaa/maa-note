"use client";

import { useRouter } from "next/navigation";
import { AppInput } from "@/components/input";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/home");
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-96 rounded-lg bg-white p-8 shadow-xl border-[#D9D9D9]">
        <h1 className="mb-6 text-center text-xl font-semibold text-gray-700">
          Login
        </h1>

        <div className="flex flex-col gap-4">
          <AppInput label="Username" placeholder="Username" />
          <AppInput
            label="Password"
            type="password"
            placeholder="Password"
          />

          <button
            style={{ backgroundColor: "#A1BC98" }}
            className="mt-2 w-full rounded-md py-2 text-sm font-medium text-white"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}