const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  return <div className={`p-4 ${className ?? ""}`}>{children}</div>;
};

export default Card;
