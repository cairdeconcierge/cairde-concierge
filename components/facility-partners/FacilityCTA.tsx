"use client";

import Link from "next/link";
import Button from "../ui/Button";

export default function FacilityCTA() {
  return (
    <section className="bg-[#FDFBF7]">
      <div className="container mx-auto">
        <div className="py-[46px] md:py-[66px] text-center">
          <h2 className="text-[#1C2A38] text-[24px] md:text-[28px] lg:text-[32px] font-poppins font-semibold leading-[120%] mb-[16px]">
            Let&apos;s discuss a partnership
          </h2>
          <p className="text-[#43586C] text-[16px] md:text-[18px] leading-[160%] font-body max-w-[700px] mx-auto mb-[32px]">
            Whether it&apos;s a handful of residents or a facility-wide
            arrangement, we&apos;d love to talk through what would work for
            your team.
          </p>
          <div className="flex items-center justify-center">
            <Link href="/Request-consultation">
              <Button
                style="tertiary"
                type="button"
                css="w-full md:w-auto px-8 text-white"
              >
                Contact Us About a Facility Partnership
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
