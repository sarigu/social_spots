interface ContainerProps {
  children: React.ReactNode;
  spacing?: "none" | "default" | "large";
  maxWidth?: "default" | "large";
  className?: string;
}

export default function Container({
  children,
  spacing = "default",
  maxWidth = "default",
  className,
}: ContainerProps) {

  const spacingClasses =
  spacing === "large"
    ? "px-8 md:px-16 py-12 md:py-20"
    : spacing === "none" ? "px-0 py-0"
    : "px-4 md:px-8 py-6 md:py-10";

  const widthClasses =
    maxWidth === "large"
      ? "max-w-7xl"
      : "max-w-5xl";

  return (
    <div className={`w-full ${widthClasses} mx-auto ${spacingClasses} ${className ? className : ""}`}>
      {children}
    </div>
  );
}
