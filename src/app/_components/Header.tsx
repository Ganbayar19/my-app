"use client";

import { useEffect, useState } from "react";

type HeaderProps = {
  id: number;
  image: string;
  title: string;
  rate: string;
  desc: string;
};

// export default function HeaderBanner() {
//   const [index, setIndex] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % banner.lenght);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);
// }

export const Header = (props: HeaderProps) => {
  return (
    <div>
      <img src={props.image} />
      <div>{props.title}</div>
    </div>
  );
};
