import { splitProps, mergeProps } from 'solid-js';

function ComponentCounter({ counter, getText, increment }) {
  // se debe pasar por props no se puede destructurar

  // const [local, others] = splitProps(props, ["counter", "getText", "increment"]);
  // const propsEdit = mergeProps({ counter: 10}, propsApp) Eliminar counter de App.jsx

  return (
    <>
      <h1>Nuestra contador</h1>
      <p>{counter}</p>
      <p>{getText}</p>
      <button onClick={increment}>Incrementar</button>
    </>
  );
};

export default ComponentCounter;
