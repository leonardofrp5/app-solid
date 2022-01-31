import { createSignal } from 'solid-js';
import './index.css';

function App() {
  const [counter, setCounter] = createSignal(0);
  //console.log('Rende cuerpo de la función');

  return (
    <>
      <h1>Muestra contador</h1>
      <p>{counter}</p>
      {/* <p>{counter % 2 === 0 ? 'Es par' : 'Es impar'}</p> */}
      <button onClick={() => setCounter(counter => counter + 1)}>Incrementar</button>
    </>
  );
};

export default App;
