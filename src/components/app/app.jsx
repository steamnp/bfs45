// Relative import
import style from '../../styles/components/app.module.css'
import Contact from '../contact/contact'
{
  /* <div>Hello React</div> -> JSX */
}

function App() {
  return (
    <>
      <header className={style.container}>Header</header>

      <Contact />

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
