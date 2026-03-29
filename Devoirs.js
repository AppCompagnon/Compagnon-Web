import React, { useEffect, useState } from 'react';

// Page des devoirs
function Devoirs() {
  const [devoirs, setDevoirs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/devoirs')
      .then(res => res.json())
      .then(data => setDevoirs(data));
  }, []);

  return (
    <div>
      <h2>Liste des devoirs</h2>
      <ul>
        {devoirs.map((d, i) => (
          <li key={i}>{d.titre} - à rendre pour le {d.date}</li>
        ))}
      </ul>
    </div>
  );
}

export default Devoirs;
