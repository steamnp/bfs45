import Button from "../component/button";
import Store from "./store";

function Home() {
  return (
    <div>
      <Button type="view-all">Home Button</Button>
      <Store />
      <Button type="remove">New Button</Button>
      <Button />
    </div>
  );
}

export default Home;
