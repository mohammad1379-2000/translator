"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import * as React from "react";
import { useEffect, useState } from "react";

export const Logo = ({ className }: { className?: string }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (theme === "dark") {
    return (
      <Image
        className={className}
        src={"/icon/logoDark.png"}
        alt={"logo"}
        width={181}
        height={81}
      />
    );
  } else {
    return (
      <Image
        className={className}
        src={"/icon/logoLight.png"}
        alt={"logo"}
        width={181}
        height={81}
      />
    );
  }
};
