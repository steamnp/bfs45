import Button from "../../components/Button";
import style from "./task.module.css";

function Task1() {
  return (
    <div className={style.page}>
      <div className={style.counter}>1</div>
      <div className={style.btnGroup}>
        <Button onClick={() => {}}>Increase</Button>
        <Button onClick={() => {}}>Decrease</Button>
      </div>
    </div>
  );
}

export default Task1;
