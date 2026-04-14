import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const base = "px-4 py-2 rounded-md font-medium transition-all active:scale-95 disabled:opacity-50"
    const variants = {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      outline: "border border-gray-300 bg-transparent hover:bg-gray-50",
      ghost: "bg-transparent hover:bg-gray-100 text-gray-600"
    }

    return (
      <button ref={ref} className={`${base} ${variants[variant]} ${className}`} {...props} />
    )
  }
)