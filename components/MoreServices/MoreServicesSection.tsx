import { moreServices } from "@/utils/contents/HomePage.content";
import Image from "next/image";
import Reveal from "../ui/Reveal";


export default function MoreServices() {
  return (
    <section>
      <div className="pt-[133px] md:pt-[174px]">
        <div className="container mx-auto">
          <div className="flex flex-col gap-y-[50px] md:gap-y-[70px] lg:gap-y-[87px]">
            {moreServices.map((service, index) => {
              const isReversed = index % 2 === 1;

              return (
                <Reveal key={service.id}>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-[16px] lg:gap-x-[40px] gap-y-[16px] items-center"
                >
                  <h2 className="font-poppins text-[24px] leading-[120%] text-[#1C2A38] font-semibold lg:hidden md:col-span-2">
                    {service.title}
                  </h2>

                  <div
                    className={`relative w-full h-[265px] md:h-[349px] rounded-[18px] overflow-hidden ${
                      isReversed ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  </div>

                  <div className={isReversed ? "md:order-1" : "md:order-2"}>
                    <h2 className="font-poppins text-[24px] md:text-[28px] lg:text-[39px] leading-[120%] text-[#1C2A38] font-semibold mb-[16px] hidden lg:block">
                      {service.title}
                    </h2>
                    <p className="font-body text-[16px] md:text-[18px] lg:text-[20px] leading-[150%] text-[#43586C]">
                      {service.text}
                    </p>
                  </div>
                </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}