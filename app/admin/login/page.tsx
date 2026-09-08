"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { createSupabaseBrowserClient } from "@/utils/supabase/browser";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createSupabaseBrowserClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    if (data.user?.app_metadata?.role !== "admin") {
      await supabase.auth.signOut();
      setError("This account does not have admin access.");
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5F4] px-4">
      <Link
        href="/"
        className="w-full max-w-[360px] flex items-center gap-[6px] text-[14px] text-[#43586C] hover:text-[#1C2A38] mb-[16px]"
      >
        <ArrowLeft size={16} />
        Back to site
      </Link>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[360px] bg-white rounded-[16px] border border-[#E5E7EB] p-[32px]"
      >
        <h1 className="font-semibold text-[20px] text-[#1C2A38] mb-[24px]">
          Admin sign in
        </h1>

        <label className="block text-[14px] font-medium text-[#1C2A38] mb-[6px]">
          Email
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-[44px] rounded-[8px] border border-[#E5E7EB] px-[12px] mb-[16px] outline-none focus:border-[#5B805F]"
        />

        <label className="block text-[14px] font-medium text-[#1C2A38] mb-[6px]">
          Password
        </label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-[44px] rounded-[8px] border border-[#E5E7EB] px-[12px] mb-[16px] outline-none focus:border-[#5B805F]"
        />

        {error && (
          <p className="text-[13px] text-[#D92D20] mb-[16px]">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full h-[44px] rounded-[8px] bg-[#5B805F] text-white font-medium disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}
