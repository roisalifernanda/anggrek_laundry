import { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Accordion Component untuk FAQ.
 * Bisa membuka satu per satu secara independen atau terkelola.
 */
export function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="space-y-3 w-full">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={item.id || idx}
            className={`border rounded-xl transition-all duration-200 overflow-hidden bg-white ${
              isOpen
                ? "border-sky-300 shadow-xs ring-1 ring-sky-100"
                : "border-slate-200/80 hover:border-slate-300"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between p-5 text-left font-medium text-slate-800 hover:text-sky-700 transition-colors cursor-pointer select-none"
              aria-expanded={isOpen}
            >
              <span className="text-base pr-4 font-semibold text-slate-800">
                {item.tanya}
              </span>
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                  isOpen ? "bg-sky-100 text-sky-700 rotate-180" : "bg-slate-100 text-slate-500"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                {item.jawab}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
