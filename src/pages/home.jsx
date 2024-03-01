import Button from "../component/button";

function Home() {
  return (
    <div>
      <Button>1</Button>
      <Button type="view">2</Button>
      <Button type="view--all">3</Button>
      <Button type="remove">4</Button>
      <Button type="back">5</Button>
      <Button type="get-started">6</Button>
    </div>
  );
}

export default Home;
