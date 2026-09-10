import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/utils/supabase/queries";
import { SITE_URL } from "@/utils/seo";

const STATIC_ROUTES = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/Aboutus", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/Services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/More-services", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/Pricing", priority: 0.7, changeFrequency: "monthly" as const },
  {
    path: "/Corporate-eldercare",
    priority: 0.6,
    changeFrequency: "monthly" as const,
  },
  { path: "/Blog", priority: 0.8, changeFrequency: "daily" as const },
  {
    path: "/Request-consultation",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllBlogPosts();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.published_at),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
