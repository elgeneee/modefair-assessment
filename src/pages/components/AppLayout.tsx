// "use client";

// // import { cn } from "@/utils/cn";
// import { clsx } from "clsx";
// import React, { useState } from "react";

// interface Chip {
//   name: string;
//   img: string;
//   description: string;
//   points: string[];
// }
// export const AppLayout = ({
//   children,
// }: {
//   children?: React.ReactNode;
//   chip: Chip;
//   className?: string;
// }) => {
//   const { name, img, description, points } = chip;

//   return (
//     <div className="text-left">
//       <img src={img} alt={name} className="h-9 w-9" />

//       <div>
//         <p className="my-5 text-sm font-semibold">{name}</p>
//         <p className="text-sm">{description}</p>
//         {points.map((point, index) => (
//           <p key={index}>{point}</p>
//         ))}
//       </div>
//     </div>
//   );
// };
