import Button from '../component/button'
import React, {useEffect} from 'react'
import Store from './store'

function Pagetitle(){
  useEffect(() => {document.title = 'Button Modules'},[])
}

function Home() {
  Pagetitle()
  return (
    <div>
      <Button>Home Button</Button>
      <Button type="view">View</Button>
      <Button type="view--all">View--all</Button>
      <Button type="back">Back</Button>
      <Button type="get-started">Get-Started</Button>
      {/*<Button type="view-all">New Button</Button>
      <Button type="back" />*/}
      {/*<Store />*/}
    </div>
  )
}

// <div className="sth" id="one"></div> -> className,id are attribute

//<Button buttonText={} /> -> buttonText -> prop

export default Home

{
  /* <button>Home button</button> */
}
