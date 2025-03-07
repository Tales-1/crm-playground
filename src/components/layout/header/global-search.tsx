"use client";

import Form from "next/form"

export default function GlobalSearch() {
  return (
    <div className="max-w-[800px] w-[50%]">
      {/* On submission, the input value will be appended to 
            the URL, e.g. /search?query=abc */}

      <Form action={"/deals"} className="relative overflow-visible">
        <input
          name="query"
          placeholder="Search"
          className="bg-surface border text-sm px-3 py-[.3rem] w-full rounded-lg"
        />
        
      </Form>
    </div>
  );
}