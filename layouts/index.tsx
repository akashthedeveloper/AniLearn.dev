import Navbar from "@/components/Navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layouts({ children }: Props) {
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen fixed top-0 left-0 bg-white bg-square-pattern bg-pattern -z-50"></div>
      <main>{children}</main>
    </div>
  );
}
