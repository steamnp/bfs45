// Relative import
import Home from '../../pages/home'
import Store from '../../pages/store'
import style from '../../styles/components/app.module.css'
import Contact from '../contact/contact'
import Dashboard from '../dashboard/dashboard'
{
  /* <div>Hello React</div> -> JSX */
}

function App() {
  return (
    <>
      <header className={style.container}>Header</header>

      <Contact />
      <Home/>
      <Store/>

      <main>
        <section>Section 1</section>
        <section>Section 2</section>
      </main>

      <Dashboard />

      <footer className="footer">
        <div className="innerFooter">footer</div>
      </footer>
    </>
  )
}

// <></> -> React Fragment

export default App
