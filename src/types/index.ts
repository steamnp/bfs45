export type Thought = {
  id: number;
  text: string;
  expiresAt: number;
};

export type ThoughtProps = {
  thought: Thought;
  removeThought: (id: number) => void;
};

export interface AddThoughtFormProps {
  addThought: (thought: Thought) => void;
}
