"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { target: 5000, prefix: "", suffix: "+", label: "Clans on the Waitlist" },
  { target: 50, prefix: "$", suffix: "B+", label: "Annual Gaming Cosmetics Market" },
  { target: 1484, prefix: "", suffix: "", label: "Year the College of Arms Was Founded" },
  { target: 0, prefix: "$", suffix: "", label: "Cost to Mint Your Blazon", display: "$0.01" },
];

export default function StatsBar() {
  return (
    <section className="py-12 md:py-16 bg-primary-600/[0.06]" aria-label="Statistics">
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              {stat.display ? (
                <div className="text-h1 md:text-display font-cinzel font-bold text-accent-500">
                  {stat.display}
                </div>
              ) : (
                <AnimatedCounter
                  target={stat.target}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className="text-h1 md:text-display"
                />
              )}
              <p className="text-caption text-sable-400 mt-2 font-inter">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
