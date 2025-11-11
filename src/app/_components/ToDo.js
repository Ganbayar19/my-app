"use client";

import { Button } from "@/components/ui/button";
import { Card } from "./EmplooyeCard";
import { CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const tabs = ["All", "Completed", "Incompleted"];

export const ToDo = () => {
  const [value, setValue] = useState("");
  return (
    <div className="w-screen h-screen justify-center flex py-10">
      <Card className="w-[400px] h-fit ">
        <CardHeader>
          <h1>To-Do list</h1>
          <div className="flex gap-4">
            <Input
              className="flex-1"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            ></Input>
            <Button>Add</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex">
            {tabs.map((tab) => (
              <Button key={tab} variant="ghost" className="flex-1">
                {tab}
              </Button>
            ))}
          </div>

          <div className="flex flex-col"></div>
        </CardContent>
      </Card>
    </div>
  );
};
