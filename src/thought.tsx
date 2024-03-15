import { useEffect } from "react";
import { thought } from "./utils/utils";

type Props = {
  thought: thought;
  removeThought: (thoughtIdToRemove: number) => void;
};

export default function Thought({ thought, removeThought }: Props) {
  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  useEffect(() => {
    const timesUp = setTimeout(() => {
      removeThought(thought.id);
    }, thought.expiresAt - Date.now());

    return () => {
      clearTimeout(timesUp);
    };
  }, [thought]);

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
