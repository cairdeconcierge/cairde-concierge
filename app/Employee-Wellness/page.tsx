import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/ui/Reveal";
import WellnessHero from "@/components/employee-wellness/WellnessHero";
import WellnessIntro from "@/components/employee-wellness/WellnessIntro";
import WellnessSeminar from "@/components/employee-wellness/WellnessSeminar";
import WellnessPartnership from "@/components/employee-wellness/WellnessPartnership";
import WellnessCTA from "@/components/employee-wellness/WellnessCTA";
import WellnessBenefits from "@/components/employee-wellness/WellnessBenefits";
import { buildPageMetadata } from "@/utils/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Employee Wellness",
  description:
    "Corporate eldercare seminars and preferred-provider partnerships for HR, EAPs and Wellness Coordinators supporting Dublin's Sandwich Generation employees.",
  path: "/Employee-Wellness",
});

export default function Page() {
  return (
    <>
      <Header />
      <Reveal><WellnessHero /></Reveal>
      <Reveal><WellnessIntro /></Reveal>
      <Reveal><WellnessSeminar /></Reveal>
      <Reveal><WellnessPartnership /></Reveal>
      <Reveal><WellnessCTA /></Reveal>
      {/* <WellnessBenefits /> */}
      <Footer />
    </>
  );
}
