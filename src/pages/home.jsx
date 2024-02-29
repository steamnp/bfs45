import Button from "../component/button";
// import Store from './store'

function Home() {
  return (
    <div>
      <Button>Button</Button>
      <Button type="view">View</Button>
      <Button type="view--all">View All</Button>
      <Button type="remove">Remove</Button>
      <Button type="back">Back</Button>
      <Button type="get-started">Get Started</Button>
      {/* <Button type="view-all">New Button</Button>
      <Button type="back" /> */}
      {/* <Store /> */}
    </div>
  );
}

// <div className="sth" id="one"></div> -> className,id are attribute

//<Button buttonText={} /> -> buttonText -> prop

export default Home;

{
  /* <button>Home button</button> */
}
