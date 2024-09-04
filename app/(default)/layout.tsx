"use client";

import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });

    // Hide the preloader after AOS is initialized
    setLoading(false);
  }, []);

  return (
    <>
      {loading && (
        <div className="flex justify-center items-center fixed inset-0 bg-white z-50">
          <div className="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin"></div>
        </div>
      )}

      <Header />

      <main className="grow">{children}</main>

      {/* <Footer border={true} /> */}
    </>
  );
}
