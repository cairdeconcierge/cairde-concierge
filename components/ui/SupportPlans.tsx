"use client";

import Reveal from "./Reveal";
import Image from "next/image";

const supportPlans = [
  {
    icon: "/images/Icon-1.png",
    title: "Customised Support Plans",
    description:
      "We develop personalised support strategies tailored to the unique needs, preferences, and routines of each senior.",
  },
  {
    icon: "/images/Icon-2.png",
    title: "Flexible Scheduling",
    description:
      "We offer adaptable scheduling options, from a few hours a week to daily visits, to fit your family's lifestyle.",
  },
  {
    icon: "/images/Icon-3.png",
    title: "Garda vetted",
    description:
      "Every visit is with someone properly vetted, so families can feel at ease.",
  },
  {
    icon: "/images/Icon-4.png",
    title: "Fully insured",
    description:
      "Insured for the non-medical services we provide, clearly and transparently.",
  },
  {
    icon: "/images/Icon-5.png",
    title: "Works alongside careers",
    description:
      "Happy to complement existing home care or family support no overlap, no confusion.",
  },
];

export default function SupportPlans() {
  return (
   <section className="w-full max-w-full">
  <div className="grid w-full max-w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    {supportPlans.map((plan, index) => {
      const Icon = plan.icon;

      return (
        <Reveal key={plan.title} delay={Math.min(index, 5) * 80}>
          <div
            className="
              w-full
              max-w-full
             
              lg:w-[416px]
              h-full
              rounded-[16px]
              lg:rounded-[24px]
              border
              border-[#D9A63A]
              bg-[#FCFAF4]
              px-5
              py-5
              sm:px-6
              sm:py-6
              lg:px-8
              lg:py-[35px]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0px_12px_28px_0px_#00000014]
              motion-reduce:transition-none
              motion-reduce:hover:translate-y-0
            "
          >
            <div className="flex h-full flex-col gap-3 lg:gap-4">
              {/* Icon */}
              <Image
                src={plan.icon}
                alt=""
                className="
                  h-[40px]
                  w-[40px]
                  sm:h-[45px]
                  sm:w-[45px]
                  lg:h-[50px]
                  lg:w-[50px]
                  object-contain
                "
                width={500}
                height={500}
              />

              {/* Content */}
              <div>
                <h3
                  className="
                    mb-3
                    text-[18px]
                    sm:text-[20px]
                    lg:mb-[16px]
                    lg:text-[24px]
                    font-semibold
                    leading-[110%]
                    text-[#1C2A38]
                  "
                >
                  {plan.title}
                </h3>

                <p
                  className="
                    text-[15px]
                    sm:text-[16px]
                    lg:text-[18px]
                    font-normal
                    leading-[130%]
                    text-[#43586C]
                  "
                >
                  {plan.description}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      );
    })}
  </div>
</section>
  );
}