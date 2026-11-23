"use client";

import Link from "next/link";
import Button from "../ui/Button";

export default function HeroAbout() {
  return (
    <section className="bg-[#5B805F]">
      <div className="container mx-auto">
        <div className="pt-[259px] md:pt-[250px] pb-[86px]">
          <p className="font-semibold text-[16px] md:text-[18px] lg:text-[20px] leading-[100%] font-body text-[#FFAA02] mb-[8px] text-center">
            About Cairde Concierge
          </p>
          <h1 className="font-poppins text-[24px] md:text-[34px] lg:text-[49px] text-[#FFFFFF] text-center font-bold leading-[120%] mb-[16px]">
            Care that feels personal, not clinical.
          </h1>
          <p className="text-[16px] md:text-[24px] text-[#FFFFFF] text-center leading-[160%] font-body w-full max-w-full lg:max-w-[896px] mx-auto mb-[24px] md:mb-[32px]">
            Compassionate, personalised, non-medical support helping seniors
            live with dignity, comfort and joy while giving families real
            peace of mind.
          </p>
          <div className="flex flex-col items-center justify-center gap-[12px] sm:flex-row sm:gap-x-[10px]">
            <Link href="https://tidycal.com/cairdeconcierege/15-minute-meeting">
              <Button
                style="primary"
                type="button"
                css="w-full sm:w-[189px] h-[50px]"
              >
                Book a Consultation
              </Button>
            </Link>
            <Link href="/Services">
              <Button
                style="nobg"
                type="button"
                css="w-full sm:w-[189px] h-[50px]"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
          {/* <p className="mt-[20px] text-[14px] text-white/70 text-center font-body">
            Carer &amp; senior companionship
          </p> */}
        </div>
      </div>
    </section>
  );
}
