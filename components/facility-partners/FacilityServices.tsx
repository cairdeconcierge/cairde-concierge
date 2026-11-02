"use client";

import { FacilityServices as services } from "@/utils/contents/FacilityPartners.content";
import Reveal from "../ui/Reveal";

export default function FacilityServices() {
  return (
    <section>
      <div className="py-[46px] md:py-[66px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-[896px] mx-auto">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 90}>
                <div className="w-full h-full rounded-[16px] md:rounded-[24px] border border-[#E6E8EC] bg-white p-6 md:p-8 shadow-[0px_12px_28px_0px_#00000014]">
                  <h2 className="text-[#1C2A38] text-[20px] md:text-[22px] font-poppins font-semibold leading-[120%] mb-[12px]">
                    {service.title}
                  </h2>
                  <p className="text-[#43586C] text-[16px] md:text-[18px] leading-[160%] font-body">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="text-center text-[#1C2A38] text-[16px] md:text-[18px] font-body font-semibold mt-[32px]">
            Facility rates from <span className="text-[#5B805F]">€40/hour</span>,
            tailored to your facility&apos;s schedule and volume of residents.
          </p>
        </div>
      </div>
    </section>
  );
}
