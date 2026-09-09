"use client";
import { Families } from "@/utils/contents/Corporate.content";
import Reveal from "../ui/Reveal";

export default function CorporateFamilies() {
  return (
    <section>
      <div>
        <div className="py-[46px] md:py-[66px] lg:py-[75px]">
          <div className="container mx-auto">
            <h1 className="text-[#1C2A38] text-[39px] font-poppins font-semibold leading-[120%] mb-[43px] text-center">
              Why Families Choose Cairde Concierge
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
              {Families.map((item, index) => (
                <Reveal key={item.title} delay={index * 90}>
                <div
                  className="w-full max-w-full md:max-w-full h-full rounded-[16px] md:rounded-[24px] border-[2px] bg-[#D2A44929] border-[#D2A449] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_12px_28px_0px_#00000021] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <div className="px-[32px] py-[43px]">
                    {/* Icon */}
                    <div className="w-[50px] h-[50px] mb-[19px]">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Title */}
                    <h2 className="text-[#1C2A38] text-[20px] md:text-[25px] leading-[120%] font-poppins font-semibold mb-[16px]">
                      {item.title}
                    </h2>

                    {/* Description */}
                    <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#43586C] leading-[160%]">
                      {item.text}
                    </p>
                  </div>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
