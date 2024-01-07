import { Metadata } from "next";

import Search from "./search";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : "";

  const papers =
    search &&
    (
      await fetch(
        `https://api.openalex.org/autocomplete/works?q=${search}`
      ).then((res) => res.json())
    ).results;

  return (
    <div className="h-full flex-1 flex-col space-y-8 pb-8 md:flex">
      <div className="flex flex-col items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">Important metrics at glance.</p>
        </div>
        <Search />
        {papers &&
          papers.map((paper: any, i: number) => (
            <div key={i}>{paper.display_name}</div>
          ))}
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Dashboard | Meteor ",
  description:
    "Meteor  is enterprise ready comprehensive Next.js  kit for building and launching modern web applications.",
};
