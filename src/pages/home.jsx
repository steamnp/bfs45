import Button from '../component/button'
import Store from './store'

function Home() {
  return (
    <div>
      <Button buttonText="Home Button" bgColor="green" />
      <Button buttonText="New Button" bgColor="purple" />
      <Button bgColor="navy" />
      <Store />
    </div>
  )
}

// <div className="sth" id="one"></div> -> className,id are attribute

//<Button buttonText={} /> -> buttonText -> prop

export default Home
