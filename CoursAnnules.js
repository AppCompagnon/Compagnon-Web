import React, { useEffect, useState } from 'react';

// Page des cours annulés
function CoursAnnules() {
  const [cours, setCours] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/cours-annules')
      .then(res => res.json())
      .then(data => setCours(data));
  }, []);

  return (
    <div>
      <h2>Cours annulés</h2>
      <ul>
        {cours.map((c, i) => (
          <li key={i}>{c.matiere} - {c.date}</li>
        ))}
      </ul>
    </div>
  );
}

export default CoursAnnules;
