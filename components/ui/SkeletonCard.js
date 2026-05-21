import React from "react";

/**
 * SkeletonCard
 * A reusable, responsive, and configurable animated skeleton placeholder component.
 * 
 * Props:
 * - className: additional Tailwind classes to apply to the container
 * - height: custom height class (e.g. "h-32")
 * - rows: number of lines of pulse rows to render in default variant
 * - variant: "default" | "stat" | "list-item"
 */
const SkeletonCard = ({ className = "", height = "", rows = 2, variant = "default" }) => {
  const shimmer =
    "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent";

  if (variant === "stat") {
    return (
      <div
        className={`animate-pulse rounded-xl p-4 border border-gray-700/30 bg-gray-800/40 ${shimmer} ${className}`}
      >
        <div className="h-7 w-12 rounded bg-gray-700/60 mb-2 animate-pulse" />
        <div className="h-3 w-16 rounded bg-gray-700/40 animate-pulse" />
      </div>
    );
  }

  if (variant === "list-item") {
    return (
      <div
        className={`animate-pulse h-16 rounded-xl bg-gray-800/50 border border-gray-700/50 ${shimmer} ${className}`}
      />
    );
  }

  return (
    <div
      className={`animate-pulse bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 ${shimmer} ${height || "h-32"} ${className}`}
    >
      <div className="space-y-3 w-full">
        {Array.from({ length: rows }).map((_, idx) => {
          const widths = ["w-3/4", "w-1/2", "w-5/6", "w-2/3"];
          const widthClass = widths[idx % widths.length];
          return (
            <div
              key={idx}
              className={`h-4 bg-gray-700/50 rounded-lg ${widthClass} animate-pulse`}
            />
          );
        })}
      </div>
      <div className="h-3 bg-gray-700/30 rounded-lg w-1/3 mt-6 animate-pulse" />
    </div>
  );
};

export default SkeletonCard;