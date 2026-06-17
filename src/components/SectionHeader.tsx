interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

export default function SectionHeader({ title, subtitle, icon }: SectionHeaderProps) {
  return (
    <div className="text-center mb-10 md:mb-14">
      {icon && (
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-lake-100 text-lake-600 mb-4">
          {icon}
        </div>
      )}
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-500 text-sm md:text-base max-w-lg mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="w-8 h-1 rounded-full bg-lake-400"></span>
        <span className="w-2 h-2 rounded-full bg-lake-300"></span>
        <span className="w-8 h-1 rounded-full bg-lake-400"></span>
      </div>
    </div>
  );
}
