import { Provider } from "react-redux";
import CounterComponent from "./components/CounterComponent";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
}

export default App;
