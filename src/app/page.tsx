'use client';

import { useRouter } from "next/navigation";
import AppButton from "@/components/button";
import DefaultNavbar from "@/components/navbar";

export default function landingPage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <DefaultNavbar />
      <section className="text-center space-y-8">

        <h1
          className="text-[60px] font-normal"
          style={{ fontFamily: "var(--font-hedvig)" }}
        >
          Maa’s Notes
        </h1>

        <p
          className="text-[38px] font-normal"
          style={{ fontFamily: "var(--font-hedvig)" }}
        >
          Every Task, Every Note
        </p>

        <div className="pt-6">
          <AppButton className="px-10 py-3 text-lg cursor-pointer" onClick={handleLogin}>
            Login
          </AppButton>
        </div>

      </section>
    </main>
  );
}