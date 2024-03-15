export function getNewExpirationTime() {
  return Date.now() + 15 * 1000;
}

let nextId: number = 0;

export function generateId() {
  const result = nextId;
  nextId += 1;
  return result;
}

export interface thought {
  id: number;
  text: string;
  expiresAt: number;
}

interface Target {
  value: string;
}

export interface ITarget {
  target: Target;
}
