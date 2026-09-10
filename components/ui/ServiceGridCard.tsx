"use client";

import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

type Props = Readonly<{
  icon: string;
  title: string;
  points: string[];
}>;

export default function ServiceGridCard({ icon, title, points }: Props) {
  return (
    <div className="flex flex-col w-full h-full rounded-2xl border border-[#1A1A1A52] transition-all duration-300 hover:-translate-y-1 hover:border-[#5B805F] hover:shadow-[0px_12px_28px_0px_#00000014] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="flex flex-col flex-1 px-4 py-[33.5px]">
        <div className="relative w-12.5 h-12.5 mb-4 shrink-0">
          <Image
            src={icon}
            alt=""
            fill
            sizes="50px"
            className="object-contain"
          />
        </div>

        <h2 className="text-[#1C2A38] text-[20px] leading-[120%] font-semibold font-poppins mb-4">
          {title}
        </h2>

        <ul className="list-disc pl-5 mb-4 space-y-2">
          {points.map((point) => (
            <li
              key={point}
              className="text-[16px] font-body text-[#43586C] font-normal leading-[140%]"
            >
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <Link href="/More-services" className="block w-full">
            <Button
              style="secondary"
              type="button"
              css="w-full text-[#1A1A1A] text-[12px] leading-[100%]"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
