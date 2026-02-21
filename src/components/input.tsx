"use client";

import React from "react";
import clsx from "clsx";

interface AppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function AppInput({
  label,
  className,
  ...props
}: AppInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        {...props}
        className={clsx(
          "w-full rounded-md border border-gray-300 px-3 py-2 text-sm",
          "focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300",
          className
        )}
      />
    </div>
  );
}