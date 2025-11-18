"use client";

import { TopBar } from "./_components/TopBar";

const movies = [
  {
    id: 1,
    img: "/dearsanta.jpg",
    name: "Dear Santa",
    rate: "6.9",
  },
];

const HomePage = () => {
  return (
    <div>
      <TopBar />
      <div className="grid grid-cols-4"></div>
    </div>
  );
};

export default HomePage;
