"use client";
import { ChevronDown, Search, Moon, Badge } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export const TopBar = () => {
  return (
    <div className="w-full bg-white py-3 px-6 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-semibold text-[#4338CA]">Movie-Z</h1>
        <div className="flex items-center gap-1 cursor-pointer px-3 py-3 border rounded-lg hover:bg-gray-50">
          <span className="text-sm text-[#18181B]">Genre</span>
          <ChevronDown size={16} />
        </div>
      </div>
      <div className="flex gap-2 w-[379px] items-center justify-center">
        <input type="text" placeholder="search..." className="w-full" />
        <Button variant="outline" className="px-3">
          <Search size={18} />
        </Button>
        <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer">
          <Moon size={18} className="text-gray-700" />
        </div>
      </div>
    </div>
  );
};
