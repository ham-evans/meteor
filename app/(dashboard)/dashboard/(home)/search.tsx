"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "use-debounce";

import { Input } from "@/components/ui/input";

export default function Search() {
  const { push, refresh } = useRouter();
  const path = usePathname();

  const searchParams = useSearchParams();
  const initSearch = useSearchParams().get("search");

  // search params w/out the agency (and removing leading & if agency is removed)
  const params = searchParams
    .toString()
    .replace(`search=${initSearch?.replaceAll(" ", "+")}`, "")
    .replace(/^&+/, "");

  const initialRender = useRef(true);

  // could move mounted to a hook
  const [mounted, setMounted] = useState(false);
  const [searchValue, setSearchValue] = useState(initSearch || "");
  const [query] = useDebounce(searchValue, 500);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Search / params were getting wiped on hard reload (or page hit with params)
    if (!mounted) return;

    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    if (query)
      push(`${path ? path : ""}?search=${query}${params ? `&${params}` : ""}`);
    else {
      push(`${path}${params ? `?${params}` : ""}`);
      refresh();
    }
  }, [query, push, refresh, mounted, params, path]);

  useEffect(() => {
    if (!initSearch) {
      setSearchValue("");
    }
  }, [initSearch]);

  return (
    <Input
      className="overflow-visible"
      type="text"
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
      placeholder="Search Papers..."
    />
  );
}
