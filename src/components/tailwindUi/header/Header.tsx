/* eslint-disable @next/next/no-img-element */
"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { PhoneIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Company", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-colors duration-300 font-poppins font-light ${
        isScrolled ? "bg-white/95" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Global"
        className={`mx-auto flex items-center justify-between p-6 lg:px-8 ${
          isScrolled ? "text-slate-500" : "text-white"
        }`}
      >
        <div className="flex flex-1">
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
        </div>
        <a href="#" className="-m-1.5 p-1.5 flex items-center flex-col">
          <div className="">
            <span className="sr-only">Your Company</span>
            <img
              alt="logo"
              src={`${
                isScrolled ? "/favicon-c-dark.png" : "/favicon-c-white.png"
              }`}
              className="h-8 w-auto"
            />
          </div>
          <span className="text-[10px] mt-1x">par eXp</span>
        </a>
        <div className="flex flex-1 justify-end">
          <a
            href="tel:0631420045"
            className="sm:text-sm text-xs font-semibold leading-6 flex items-center"
          >
            <PhoneIcon className="sm:block hidden h-3 w-auto mr-2" />
            +33 6 31 42 00 45
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-1">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="/favicon-c-dark.png" className="h-8 w-auto" />
            </a>
            <div className="flex flex-1 justify-end">
              <a
                href="tel:0631420045"
                className="text-xs font-semibold leading-6 flex items-center"
              >
                +33 6 31 42 00 45
              </a>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
