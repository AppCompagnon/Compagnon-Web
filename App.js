import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Devoirs from './pages/Devoirs';
import CoursAnnules from './pages/CoursAnnules';
import Apprentissage from './pages/Apprentissage';
import Connexion from './pages/Connexion';
import Compte from './pages/Compte';
import './App.css'; // Ajout du fichier de styles global

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ pseudo: 'admin' });

  // Sauvegarde le pseudo dans le localStorage
  useEffect(() => {
    const saved = localStorage.getItem('compte');
    if (saved) {
      setUser(JSON.parse(saved));
      setIsLoggedIn(true);
    }
  }, []);
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem('compte', JSON.stringify(user));
    } else {
      localStorage.removeItem('compte');
    }
  }, [isLoggedIn, user]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUser({ pseudo: 'admin' });
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({ pseudo: '' });
  };
  const handleUpdate = (newUser) => setUser(newUser);

  return (
    <Router>
      <nav style={{ position: 'relative', minHeight: 60 }}>
        <ul style={{ marginRight: 140 }}>
          <li><Link to="/">Accueil</Link></li>
          {isLoggedIn && <li><Link to="/devoirs">Devoirs</Link></li>}
          {isLoggedIn && <li><Link to="/cours-annules">Cours annulés</Link></li>}
          {isLoggedIn && <li><Link to="/apprentissage">Apprentissage</Link></li>}
        </ul>
        <div
          style={{
            position: 'absolute',
            top: 16,
            right: 32,
            display: window.innerWidth < 600 ? 'none' : 'flex',
            flexDirection: 'row',
            gap: '0.5rem',
            zIndex: 2
          }}
        >
          {isLoggedIn ? (
            <Link to="/compte">
              <button
                style={{
                  background: 'none',
                  color: '#fff',
                  border: '2px solid #fff',
                  borderRadius: '2rem',
                  padding: '0.4rem 1.2rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontFamily: 'Segoe UI, Arial, sans-serif',
                  transition: 'background 0.2s, color 0.2s',
                  marginLeft: 0,
                  minWidth: '120px',
                  whiteSpace: 'nowrap'
                }}
              >
                Compte
              </button>
            </Link>
          ) : (
            <Link to="/connexion">
              <button
                style={{
                  background: 'linear-gradient(90deg, #2563eb 60%, #60a5fa 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '2rem',
                  padding: '0.4rem 1.2rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontFamily: 'Segoe UI, Arial, sans-serif',
                  transition: 'background 0.2s',
                  marginLeft: 0,
                  minWidth: '120px',
                  whiteSpace: 'nowrap'
                }}
              >
                Se connecter
              </button>
            </Link>
          )}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Accueil isLoggedIn={isLoggedIn} onLogin={handleLogin} />} />
        <Route path="/connexion" element={<Connexion onLogin={handleLogin} />} />
        {isLoggedIn && <Route path="/devoirs" element={<Devoirs />} />}
        {isLoggedIn && <Route path="/cours-annules" element={<CoursAnnules />} />}
        {isLoggedIn && <Route path="/apprentissage" element={<Apprentissage />} />}
        {isLoggedIn && <Route path="/compte" element={<Compte user={user} onLogout={handleLogout} onUpdate={handleUpdate} />} />}
      </Routes>
    </Router>
  );
}

export default App;
