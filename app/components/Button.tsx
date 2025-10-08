"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils"; // Utility for merging classNames (we’ll define below)
import { motion } from "framer-motion";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-2xl font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.97]",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-700 text-white hover:bg-blue-500 cursor-pointer focus:ring-blue-500",
        secondary:
          "bg-green-700 text-white hover:bg-green-500 focus:ring-green-500 shadow-md cursor-pointer shadow-black",
        outline:
          "border border-blue-600 text-blue-600 hover:bg-blue-50 cursor-pointer focus:ring-blue-500",
        ghost:
          "text-gray-700 hover:bg-gray-100 cursor-pointer focus:ring-gray-300",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <motion.button
        whileHover={{ scale: 1.05, y: -1 }}
        whileTap={{ scale: 0.98 }}
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
