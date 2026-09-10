"use client";

import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

export default function ServiceSupport() {
  return (
    <section className="">
      <div className="py-[90px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[18px]">
            <div>
              <Image
                src="/images/Frame-1.png"
                width={500}
                height={500}
                alt="images of elders"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              {/* CHANGED: Responsive heading size */}
              <h1
                className="
      mb-5
      text-[30px]
      font-medium
      leading-[120%]
      font-poppin
      text-[#1C2A38]
      sm:text-[34px]
      md:mb-6
      md:text-[39px]
    "
              >
                Supporting the people behind your team
              </h1>

              {/* CHANGED: Removed conflicting text-[20px]
      and added responsive sizes */}
              <p
                className="
      mb-6
      text-[16px]
      font-normal
      leading-[160%]
      font-body
      text-[#1C2A38]
      sm:text-[16px]
      md:text-[18px]
    "
              >
                Caring responsibilities can affect employees in ways that
                aren&apos;t always visible at work. Cairde Concierge provides
                practical, non-medical senior support that can help employees
                better navigate the responsibilities of caring for ageing
                parents and loved ones.
              </p>

              {/* CHANGED: w-full on mobile, natural width on larger screens */}
              <div className="flex w-full items-start justify-start sm:w-auto">
                <Link href="/Corporate-eldercare">
                  <Button
                    style="reverse"
                    css="h-[50px] w-full sm:w-auto"
                    type="button"
                  >
                    Explore Corporate Elder Support
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
