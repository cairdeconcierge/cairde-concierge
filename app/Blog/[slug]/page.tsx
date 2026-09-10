import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getBlogPostBySlug, getAllBlogSlugs, getAllBlogPosts } from "@/utils/supabase/queries";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/home/Banner";

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.meta_description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.meta_description,
      url: `/Blog/${post.slug}`,
      images: [{ url: post.image_url, alt: post.alt_text }],
      publishedTime: post.published_at,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.meta_description,
      images: [post.image_url],
    },
    alternates: {
      canonical: `/Blog/${post.slug}`,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([
    getBlogPostBySlug(slug),
    getAllBlogPosts(),
  ]);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.published_at).toLocaleDateString("en-IE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.meta_description,
    image: post.image_url,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Cairde Concierge",
    },
    datePublished: post.published_at,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `/Blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="pt-[140px] md:pt-[160px] pb-[80px]">
        {/* Hero image */}
        <div className="w-full h-[300px] md:h-[480px] relative overflow-hidden">
          <Image
            src={post.image_url}
            alt={post.alt_text}
            fill
            priority
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Article container */}
        <div className="container mx-auto px-4">
          <div className="max-w-[760px] mx-auto">
            {/* Back link */}
            <div className="mt-[40px] mb-[32px]">
              <Link
                href="/Blog"
                className="inline-flex items-center gap-2 text-[14px] font-body text-[#5B805F] hover:underline"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M10 12L6 8L10 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back to The Cairde Journal
              </Link>
            </div>

            {/* Title & meta */}
            <h1 className="font-poppins font-bold text-[28px] md:text-[40px] leading-[120%] text-[#1C2A38] mb-[16px]">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-[16px] text-[14px] font-body text-[#43586C] mb-[40px]">
              <span>{post.author}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.published_at}>{formattedDate}</time>
              <span aria-hidden="true">·</span>
              <span>{post.read_time}</span>
            </div>

            {/* Article body */}
            <article>
              {post.content.map((section, sectionIdx) => (
                <div key={sectionIdx} className="mb-[56px]">
                  {section.heading && (
                    <h2 className="font-poppins font-semibold text-[22px] md:text-[26px] leading-[130%] text-[#1C2A38] mb-[24px]">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs.map((para, paraIdx) => (
                    <p
                      key={paraIdx}
                      className="font-body text-[16px] md:text-[18px] leading-[185%] text-[#43586C] mb-[24px] last:mb-0"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </article>

            {/* Divider */}
            <hr className="border-[#E5E7EB] my-[48px]" />

            {/* CTA */}
            <div className="bg-[#5B805F0D] border border-[#5B805F33] rounded-[16px] p-[32px] text-center">
              <p className="font-poppins font-semibold text-[20px] text-[#1C2A38] mb-[8px]">
                Have questions about supporting a loved one in Dublin?
              </p>
              <p className="font-body text-[16px] text-[#43586C] mb-[24px]">
                Book a free, no-obligation consultation with our team.
              </p>
              <Link
                href="/Request-consultation"
                className="inline-flex items-center justify-center h-[48px] px-[32px] rounded-[99px] bg-[#5B805F] text-white text-[15px] font-body hover:bg-[#4a6a4e] transition-colors"
              >
                Get in touch
              </Link>
            </div>

            {/* Related posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-[64px]">
                <h2 className="font-poppins font-semibold text-[22px] text-[#1C2A38] mb-[24px]">
                  More from The Cairde Journal
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.id}
                      href={`/Blog/${related.slug}`}
                      className="flex flex-col rounded-[12px] border border-[#E5E7EB] bg-white overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div className="relative h-[180px]">
                        <Image
                          src={related.image_url}
                          alt={related.alt_text}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="p-[16px]">
                        <p className="font-poppins font-semibold text-[15px] leading-[130%] text-[#1C2A38] mb-[8px]">
                          {related.title}
                        </p>
                        <span className="text-[13px] font-body text-[#5B805F]">
                          Read article →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Banner />
      <Footer />
    </>
  );
}
