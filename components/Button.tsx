
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const variants = {
  primary: "bg-yellow-400 text-slate-950 hover:bg-yellow-300",
  secondary: "bg-[#103d68] text-white hover:bg-[#0a2e50]",
  outline: "border-2 border-white text-white hover:bg-white hover:text-[#103d68]",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const styles = `inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-bold transition duration-200 ${variants[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={styles}>{children}</Link>;
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}