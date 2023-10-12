"use client";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    console.log("Hello");
  }, []);
  return (
    <div className="h-screen flex justify-center items-center font-bold text-2xl">
      This is the about us page for this web site
    </div>
  );
}
