interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export default function Card({ children, className = "", hover = false, glass = false }: CardProps) {
  return (
    <div
      className={`
        rounded-card p-6
        ${glass ? "glass" : "bg-sable-800 border border-sable-700"}
        ${hover ? "transition-all duration-200 hover:-translate-y-1 hover:border-primary-500 hover:shadow-card" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
