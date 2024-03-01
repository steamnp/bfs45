import Button from '../component/button'
import Store from './store'

function Home() {
  return (
    <div className='container'>
      <Button>Home Button</Button>
      <Button type="view">View Button</Button>
      <Button type="back"> Back Button </Button>
      <Button type="remove">Remove Button</Button>
      <Button type="get-started"> Get Started</Button>
      <Store/>
    </div>
  )
}

// <div className="sth" id="one"></div> -> className,id are attribute

//<Button buttonText={} /> -> buttonText -> prop

export default Home

{
  /* <button>Home button</button> */
}
