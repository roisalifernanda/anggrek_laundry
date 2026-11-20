/**
 * Re-usable Judul Section:
 * Sesuai PRD di setiap subhalaman:
 * "Judul Halaman dan satu kalimat pengantar."
 */
export function JudulSection({ judul, pengantar, badge }) {
  return (
    <section className="pt-10 pb-6 sm:pt-14 sm:pb-8 text-center max-w-3xl mx-auto px-4">
      {badge && (
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full mb-3">
          {badge}
        </span>
      )}
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
        {judul}
      </h1>
      {pengantar && (
        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
          {pengantar}
        </p>
      )}
    </section>
  );
}
