"use client";

import Image from "next/image";

const badges = [
  { title: "Non-Medical", text: "Practical lifestyle support." },
  { title: "Personalised", text: "Built around each individual." },
  { title: "Dublin Based", text: "Supporting local families." },
];

export default function SupportAbout() {
  return (
    <section>
      <div className="py-[103px] md:py-[122px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-x-[13px] md:grid-cols-[2fr_1fr]">
            <div>
              <h2 className="mb-[8px] font-body text-[14px] font-semibold leading-[120%] text-[#FFAA02] md:mb-[24px] md:text-[18px] lg:text-[20px]">
                Who We Are
              </h2>

              <p className="mb-[24px] font-poppins text-[24px] font-semibold leading-[120%] text-[#1C2A38] md:text-[28px] lg:text-[39px]">
                More than support. A trusted friend by your side.
              </p>

              <p className="mb-[16px] font-body text-[16px] leading-[160%] text-[#43586C] md:text-[18px] lg:text-[20px]">
                We are dedicated to providing compassionate, personalised,
                non-medical support that allows seniors to maintain their
                independence and quality of life while receiving the
                practical help they need.
              </p>

              <p className="font-body text-[16px] leading-[160%] text-[#43586C] md:text-[18px] lg:text-[20px]">
                In Irish, Cairde means friends and that single word defines
                our philosophy, our standards, and everything we do.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="h-[308px] w-full max-w-full overflow-hidden rounded-[24px] md:h-[461px]">
                <Image
                  src="/images/support-1.png"
                  width={500}
                  height={500}
                  className="h-full w-full rounded-[24px] object-cover object-top"
                  alt="A carer supporting an older woman at home"
                />
              </div>
            </div>
          </div>

          <div className="mt-[40px] grid grid-cols-1 gap-4 md:mt-[56px] md:grid-cols-3">
            {badges.map((badge) => (
              <div
                key={badge.title}
                className="rounded-[16px] border border-[#D2A449] bg-[#D2A44929] px-6 py-5"
              >
                <p className="font-poppins text-[18px] font-semibold leading-[120%] text-[#1C2A38] md:text-[20px]">
                  {badge.title}
                </p>
                <p className="mt-1 font-body text-[15px] leading-[150%] text-[#43586C] md:text-[16px]">
                  {badge.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
