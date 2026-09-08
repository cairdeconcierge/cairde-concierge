import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { signOut } from "../actions";
import { requireAdmin } from "@/utils/supabase/authz";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();

  return (
    <div className="min-h-screen bg-[#F5F5F4]">
      <header className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-[960px] mx-auto px-[24px] h-[64px] flex items-center justify-between">
          <div className="flex items-center gap-[20px]">
            <Link
              href="/"
              className="flex items-center gap-[6px] text-[14px] text-[#43586C] hover:text-[#1C2A38]"
            >
              <ArrowLeft size={16} />
              Back to site
            </Link>
            <Link href="/admin" className="font-semibold text-[#1C2A38]">
              Blog admin
            </Link>
          </div>
          <form action={signOut}>
            <button type="submit" className="text-[14px] text-[#43586C]">
              Sign out
            </button>
          </form>
        </div>
      </header>
      <main className="max-w-[960px] mx-auto px-[24px] py-[40px]">{children}</main>
    </div>
  );
}
