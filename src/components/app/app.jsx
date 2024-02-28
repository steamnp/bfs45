// Separation of Concern
import '../../styles/app.css'

function App() {
  return (
    <>
      <header className="container"> 1 </header>
      <Contact/>

      <main>
      <div> Hello React</div>
      </main>

      <footer className='footer'>
        <div className='inner-footer'>footer</div>
      </footer>
    </> // react fragment -> outside fragment, outside element
  )
}

// default export
export default App
