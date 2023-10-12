"use client";

import { ReactElement, useState } from "react";

interface CensoredProps {
  children: ReactElement;
}
export default function Censored({ children }: CensoredProps) {
  const [isBlur, setIsBlur] = useState(false);
  return (
    <button className={isBlur ? "blur" : ""} onClick={() => setIsBlur(!isBlur)}>
      {children}
    </button>
  );
}
