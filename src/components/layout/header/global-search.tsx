"use client";

import Form from "next/form"
import { useReducer } from "react";

export default function GlobalSearch() {
  const [suggestions, toggleSuggestions] = useReducer((prev) => !prev, false);

  return (
    <div className="max-w-[800px] w-[50%]">
      {/* On submission, the input value will be appended to 
            the URL, e.g. /search?query=abc */}

      <Form action={"/deals"} className="relative overflow-visible">
        <input
          name="query"
          placeholder="Search"
          className="border text-sm px-3 py-[.3rem] w-full rounded-lg"
          onFocus={toggleSuggestions}
          onBlur={toggleSuggestions}
        />
        
      </Form>
    </div>
  );
}

const MODULES = {
    deal: "deal",
    organisation:"organisation",
    people:"people",
    product:"product",
    general:"general"
}

type SearchResultItem = {
    module:"deal" | "organisation" | "people" | "product" | "general";
    link:string;
    description:string;
}

