"use client";

// import { cn } from "@/utils/cn";
import { clsx } from "clsx";
import React, { useState } from "react";

interface Chip {
  name: string;
  img: string;
  description: string;
  points: string[];
}
export const ConfigureCard = ({
  children,
  chip,
  className,
}: {
  children?: React.ReactNode;
  chip: Chip;
  className?: string;
}) => {
  const { name, img, description, points } = chip;

  return (
    <div className="text-left">
      <img src={img} alt={name} className="h-9 w-9" />

      <div>
        <p className="my-5 text-sm font-semibold">{name}</p>
        <p className="text-sm">{description}</p>
        <ul className="ml-4 mt-4 list-disc space-y-3 text-sm">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
