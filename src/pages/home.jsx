import Button from '../component/button'
import Store from './store'

function Home() {
  return (
    <div>
      <Button>12345</Button>
      <Button type="view-all">New Button</Button>
      {/* <Button type="back" /> */}
       {/* <Store /> */}
    </div>
  )
}

// <div className="sth" id="one"></div> -> className,id are attribute

//<Button buttonText={} /> -> buttonText -> prop

export default Home

{
  /* <button>Home button</button> */
}
