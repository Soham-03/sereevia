type FounderCardProps = {
  name: string;
  role: string;
  bio: string;
  reverse?: boolean;
};

export default function FounderCard({ name, role, bio, reverse = false }: FounderCardProps) {
  return (
    <div className={`grid items-start gap-10 md:grid-cols-2 ${reverse ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1' : ''}`}>
      <div className="person-placeholder aspect-[4/5] w-full max-w-[320px]" data-label="PORTRAIT" />
      <div>
        <h3 className="section-subheading !text-[44px] !mb-2">{name}</h3>
        <div className="text-[22px] text-[#1d1d1d] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>{role}</div>
        <p className="body-copy">{bio}</p>
      </div>
    </div>
  );
}