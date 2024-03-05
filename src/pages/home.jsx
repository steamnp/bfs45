import Button from "../component/button";
import Store from "./store";

function Home() {
  return (
    <div>
      <Button type="view--all">View all Button</Button>
      <Store />
      <Button type="remove">Remove Button</Button>
      <Button type="view">View Button</Button>
      <Button type="back">Back Button</Button>
      <Button type="get-started">Get Started Button</Button>
      <Button />
    </div>
  );
}

export default Home;
