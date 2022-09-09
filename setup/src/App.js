import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = React.useState(data);

  function handleClick() {
    setPeople([]);
  }

  return (
    <main>
      <section className="container">
        <h3>{people.length} Aniversariantes hoje</h3>
        <List people={people} />
        <button onClick={handleClick}>Limpar</button>
      </section>
    </main>
  );
}

export default App;
