import Button from "../component/button";

function Home() {
  const num = 10;

  const str = "hello";

  const bool = true;

  const arr = [10, "hi", false, 10.99];

  const obj = {
    name: "john doe",
    age: 22,
  };

  return (
    <div>
      <div>{`number: ${num}`}</div>
      <div>{`string: ${str}`}</div>
      <div>{`boolean: ${bool}`}</div>
      <div>{`array: ${arr}`}</div>
      <div>{`object: ${JSON.stringify(obj)}`}</div>
    </div>
  );
}

export default Home;
