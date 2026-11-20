/**
 * Spinner tipis biru langit sesuai PRD:
 * Lingkaran tipis biru langit saat menunggu gambar/komponen muncul.
 */
export function Spinner({ size = "md", className = "" }) {
  const sizeMap = {
    sm: "w-5 h-5 border-2",
    md: "w-8 h-8 border-2.5",
    lg: "w-12 h-12 border-3",
  };

  return (
    <div
      className={`inline-block animate-spin rounded-full border-sky-500 border-t-transparent ${sizeMap[size] || sizeMap.md} ${className}`}
      role="status"
      aria-label="Memuat..."
    />
  );
}
