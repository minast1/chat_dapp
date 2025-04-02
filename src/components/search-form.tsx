"use client";

import React from "react";
import { Input } from "./ui/input";
import { Search, XIcon } from "lucide-react";
import { Button } from "./ui/button";

const SearchForm = () => {
  const [globalFilter, setGlobalFilter] = React.useState("");
  return (
    <form className="max-w-md mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Search className="w-5 h-5 text-primary dark:text-gray-400" />
        </div>

        <Input
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="h-11 rounded-4xl bg-secondary border-sedondary px-10 text-white"
          placeholder="Search user friends..."
          required
        />
        {globalFilter && (
          <Button
            type="button"
            variant="ghost"
            onClick={() => setGlobalFilter("")}
            className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center pe-3"
          >
            <XIcon className="w-4 h-4 text-gray-500 hover:text-gray-900" />
            <span className="sr-only">Clear</span>
          </Button>
        )}
      </div>
    </form>
  );
};

export default SearchForm;
