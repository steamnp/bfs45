
import type { RootState } from '../app/Store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'
import styles from './counter.module.scss'

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <div>
        
        <div className={styles.count}>
          <span>{count}</span>
        </div>
        
        <button className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        
        <button className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(15))}
        >
          Increment by 15
        </button>
      </div>
    </div>
  )
}