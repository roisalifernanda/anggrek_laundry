/**
 * Custom SVG Icons for Laundry specifics
 */
export function IronIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M4 17h16c1.1 0 2-.9 2-2 0-3.3-2.7-6-6-6H9.5C6.5 9 4 11.5 4 14.5V17z" />
      <path d="M4 14h16" />
      <path d="M7 9V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
      <circle cx="8" cy="12" r="0.5" fill="currentColor" />
      <circle cx="11" cy="12" r="0.5" fill="currentColor" />
    </svg>
  );
}
