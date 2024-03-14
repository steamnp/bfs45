import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import { generateId, getNewExpirationTime } from "../../util";
import { Thought } from "../Thoughts";

type AddFormProps = {
  addThought: (thought: Thought) => void;
};

function AddThoughtForm(props: AddFormProps) {
  const [text, setText] = useState("");

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  };

  const handleSubmit: FormEventHandler = (event: FormEvent) => {
    event.preventDefault();
    if (text.length) {
      const thought = {
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

export default AddThoughtForm;
