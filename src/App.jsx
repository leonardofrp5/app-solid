import { createSignal, createEffect, onCleanup } from 'solid-js';
import './index.css';

function App() {
  const [counter, setCounter] = createSignal(0);
  console.log('Rende cuerpo de la función');

  // const counter = getCounter()

  // createEffect(prev => {
  //   const sum = prev + counter()
  //   console.log(sum)
  //   console.log(prev, counter())
  //   return sum
  // }, 0);


  // const counter = getCounter()
  // setCounter(counter + 1)

  // const interval = setInterval(() => {
  //   setCounter( counter() + 1)
  // }, 1000)

  // onCleanup(() => {
  //   clearInterval(interval)
  // })

  return (
    <>
      <h1>Nuestra contador</h1>
      <p>{counter}</p>
      {/* <p>{counter % 2 === 0 ? 'Es par' : 'Es impar'}</p> */}
      <button onClick={() => setCounter(counter => counter + 1)}>Incrementar</button>
    </>
  );
};

export default App;
