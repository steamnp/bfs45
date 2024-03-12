
import { useAppSelector, useAppDispatch } from './hooks'

import { decrement, increment, incrementByAmount } from './counterSlice'
import style from './counter.module.css'

export default function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  // omit rendering logic
  return(
    <div >
   
        <p className={style.p} >Current Count: {count}</p>

    <div className={style.container}>
    <button className={style.button}  onClick={() => dispatch(increment())}> Increment </button>
    <button className={style.button}onClick={() => dispatch(decrement())}> decrement </button>
    <button className={style.button}onClick={ () => dispatch(incrementByAmount(10))} > Increment By 10</button>
  
    </div>
    
    </div>
  )

}