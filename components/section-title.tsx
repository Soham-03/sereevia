type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-10 text-center">
      <h2 className="section-heading">{title}</h2>
      {subtitle ? <p className="body-copy max-w-[820px] mx-auto mt-4">{subtitle}</p> : null}
    </div>
  );
}