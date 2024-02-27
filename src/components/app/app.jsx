// Relative import
import '../../styles/components/app.css'
{
  /* <div>Hello React</div> -> JSX */
}

function App() {
  return (
    <>
      <header className="container">Header</header>

      <main>
        <section>Section 1</section>
        <section>Section 2</section>
      </main>

      <footer className="footer">
        <div className="innerFooter">footer</div>
      </footer>
    </>
  )
}

// <></> -> React Fragment

export default App
