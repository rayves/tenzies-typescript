import { nanoid } from 'nanoid';
import { DieData } from './types';

export function generateRandomNumber(number: number): number {
  return Math.floor(Math.random() * number + 1);
}

export function generateNewDie(): DieData {
  return {
    id: nanoid(),
    value: generateRandomNumber(6),
    isHeld: false,
  };
}
