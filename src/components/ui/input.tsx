"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ReactNode, useState } from "react"
import { EyeIcon, EyeOffIcon } from "lucide-react";


export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const inputType = showPassword ? "text" : "password";

    return (
      <div className="relative">
        <input
          type={inputType}
          className={cn(
            "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
            className
          )}
          ref={ref}
          {...props}
        />
        {icon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            {showPassword ? (
              <EyeOffIcon className="h-5 w-5 text-gray-400 cursor-pointer" onClick={togglePasswordVisibility} />
            ) : (
              <EyeIcon className="h-5 w-5 text-gray-400 cursor-pointer" onClick={togglePasswordVisibility} />
            )}
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }