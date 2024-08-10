interface DieProps {
  value: number;
}

export default function Die({ value }: DieProps) {
  return (
    <button className="die">
      <h2 className="die-number">{value}</h2>
    </button>
  );
}
