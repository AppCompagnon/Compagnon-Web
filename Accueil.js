import React, { useState } from 'react';

// Page d'accueil
function Accueil({ isLoggedIn, onLogin }) {
  return (
    <div className="page">
      <h1 style={{
        color: '#2563eb',
        fontSize: '2.5rem',
        marginBottom: '1.2rem',
        letterSpacing: '1px',
        textShadow: '0 2px 8px #2563eb22'
      }}>
        Bienvenue sur Compagnon
      </h1>
      <p style={{
        textAlign: 'center',
        fontSize: '1.25rem',
        color: '#444',
        background: 'linear-gradient(90deg, #e0e7ff 0%, #f0f4ff 100%)',
        borderRadius: '1rem',
        padding: '1.2rem',
        boxShadow: '0 2px 12px #2563eb11',
        margin: '0 auto 1.5rem auto',
        maxWidth: '480px'
      }}>
        Gérez vos devoirs, consultez les cours annulés et accédez à vos ressources d'apprentissage.
      </p>
      <ul style={{
        background: '#f8fafc',
        borderRadius: '1rem',
        boxShadow: '0 1px 6px #2563eb11',
        padding: '1.2rem',
        margin: '0 auto 2rem auto',
        maxWidth: '480px',
        fontSize: '1.08rem',
        color: '#333',
        lineHeight: 1.7
      }}>
        <p style={{ textAlign: 'center', margin: '0.3em 0' }}>Accès rapide à tous vos devoirs</p>
        <p style={{ textAlign: 'center', margin: '0.3em 0' }}>Visualisation des cours annulés en temps réel</p>
        <p style={{ textAlign: 'center', margin: '0.3em 0' }}>Centralisation de vos notes et ressources</p>
        <p style={{ textAlign: 'center', margin: '0.3em 0' }}>Interface simple, moderne et en français</p>
        <p style={{ textAlign: 'center', margin: '0.3em 0' }}>Sécurité et confidentialité de vos données</p>
      </ul>
      {!isLoggedIn && (
        <button
          style={{
            display: 'block',
            margin: '1.5rem auto 0 auto',
            background: 'linear-gradient(90deg, #2563eb 60%, #60a5fa 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '2rem',
            padding: '0.8rem 2.2rem',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            boxShadow: '0 2px 8px #2563eb22',
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}
          onClick={onLogin}
        >
          Se connecter à mon compte
        </button>
      )}
    </div>
  );
}

export default Accueil;
