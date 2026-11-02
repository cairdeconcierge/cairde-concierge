"use client";

import { FacilityProcessSteps } from "@/utils/contents/FacilityPartners.content";
import Reveal from "../ui/Reveal";

export default function FacilityProcess() {
  return (
    <section className="bg-[#FDFBF7]">
      <div className="py-[46px] md:py-[66px] lg:py-[75px]">
        <div className="container mx-auto">
          <p className="text-[#5B805F] text-[14px] md:text-[16px] font-body font-semibold text-center mb-[8px]">
            How it works
          </p>
          <h2 className="text-[#1C2A38] text-[28px] md:text-[34px] lg:text-[39px] font-poppins font-semibold leading-[120%] mb-[43px] text-center">
            A simple, structured partnership
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 max-w-[1100px] mx-auto">
            {FacilityProcessSteps.map((item, index) => (
              <Reveal key={item.step} delay={index * 90}>
                <div className="w-full h-full rounded-[16px] md:rounded-[24px] border border-[#E6E8EC] bg-white p-6 md:p-8 shadow-[0px_12px_28px_0px_#00000014]">
                  <div className="w-[40px] h-[40px] rounded-full bg-[#5B805F] flex items-center justify-center mb-[16px]">
                    <span className="text-white font-poppins font-bold text-[16px]">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-[#1C2A38] text-[18px] md:text-[20px] font-poppins font-semibold leading-[120%] mb-[10px]">
                    {item.title}
                  </h3>
                  <p className="text-[#43586C] text-[15px] md:text-[16px] leading-[160%] font-body">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
