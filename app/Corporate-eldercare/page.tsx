import type { Metadata } from "next";
import CorporateCTA from "@/components/corporate-eldercare/CorporateCTA";
import CorporateFamilies from "@/components/corporate-eldercare/CorporateFamilies";
import CorporateHero from "@/components/corporate-eldercare/CorporateHero";
import CorporateIntro from "@/components/corporate-eldercare/CorporateIntro";
import CorporatePartnership from "@/components/corporate-eldercare/CorporatePartnership";
import CorporateSeminar from "@/components/corporate-eldercare/CorporateSeminar";
import CorporateWhy from "@/components/corporate-eldercare/CorporateWhy";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/ui/Reveal";
import Banner from "@/components/home/Banner";
import Faq from "@/components/home/Faq";
import { buildPageMetadata } from "@/utils/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Corporate Elder Support",
  description:
    "Corporate eldersupport seminars and preferred-provider partnerships for HR, EAPs and Wellness Coordinators supporting Dublin's Sandwich Generation employees.",
  path: "/Corporate-eldercare",
});

export default function Page() {
  return (
    <>
      <Header />
      <Reveal><CorporateHero /></Reveal>
      <Reveal><CorporateIntro /></Reveal>
      <Reveal><CorporateSeminar /></Reveal>
      <Reveal><CorporatePartnership /></Reveal>
      <Reveal><CorporateCTA /></Reveal>
      <CorporateWhy />
      <CorporateFamilies />
      <Reveal><Faq /></Reveal>
      <Reveal><Banner /></Reveal>
      <Footer />
    </>
  );
}
