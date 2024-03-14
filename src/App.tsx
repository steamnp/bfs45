import { useState } from "react";
import { generateId, getNewExpirationTime } from "./util";
import Thoughts from "./components/Thoughts";
import { Thought } from "./components/Thoughts";
import AddThoughtForm from "./components/AddThoughtForm";

function App() {
  const [thoughts, setThoughts] = useState([
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

  const addThought = (thought: Thought) => {
    setThoughts((thoughts) => [thought, ...thoughts]);
  };

  const removeThought = (thoughtIdToRemove: number) => {
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
            <Thoughts
              removeThought={removeThought}
              key={thought.id}
              thought={thought}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
