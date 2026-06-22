type DottedPatternProps = {
  className?: string;
};

export default function DottedPattern({ className = '' }: DottedPatternProps) {
  return <div className={`dot-pattern ${className}`} />;
}