import { DieData } from '../common/types';

interface DieProps {
  props: DieData;
}

export default function Die({ props }: DieProps) {
  return (
    <button className="die">
      <h2 className="die-number">{props.value}</h2>
    </button>
  );
}
