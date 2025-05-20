"use client";
import AOS from "aos";
import { useEffect, useState } from "react";

import FloatingButton from "@/components/FloatButton";
import { AD } from "@/components/AD";
import { Header } from "@/components/Header";
import HowIAM from "@/components/HowIAM";
import { StackList } from "@/components/StackList";
import Specifications from "@/components/Specifications";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";

export default function Home() {
  const [activeButton, setActiveButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 700) setActiveButton(true);
    else setActiveButton(false);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {activeButton ? <FloatingButton onClick={scrollToTop} /> : <></>}
      <div className="flex min-h-screen w-full flex-col">
        <div>
          <AD />
          <Header />
        </div>
        <main className="w-full">
          <section className="relative isolate overflow-hidden px-6 py-0 sm:py-32 lg:px-8">
            <div className="animate__animated animate__fadeIn">
              <HowIAM />
            </div>
            {/* <Separator className="w-[full] mt-24 bg-gray-400" /> */}
            <div data-aos="fade-right">
              <StackList />
            </div>
            <div data-aos="fade-left">
              <Specifications />
            </div>
            <InfiniteMovingCardsDemo />
          </section>
        </main>
      </div>
    </div>
  );
}
