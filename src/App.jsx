import { createSignal, createMemo } from 'solid-js';
import './index.css';

function App() {
  const [counter, setCounter] = createSignal(0);

  // const getText = createMemo(() => counter() % 2 === 0 ? 'Es par' : 'Es impar')

  return (
    <>
      <h1>Muestra contador</h1>
      <p>{counter}</p>
      {/* <p>{getText()}</p> */}
      <button onClick={() => setCounter(counter() + 1)}>Incrementar</button>
    </>
  );
};

export default App;
