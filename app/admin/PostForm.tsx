"use client";

import { useActionState, useState } from "react";
import Image from "next/image";
import { createSupabaseBrowserClient } from "@/utils/supabase/browser";
import type { BlogPost, BlogSection } from "@/utils/supabase/types";
import type { PostFormState } from "./actions";

function toDatetimeLocal(iso: string) {
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(
    d.getHours()
  )}:${pad(d.getMinutes())}`;
}

function splitIntoParagraphs(text: string): string[] {
  const sentences = text
    .match(/[^.!?]+[.!?]+(?:\s+|$)/g)
    ?.map((s) => s.trim())
    .filter(Boolean) ?? [text.trim()];

  const groups: string[] = [];
  let current = "";
  let sentenceCount = 0;

  for (const sentence of sentences) {
    const wouldOverflow = current.length + sentence.length > 220;
    if (current && (wouldOverflow || sentenceCount >= 2)) {
      groups.push(current);
      current = sentence;
      sentenceCount = 1;
    } else {
      current = current ? `${current} ${sentence}` : sentence;
      sentenceCount += 1;
    }
  }
  if (current) groups.push(current);

  return groups.length ? groups : [text];
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

type Props = {
  action: (state: PostFormState, formData: FormData) => Promise<PostFormState>;
  post?: BlogPost;
};

export default function PostForm({ action, post }: Props) {
  const [state, formAction, pending] = useActionState<PostFormState, FormData>(
    action,
    {}
  );

  const [title, setTitle] = useState(post?.title ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(!!post);
  const [imageUrl, setImageUrl] = useState(post?.image_url ?? "");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [sections, setSections] = useState<BlogSection[]>(
    post?.content?.length ? post.content : [{ heading: "", paragraphs: [""] }]
  );

  async function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setUploadError(null);

    const supabase = createSupabaseBrowserClient();
    const path = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;

    const { error } = await supabase.storage
      .from("blog-images")
      .upload(path, file, { upsert: false });

    if (error) {
      setUploadError(error.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage.from("blog-images").getPublicUrl(path);
    setImageUrl(data.publicUrl);
    setUploading(false);
  }

  function updateSection(index: number, patch: Partial<BlogSection>) {
    setSections((prev) =>
      prev.map((s, i) => (i === index ? { ...s, ...patch } : s))
    );
  }

  function updateParagraph(sectionIdx: number, paraIdx: number, value: string) {
    setSections((prev) =>
      prev.map((s, i) =>
        i === sectionIdx
          ? {
              ...s,
              paragraphs: s.paragraphs.map((p, j) => (j === paraIdx ? value : p)),
            }
          : s
      )
    );
  }

  function addParagraph(sectionIdx: number) {
    setSections((prev) =>
      prev.map((s, i) =>
        i === sectionIdx ? { ...s, paragraphs: [...s.paragraphs, ""] } : s
      )
    );
  }

  function removeParagraph(sectionIdx: number, paraIdx: number) {
    setSections((prev) =>
      prev.map((s, i) =>
        i === sectionIdx
          ? { ...s, paragraphs: s.paragraphs.filter((_, j) => j !== paraIdx) }
          : s
      )
    );
  }

  function splitParagraph(sectionIdx: number, paraIdx: number) {
    setSections((prev) =>
      prev.map((s, i) => {
        if (i !== sectionIdx) return s;
        const newParas = splitIntoParagraphs(s.paragraphs[paraIdx]);
        return {
          ...s,
          paragraphs: [
            ...s.paragraphs.slice(0, paraIdx),
            ...newParas,
            ...s.paragraphs.slice(paraIdx + 1),
          ],
        };
      })
    );
  }

  function addSection() {
    setSections((prev) => [...prev, { heading: "", paragraphs: [""] }]);
  }

  function removeSection(index: number) {
    setSections((prev) => prev.filter((_, i) => i !== index));
  }

  const inputClasses =
    "w-full h-[44px] rounded-[8px] border border-[#E5E7EB] px-[12px] outline-none focus:border-[#5B805F]";
  const labelClasses = "block text-[14px] font-medium text-[#1C2A38] mb-[6px]";

  return (
    <form
      action={formAction}
      className="max-w-[760px] space-y-[20px]"
      onSubmit={() => {
        // sections are serialized via the hidden field below on each render
      }}
    >
      <input type="hidden" name="image_url" value={imageUrl} />
      <input
        type="hidden"
        name="content_sections"
        value={JSON.stringify(sections)}
      />

      <div>
        <label className={labelClasses}>Title</label>
        <input
          name="title"
          required
          className={inputClasses}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (!slugTouched) setSlug(slugify(e.target.value));
          }}
        />
      </div>

      <div>
        <label className={labelClasses}>Slug</label>
        <input
          name="slug"
          required
          className={inputClasses}
          value={slug}
          onChange={(e) => {
            setSlugTouched(true);
            setSlug(e.target.value);
          }}
        />
      </div>

      <div>
        <label className={labelClasses}>Excerpt</label>
        <textarea
          name="excerpt"
          required
          rows={2}
          defaultValue={post?.excerpt}
          className={`${inputClasses} h-auto py-[10px]`}
        />
      </div>

      <div>
        <label className={labelClasses}>Cover image</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {uploading && (
          <p className="text-[13px] text-[#43586C] mt-[6px]">Uploading...</p>
        )}
        {uploadError && (
          <p className="text-[13px] text-[#D92D20] mt-[6px]">{uploadError}</p>
        )}
        {imageUrl && (
          <div className="relative mt-[10px] h-[160px] w-[280px] rounded-[8px] overflow-hidden border border-[#E5E7EB]">
            <Image src={imageUrl} alt="Cover preview" fill className="object-cover" />
          </div>
        )}
      </div>

      <div>
        <label className={labelClasses}>Image alt text</label>
        <input
          name="alt_text"
          required
          defaultValue={post?.alt_text}
          className={inputClasses}
        />
      </div>

      <div className="grid grid-cols-2 gap-[16px]">
        <div>
          <label className={labelClasses}>Author</label>
          <input
            name="author"
            defaultValue={post?.author ?? "Cairde Concierge"}
            className={inputClasses}
          />
        </div>
        <div>
          <label className={labelClasses}>Read time</label>
          <input
            name="read_time"
            placeholder="5 min read"
            defaultValue={post?.read_time}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label className={labelClasses}>
          Publish date &amp; time (future = scheduled)
        </label>
        <input
          type="datetime-local"
          name="published_at"
          required
          defaultValue={
            post ? toDatetimeLocal(post.published_at) : toDatetimeLocal(new Date().toISOString())
          }
          className={inputClasses}
        />
      </div>

      <div>
        <label className={labelClasses}>Keywords (comma separated)</label>
        <input
          name="keywords"
          defaultValue={post?.keywords?.join(", ")}
          className={inputClasses}
        />
      </div>

      <div>
        <label className={labelClasses}>Article content</label>
        <div className="space-y-[16px]">
          {sections.map((section, sIdx) => (
            <div
              key={sIdx}
              className="rounded-[8px] border border-[#E5E7EB] p-[16px] space-y-[10px]"
            >
              <div className="flex items-center gap-[8px]">
                <input
                  placeholder="Heading (optional)"
                  value={section.heading ?? ""}
                  onChange={(e) =>
                    updateSection(sIdx, { heading: e.target.value })
                  }
                  className={inputClasses}
                />
                <button
                  type="button"
                  onClick={() => removeSection(sIdx)}
                  className="shrink-0 text-[13px] text-[#D92D20]"
                >
                  Remove section
                </button>
              </div>

              {section.paragraphs.map((para, pIdx) => {
                const sentenceCount =
                  para.match(/[^.!?]+[.!?]+/g)?.length ?? 0;
                const isDense = sentenceCount > 2 || para.length > 220;

                return (
                  <div key={pIdx} className="space-y-[4px]">
                    <div className="flex items-start gap-[8px]">
                      <textarea
                        value={para}
                        onChange={(e) =>
                          updateParagraph(sIdx, pIdx, e.target.value)
                        }
                        rows={3}
                        className={`${inputClasses} h-auto py-[10px]`}
                      />
                      <button
                        type="button"
                        onClick={() => removeParagraph(sIdx, pIdx)}
                        className="shrink-0 text-[13px] text-[#D92D20]"
                      >
                        Remove
                      </button>
                    </div>
                    {isDense && (
                      <button
                        type="button"
                        onClick={() => splitParagraph(sIdx, pIdx)}
                        className="text-[12px] text-[#5B805F]"
                      >
                        This paragraph is dense — split into shorter paragraphs
                      </button>
                    )}
                  </div>
                );
              })}

              <button
                type="button"
                onClick={() => addParagraph(sIdx)}
                className="text-[13px] text-[#5B805F]"
              >
                + Add paragraph
              </button>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addSection}
          className="mt-[12px] text-[13px] text-[#5B805F]"
        >
          + Add section
        </button>
      </div>

      {state.error && (
        <p className="text-[14px] text-[#D92D20]">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={pending || uploading}
        className="h-[48px] px-[32px] rounded-[8px] bg-[#5B805F] text-white font-medium disabled:opacity-60"
      >
        {pending ? "Saving..." : "Save post"}
      </button>
    </form>
  );
}
