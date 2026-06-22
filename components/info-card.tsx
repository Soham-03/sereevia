type InfoCardProps = {
  title: string;
  text: string;
  icon: string;
  leftAccent?: boolean;
};

export default function InfoCard({ title, text, icon, leftAccent = false }: InfoCardProps) {
  return (
    <article className={`info-card ${leftAccent ? 'left-accent' : ''}`}>
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="small-link">VIEW MORE</div>
    </article>
  );
}