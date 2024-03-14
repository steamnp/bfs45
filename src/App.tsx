// src/App.tsx
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByFive } from './features/counterSlice';
import { RootState } from './app/store';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByFive(5))}>Increment by 5</button>
    </div>
  );
}

export default App;
