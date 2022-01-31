import { createSignal, createEffect } from 'solid-js';
import './index.css';

function App() {
  const [counter, setCounter] = createSignal(0);

  // createEffect(prev => {
  //   const sum = prev + counter()
  //   console.log(sum)
  //   console.log(prev, counter())
  //   return sum
  // }, 0);

  return (
    <>
      <h1>Muestra contador</h1>
      <p>{counter()}</p>
      <p>{counter() % 2 === 0 ? 'Es par' : 'Es impar'}</p>
      <button onClick={() => setCounter(counter() + 1)}>Incrementar</button>
    </>
  );
};

export default App;
