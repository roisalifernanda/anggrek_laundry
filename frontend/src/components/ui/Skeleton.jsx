/**
 * Skeleton Loader:
 * Kotak abu-abu muda yang berdenyut pelan saat konten belum selesai dimuat.
 */
export function Skeleton({ className = "", rounded = "rounded-lg" }) {
  return (
    <div
      className={`bg-slate-200/80 animate-pulse ${rounded} ${className}`}
      aria-hidden="true"
    />
  );
}
