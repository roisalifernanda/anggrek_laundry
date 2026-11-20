/**
 * Reusable Card Component.
 * Tampilan bersih, kontur halus, dan micro-interaction naik 2px saat kursor mendekat.
 */
export function Card({
  children,
  className = "",
  hover = true,
  padding = "p-6",
  bordered = true,
  ...props
}) {
  return (
    <div
      className={`bg-white rounded-xl ${
        bordered ? "border border-slate-200/80" : ""
      } ${
        hover
          ? "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-slate-300/80"
          : ""
      } ${padding} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
