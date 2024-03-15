import { useState } from "react";
import { generateId, getNewExpirationTime, thought } from "./utils/utils";
import AddThoughtForm from "./addThoughtForm";
import Thought from "./thought";

const App = () => {
  const [thoughts, setThoughts] = useState<thought[]>([
    {
      id: generateId(),
      text: "This is a place for your passing thoughts.",
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = (thought: thought): void => {
    setThoughts((thoughts) => [thought, ...thoughts]);
  };

  const removeThought = (thoughtIdToRemove: number): void => {
    setThoughts((thoughts) =>
      thoughts.filter((thought) => thought.id !== thoughtIdToRemove)
    );
  };

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>

      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought
              removeThought={removeThought}
              key={thought.id}
              thought={thought}
            />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default App;
