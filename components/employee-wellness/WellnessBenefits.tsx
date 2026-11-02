"use client";

import Image from "next/image";
import { WellnessBenefits as benefits } from "@/utils/contents/EmployeeWellness.content";
import Reveal from "../ui/Reveal";

export default function WellnessBenefits() {
  return (
    <section>
      <div className="py-[46px] md:py-[66px] lg:py-[75px]">
        <div className="container mx-auto">
          <h2 className="text-[#1C2A38] text-[28px] md:text-[34px] lg:text-[39px] font-poppins font-semibold leading-[120%] mb-[43px] text-center">
            Why offer Corporate Elder Support?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {benefits.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <div className="w-full h-full rounded-[16px] md:rounded-[24px] border-2 bg-[#D2A44929] border-[#D2A449] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_12px_28px_0px_#00000021] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <div className="px-5 py-7 sm:px-6 sm:py-8 md:px-8 md:py-[43px]">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px] mb-4 md:mb-[19px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain"
                        width={500}
                        height={500}
                      />
                    </div>
                    <h3 className="text-[#1C2A38] text-[20px] sm:text-[24px] md:text-[25px] leading-[120%] font-poppins font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[18px] text-[#43586C] leading-[160%] font-body">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
