import { createResource } from 'solid-js';

import './index.css';

const fetchData = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(response => {
      return response.results
    })
  }

function App() {
  const [getData] = createResource(fetchData, { initialValue: [] })

  return (
    <div className="container">
    {getData().map(i => {
      return (
        <div>
          <h3>{i.name}</h3>
          <img src={i.image} alt={`imagen de " ${i.name}`} />
        </div>)
    })}
    </div>
  );
};

export default App;
