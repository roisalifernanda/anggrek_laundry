import { useState } from "react";
import { Loader2 } from "lucide-react";

/**
 * Reusable Button Component.
 * Mendukung varian: primary, whatsapp, secondary, outline, ghost.
 * Mendukung loader animasi saat diklik untuk aksi WhatsApp.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconRight: IconRight,
  isLoading = false,
  loadingText,
  className = "",
  onClick,
  href,
  target,
  rel,
  ...props
}) {
  const [internalLoading, setInternalLoading] = useState(false);

  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2.5 gap-2",
    lg: "text-base px-6 py-3 gap-2.5",
    xl: "text-lg px-7 py-3.5 gap-3 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-sky-600 text-white hover:bg-sky-700 hover:-translate-y-0.5 hover:shadow-md focus:ring-sky-500 shadow-sm",
    whatsapp:
      "bg-emerald-600 text-white hover:bg-emerald-700 hover:-translate-y-0.5 hover:shadow-md focus:ring-emerald-500 shadow-sm",
    secondary:
      "bg-sky-50 text-sky-800 hover:bg-sky-100 hover:-translate-y-0.5 focus:ring-sky-400 border border-sky-100",
    outline:
      "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5 focus:ring-slate-400 shadow-xs",
    ghost:
      "text-slate-600 hover:text-sky-600 hover:bg-sky-50/60 focus:ring-sky-300",
  };

  const currentLoading = isLoading || internalLoading;
  const currentText = currentLoading && loadingText ? loadingText : children;

  const handleClick = (e) => {
    if (currentLoading) {
      e.preventDefault();
      return;
    }
    if (variant === "whatsapp" && !onClick) {
      setInternalLoading(true);
      setTimeout(() => setInternalLoading(false), 1200);
    }
    if (onClick) {
      onClick(e);
    }
  };

  const content = (
    <>
      {currentLoading ? (
        <Loader2 className="w-4 h-4 animate-spin shrink-0 text-current" />
      ) : Icon ? (
        <Icon className="w-4 h-4 shrink-0 text-current" />
      ) : null}
      <span>{currentText}</span>
      {!currentLoading && IconRight && (
        <IconRight className="w-4 h-4 shrink-0 text-current" />
      )}
    </>
  );

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        className={combinedClass}
        onClick={handleClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={combinedClass}
      disabled={currentLoading || props.disabled}
      onClick={handleClick}
      {...props}
    >
      {content}
    </button>
  );
}
