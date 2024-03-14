import { useState, ChangeEvent, FormEvent } from "react";
import { generateId, getNewExpirationTime } from "./utils/utils";
import { AddThoughtFormProps, Thought } from "../types";

export function AddThoughtForm(props: AddThoughtFormProps) {
  const [text, setText] = useState<string>("");

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setText(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text.length) {
      const thought: Thought = {
        id: generateId(),
        text: text,
        expiresAt: getNewExpirationTime(),
      };
      props.addThought(thought);
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
