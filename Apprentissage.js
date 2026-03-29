import React, { useEffect, useState } from 'react';

// Page d'apprentissage (notes/cours)
function Apprentissage() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/notes')
      .then(res => res.json())
      .then(data => setNotes(data));
  }, []);

  return (
    <div>
      <h2>Ressources d'apprentissage</h2>
      <ul>
        {notes.map((n, i) => (
          <li key={i}>{n.titre} : {n.contenu}</li>
        ))}
      </ul>
    </div>
  );
}

export default Apprentissage;
