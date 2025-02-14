"use client"; // Marks this file as a client component

import Footer from "@/components/footer";
import Header1 from "@/components/header";
import { usePathname } from "next/navigation";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Hide header and footer on login and about-us pages
  const hideHeader = pathname === "/login" || pathname === "/about-us";
  const hideFooter = pathname === "/login";

  return (
    <>
      {!hideHeader && <Header1 />}
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}
