import { createResource } from 'solid-js';

import './index.css';

const fetchData = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(response => {
      return response.results;
    });
};

function App() {
  const [getData] = createResource(fetchData, { initialValue: [] });

  return (
    <div className="container">
      {getData().map(({ name, image }) => {
        return (
          <div>
            <h3>{name}</h3>
            <img src={image} alt={`Imagen ${name}`} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
