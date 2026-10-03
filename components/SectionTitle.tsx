
type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
  align = "center",
}: SectionTitleProps) {
  return (
    <div className={`mb-10 ${align === "center" ? "mx-auto text-center" : "text-left"} max-w-3xl`}>
      {eyebrow && (
        <p className={`mb-3 text-xs font-extrabold uppercase tracking-[0.2em] ${light ? "text-yellow-400" : "text-[#0f766e]"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-[#103d68]"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-7 ${light ? "text-slate-300" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}