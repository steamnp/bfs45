// Relative import
// import '../../styles/components/app.css'

// import "../../styles/components/app.scss";
import style from "../../styles/components/app.module.scss";

function App() {
  return (
    <>
      {/* <header className="container">Header</header>

      <main>
        <section>Section 1</section>
        <section>Section 2</section>
      </main>

      <footer className="footer">
        <div className="innerFooter">footer</div>
      </footer> */}

      <div className={style.app}>
        <div>
          Hello,World
          <br />
          <small>Satshree Shrestha</small>
        </div>
      </div>
    </>
  );
}

// <></> -> React Fragment

export default App;
