import React, { useState } from 'react';

function Compte({ user, onLogout, onUpdate }) {
  const [pseudo, setPseudo] = useState(user.pseudo || '');
  const [message, setMessage] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    onUpdate({ ...user, pseudo });
    setMessage('Modifications enregistrées !');
  };

  return (
    <div className="page">
      <h2>Mon compte</h2>
      <form onSubmit={handleSave} style={{ maxWidth: 350, margin: '2rem auto', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <label style={{ fontWeight: 'bold' }}>Pseudo :</label>
        <input
          type="text"
          value={pseudo}
          onChange={e => setPseudo(e.target.value)}
          style={{ padding: '0.7rem', borderRadius: '0.7rem', border: '1px solid #bbb', fontSize: '1.1rem' }}
        />
        <button
          type="submit"
          style={{
            background: 'linear-gradient(90deg, #2563eb 60%, #60a5fa 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '2rem',
            padding: '0.7rem 2rem',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: '0.5rem'
          }}
        >
          Sauvegarder
        </button>
        {message && <div style={{ color: '#22c55e', textAlign: 'center', fontWeight: 'bold' }}>{message}</div>}
      </form>
      <button
        onClick={onLogout}
        style={{
          background: 'linear-gradient(90deg, #2563eb 60%, #60a5fa 100%)',
          color: '#fff',
          border: 'none',
          borderRadius: '2rem',
          padding: '0.7rem 2rem',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          margin: '2rem auto 0 auto',
          display: 'block'
        }}
      >
        Se déconnecter
      </button>
    </div>
  );
}

export default Compte;
