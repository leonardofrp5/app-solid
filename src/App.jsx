import { createSignal, createMemo } from 'solid-js';

// import ComponentCounter from './components/ComponentCounter';
import './index.css';

function App() {
  const [counter, setCounter] = createSignal(0);

  // const getText = createMemo(() => counter() % 2 === 0 ? 'Es par' : 'Es impar')
  // const increment = () => setCounter(counter() + 1)

  return (
    <>
      {/* <ComponentCounter counter={counter()} getText={getText()} increment={increment} /> */}
    </>
  );
};

export default App;
