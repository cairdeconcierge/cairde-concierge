"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/utils/supabase/server";
import { requireAdmin } from "@/utils/supabase/authz";
import type { BlogSection } from "@/utils/supabase/types";

export type PostFormState = {
  error?: string;
};

function parseSections(raw: string): BlogSection[] {
  const parsed = JSON.parse(raw) as BlogSection[];
  return parsed
    .map((section) => ({
      heading: section.heading?.trim() || undefined,
      paragraphs: section.paragraphs
        .map((p) => p.trim())
        .filter((p) => p.length > 0),
    }))
    .filter((section) => section.paragraphs.length > 0);
}

function postPayloadFromForm(formData: FormData) {
  const keywords = String(formData.get("keywords") ?? "")
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);
  const excerpt = String(formData.get("excerpt") ?? "").trim();

  return {
    slug: String(formData.get("slug") ?? "").trim(),
    title: String(formData.get("title") ?? "").trim(),
    excerpt,
    image_url: String(formData.get("image_url") ?? "").trim(),
    alt_text: String(formData.get("alt_text") ?? "").trim(),
    author: String(formData.get("author") ?? "Cairde Concierge").trim(),
    published_at: new Date(String(formData.get("published_at"))).toISOString(),
    read_time: String(formData.get("read_time") ?? "").trim(),
    meta_description: excerpt,
    keywords,
    content: parseSections(String(formData.get("content_sections") ?? "[]")),
  };
}

export async function createPost(
  _prevState: PostFormState,
  formData: FormData
): Promise<PostFormState> {
  await requireAdmin();
  const supabase = await createSupabaseServerClient();
  const payload = postPayloadFromForm(formData);

  const { error } = await supabase.from("blog_posts").insert(payload);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/admin");
  revalidatePath("/Blog");
  redirect("/admin");
}

export async function updatePost(
  id: string,
  _prevState: PostFormState,
  formData: FormData
): Promise<PostFormState> {
  await requireAdmin();
  const supabase = await createSupabaseServerClient();
  const payload = postPayloadFromForm(formData);

  const { error } = await supabase
    .from("blog_posts")
    .update(payload)
    .eq("id", id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/admin");
  revalidatePath("/Blog");
  revalidatePath(`/Blog/${payload.slug}`);
  redirect("/admin");
}

export async function deletePost(id: string) {
  await requireAdmin();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("blog_posts").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin");
  revalidatePath("/Blog");
}

export async function signOut() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}
