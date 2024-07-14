"use client";
import * as React from "react";

/**
 * @enum {string}
 */
const buttonVariants = {
  default: "bg-secondary text-white hover:text-secondary hover:bg-subColor",
  outline:
    "text-primary border border-secondary hover:bg-secondary hover:text-white",
  link: "text-primary hover:underline hover:bg-inherit",
};

/**
 * @enum {string}
 */
const sizeVariants = {
  default: "py-3 px-9",
  sm: "py-1 px-3",
  lg: "py-4 px-12",
  rounded: "w-16 h-16",
};

/**
 * @enum {string}
 */
const borderVariants = {
  default: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  round: "rounded-full",
};

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: keyof typeof buttonVariants;
    size?: keyof typeof sizeVariants;
    border?: keyof typeof borderVariants;
    block?: Boolean;
  }
>(
  /**
   * @param {{
   *   className: string,
   *   variant: keyof typeof buttonVariants,
   *   size: keyof typeof sizeVariants,
   *   border: keyof typeof borderVariants
   * }} props
   */ (
    {
      className,
      variant = "default",
      border = "default",
      size = "default",
      block = false,
      ...props
    },
    ref
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const button = e.currentTarget;

      const circle = document.createElement("span");

      button.appendChild(circle);
      setTimeout(function () {
        return circle.remove();
      }, 500);
    };

    return (
      <>
        <button
          className={`relative overflow-hidden inline-flex items-center justify-center 
        font-semibold transition-all
        ${buttonVariants[variant]} ${borderVariants[border]} 
        ${sizeVariants[size]} ${block && "w-full"} ${className}`}
          ref={ref}
          {...props}
          onClick={handleClick}
        />
      </>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
