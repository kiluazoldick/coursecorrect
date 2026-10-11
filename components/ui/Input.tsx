import { cn } from "@/lib/utils";
import { forwardRef, type InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...rest }, ref) => {
    const inputId = id || rest.name;
    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-[14px] font-medium text-[#413d4a] dark:text-[#cdc7d8]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full h-[48px] px-4 rounded-[8px] border bg-white dark:bg-[#1c1926] text-[15.5px] text-[#141219] dark:text-[#f3f0e9] placeholder:text-[#9a95a3] dark:placeholder:text-[#7a7488] transition-colors",
            "border-[#e6e1d6] dark:border-[#2c2836]",
            "focus:outline-none focus:border-[#7e55ff] dark:focus:border-[#9d80ff]",
            error && "border-red-500 dark:border-red-500",
            className,
          )}
          {...rest}
        />
        {error && <span className="text-[13px] text-red-500">{error}</span>}
      </div>
    );
  },
);

Input.displayName = "Input";
