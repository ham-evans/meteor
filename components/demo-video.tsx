"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

export function DemoVideoSection() {
  const { resolvedTheme } = useTheme();

  return (
    <div>
      <div>
        <Image
          src={
            resolvedTheme && resolvedTheme === "light"
              ? "/white.webp"
              : "/dark.webp"
          }
          alt="Meteor "
          width={1204}
          height={900}
        />
      </div>
    </div>
  );
}
