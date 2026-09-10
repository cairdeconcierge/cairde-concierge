import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/ui/Reveal";
import Banner from "@/components/home/Banner";
import Journey from "@/components/home/Journey";
import MoreServicesSection from "@/components/MoreServices/MoreServicesSection";
import { buildPageMetadata } from "@/utils/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "More Services",
  description:
    "Explore the full range of non-medical senior support services Cairde Concierge offers Dublin families companionship, errands, appointments, and more.",
  path: "/More-services",
});

export default function MoreServices(){
    return (
        <>
        <Header />
        <MoreServicesSection />
        <Reveal><Journey /></Reveal>
        <Reveal><Banner /></Reveal>
        <Footer />
        </>
    )
}