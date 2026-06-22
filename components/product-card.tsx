type ProductCardProps = {
  name: string;
};

export default function ProductCard({ name }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="thumb product-placeholder" data-label="PRODUCT" />
      <div className="label">
        <span>{name}</span>
        <div className="rating-dots">
          <span /><span /><span /><span />
        </div>
      </div>
    </article>
  );
}