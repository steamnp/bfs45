import { useState } from "react";
import {
  generateId,
  getNewExpirationTime,
  thought,
  ITarget,
} from "./utils/utils";

type Props = {
  addThought: (thought: thought) => void;
};

type submitEvent = React.FormEvent;

export default function AddThoughtForm({ addThought }: Props) {
  const [text, setText] = useState("");
  const handleTextChange = ({ target }: ITarget) => {
    const { value } = target;
    setText(value);
  };
  const handleSubmit = (event: submitEvent) => {
    event.preventDefault();
    if (text.length) {
      const thought = {
        id: generateId(),
        text: text,
        expiresAt: getNewExpirationTime(),
      };
      addThought(thought);
      setText("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="AddThoughtForm">
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
