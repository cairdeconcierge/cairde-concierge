import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/ui/Reveal";
import FacilityHero from "@/components/facility-partners/FacilityHero";
import FacilityServices from "@/components/facility-partners/FacilityServices";
import FacilityProcess from "@/components/facility-partners/FacilityProcess";
import FacilityWhy from "@/components/facility-partners/FacilityWhy";
import FacilityCTA from "@/components/facility-partners/FacilityCTA";
import { buildPageMetadata } from "@/utils/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Facility Partners",
  description: "An extra pair of hands for the residents who need it most.",
  path: "/Facility-partners",
});

export default function Page() {
  return (
    <>
      <Header />
      <Reveal><FacilityHero /></Reveal>
      <Reveal><FacilityServices /></Reveal>
      <Reveal><FacilityProcess /></Reveal>
      <FacilityWhy />
      <Reveal><FacilityCTA /></Reveal>
      <Footer />
    </>
  );
}
