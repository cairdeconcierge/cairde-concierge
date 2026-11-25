
"use client";

import { navLinks } from "@/utils/contents/HomePage.content";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./ui/logo";
import Button from "./ui/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 h-[99px] w-full bg-white transition-all duration-300 ${
        scrolled
          ? "border-b-[0.5px] border-gray-100"
          : "border-b-[0.5px] border-transparent"
      }`}
    >
      <div className="container mx-auto h-full px-5 lg:px-6 xl:px-6">

        {/* DESKTOP NAVIGATION: XL AND ABOVE */}
        <div className="hidden h-full py-[29px] xl:grid xl:grid-cols-2">

          <nav className="flex items-center">
            <ul className="my-auto flex items-center gap-6 font-body text-[16px] font-normal">
              {navLinks?.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.router}
                    className="transition-opacity hover:opacity-70"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-1 items-center justify-between">
            <Logo />

            <Link href="https://app.acuityscheduling.com/schedule.php?owner=40896029&appointmentType=100642574">
              <Button
                style="danger"
                type="button"
                css="w-[146px] h-[50px]"
              >
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>

        {/* MOBILE / TABLET HEADER: BELOW XL */}
        <div className="flex h-full items-center justify-between xl:hidden">

          <Logo />

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <div className="flex w-6 flex-col gap-[5px]">
              <span
                className={`h-[2px] w-full bg-black transition-all duration-300 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />

              <span
                className={`h-[2px] w-full bg-black transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`h-[2px] w-full bg-black transition-all duration-300 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU: BELOW XL */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`fixed bottom-0 left-0 right-0 top-[99px] z-40 bg-white transition-all duration-300 xl:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-5 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="container mx-auto px-5 py-10">
          <ul className="flex flex-col gap-7 font-body text-[20px]">
            {navLinks?.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.router}
                  onClick={closeMenu}
                  tabIndex={menuOpen ? 0 : -1}
                  className="block transition-opacity hover:opacity-70"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Link
              href="https://app.acuityscheduling.com/schedule.php?owner=40896029&appointmentType=100642574"
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              <Button
                style="danger"
                type="button"
                css="h-[52px] w-full"
              >
                Book a Consultation
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
