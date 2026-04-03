import React, { useState } from 'react';

function Compte({ user, onLogout, onUpdate, darkMode, setDarkMode }) {
  const [pseudo, setPseudo] = useState(user.pseudo || '');
  const [message, setMessage] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    onUpdate({ ...user, pseudo });
    setMessage('Modifications enregistrées !');
  };

  return (
    <div
      className="page"
      style={{
        minHeight: "100vh",
        background: darkMode ? "#0f172a" : "#f1f5f9",
        color: darkMode ? "white" : "black",
        paddingTop: "20px"
      }}
    >
      <h2 style={{ textAlign: "center" }}>Mon compte</h2>

      {/* SWITCH MODE SOMBRE */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <div
          onClick={() => setDarkMode(!darkMode)}
          style={{
            width: "60px",
            height: "30px",
            background: darkMode ? "#22c55e" : "#cbd5f5",
            borderRadius: "999px",
            display: "flex",
            alignItems: "center",
            padding: "5px",
            cursor: "pointer",
            transition: "0.3s"
          }}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              background: "white",
              borderRadius: "50%",
              transform: darkMode ? "translateX(30px)" : "translateX(0px)",
              transition: "0.3s"
            }}
          />
        </div>
      </div>

      <p style={{ textAlign: "center", marginTop: "10px" }}>
        {darkMode ? "🌙 Mode sombre activé" : "☀ Mode clair"}
      </p>

      <form
        onSubmit={handleSave}
        style={{
          maxWidth: 350,
          margin: '2rem auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem'
        }}
      >
        <label style={{ fontWeight: 'bold' }}>Pseudo :</label>

        <input
          type="text"
          value={pseudo}
          onChange={e => setPseudo(e.target.value)}
          style={{
            padding: '0.7rem',
            borderRadius: '0.7rem',
            border: '1px solid #bbb',
            fontSize: '1.1rem',
            background: darkMode ? "#1e293b" : "white",
            color: darkMode ? "white" : "black"
          }}
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
            cursor: 'pointer'
          }}
        >
          Sauvegarder
        </button>

        {message && (
          <div style={{ color: '#22c55e', textAlign: 'center', fontWeight: 'bold' }}>
            {message}
          </div>
        )}
      </form>

      <button
        onClick={onLogout}
        style={{
          background: 'linear-gradient(90deg, #ef4444 60%, #f87171 100%)',
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