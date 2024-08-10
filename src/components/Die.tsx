import { DieData } from '../common/types';

interface DieProps {
  dieProps: DieData;
  holdDie: (id: string) => void;
}

export default function Die({ dieProps, holdDie }: DieProps) {
  const styles = {
    backgroundColor: dieProps.isHeld ? '#59e391' : '#ffffff',
  };

  return (
    <button className="die" style={styles} onClick={() => holdDie(dieProps.id)}>
      <h2 className="die-number">{dieProps.value}</h2>
    </button>
  );
}
