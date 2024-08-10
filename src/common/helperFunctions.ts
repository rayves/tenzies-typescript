import { nanoid } from 'nanoid';

export function generateRandomNumber(number: number) {
  return Math.floor(Math.random() * number + 1);
}

export function generateNewDie() {
  return {
    id: nanoid(),
    value: generateRandomNumber(6),
    isHeld: false,
  };
}
