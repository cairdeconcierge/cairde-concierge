import type { Metadata } from "next";
import {
  DM_Serif_Display,
  Manrope,
  Poppins,
} from "next/font/google";
import "./globals.css";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/utils/seo";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const DEFAULT_TITLE =
  "Senior Support & Companionship in Dublin | Cairde";
const DEFAULT_DESCRIPTION =
  "Compassionate non-medical senior support and companionship in Dublin, helping older adults stay independent, connected and confident.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  description: DEFAULT_DESCRIPTION,

  keywords: [
    "senior support Dublin",
    "senior care Dublin",
    "non-medical senior support Dublin",
    "elderly support Dublin",
    "elderly companionship Dublin",
    "senior companionship Dublin",
    "home support for seniors Dublin",
    "senior companion Dublin",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "/",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },

  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },

  alternates: {
    canonical: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  areaServed: {
    "@type": "City",
    name: "Dublin",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dublin",
    addressCountry: "IE",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en-IE"
      className={`
        ${dmSerifDisplay.variable}
        ${manrope.variable}
        ${poppins.variable}
        h-full
        antialiased
      `}
    >
      <body className="">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}