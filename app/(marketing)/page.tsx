import { Metadata } from "next";
import Link from "next/link";

import { routes } from "@/config/routes";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center pt-24">
      <div className="px- z-10 min-h-[50vh] w-full max-w-4xl xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-center font-heading text-4xl font-bold text-transparent opacity-0 drop-shadow-sm md:text-7xl/[6rem]"
          style={{ animationDelay: "0.20s", animationFillMode: "forwards" }}
        >
          All-in-one solution to kickstart your Next project
        </h1>
        <p
          className="animate-fade-up pt-14 text-center text-sm text-muted-foreground/80 opacity-0 md:text-lg"
          style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
        >
          Meteor is a comprehensive <b> kit</b> for building and launching
          modern web applications. It comes with 3 different templates to choose
          from.
        </p>
        <div className="flex flex-row justify-center gap-8 pt-8">
          <Link href={routes.main.signin}>
            <Button variant={"secondary"}>Explore Demo</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Meteor  - The ultimate Next.js  kit",
  description:
    "Meteor  is enterprise ready comprehensive Next.js  kit for building and launching modern web applications.",
};
