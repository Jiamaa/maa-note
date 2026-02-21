'use client';
import React from "react";
import { Button } from "@material-tailwind/react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	loading?: boolean;
};

const baseClassName =
  "rounded-full bg-[#A1BC98] text-white shadow-sm hover:opacity-90 transition-all duration-300";

const AppButton = ({ className, ...props }: Props) => {
	const mergedClassName = className
		? `${baseClassName} ${className}`
		: baseClassName;

	return <Button {...(props as React.ComponentProps<typeof Button>)} className={mergedClassName} />;
};

export default AppButton;
