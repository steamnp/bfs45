// Separation of Concern

import Contact from "../contact/contact";
import style from "../../styles/components/app.module.css";
import "../../styles/global/index.css";

function App() {
  return (
    <>
      <header className={style.contact}>Header</header>

      <Contact />
      <section>section 1</section>
      <section className={style.contact}>section 2</section>

      <footer className="footer">Footer</footer>
    </>
  );
}

// default export
export default App;
