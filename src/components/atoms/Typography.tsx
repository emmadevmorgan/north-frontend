export const Typography: React.FC<{ text: string; className?: string }> = ({ text, className }) => (
  <p className={className}>{text}</p>
);