import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Connexion({ onLogin }) {
  const [pseudo, setPseudo] = useState('');
  const [mdp, setMdp] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  return (
    <div className="page">
      <h2>Se connecter à EduConnect</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 350, margin: '2rem auto', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <input
          type="text"
          placeholder="Nom d'utilisateur EduConnect"
          value={pseudo}
          onChange={e => setPseudo(e.target.value)}
          style={{ padding: '0.7rem', borderRadius: '0.7rem', border: '1px solid #bbb', fontSize: '1.1rem' }}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={mdp}
          onChange={e => setMdp(e.target.value)}
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
          Se connecter
        </button>
        {message && <div style={{ color: '#e11d48', textAlign: 'center', fontWeight: 'bold' }}>{message}</div>}
      </form>
    </div>
  );
}

export default Connexion;
