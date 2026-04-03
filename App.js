import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Devoirs from './pages/Devoirs';
import Cours from './pages/Cours';
import Connexion from './pages/Connexion';
import Compte from './pages/Compte';
import Notes from './pages/Notes';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ pseudo: 'admin' });

  // 🌙 DARK MODE
  const [darkMode, setDarkMode] = useState(false);

  // Charger compte
  useEffect(() => {
    const saved = localStorage.getItem('compte');
    if (saved) {
      setUser(JSON.parse(saved));
      setIsLoggedIn(true);
    }
  }, []);

  // Sauvegarder compte
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem('compte', JSON.stringify(user));
    } else {
      localStorage.removeItem('compte');
    }
  }, [isLoggedIn, user]);

  // 🌙 Charger thème
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') setDarkMode(true);
  }, []);

  // 🌙 Sauvegarder thème
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

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
      <div className={darkMode ? 'dark' : 'light'}>
        
        <nav style={{ position: 'relative', minHeight: 60 }}>
          <ul style={{ marginRight: 140 }}>
            <li><Link to="/">Accueil</Link></li>
            {isLoggedIn && <li><Link to="/devoirs">Devoirs</Link></li>}
            {isLoggedIn && <li><Link to="/cours">Cours</Link></li>}
            {isLoggedIn && <li><Link to="/notes">Notes</Link></li>}
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
                <button style={{
                  background: 'none',
                  color: '#fff',
                  border: '2px solid #fff',
                  borderRadius: '2rem',
                  padding: '0.4rem 1.2rem',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}>
                  Compte
                </button>
              </Link>
            ) : (
              <Link to="/connexion">
                <button style={{
                  background: 'linear-gradient(90deg, #2563eb 60%, #60a5fa 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '2rem',
                  padding: '0.4rem 1.2rem',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}>
                  Se connecter
                </button>
              </Link>
            )}
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Accueil isLoggedIn={isLoggedIn} onLogin={handleLogin} darkMode={darkMode} />} />
          <Route path="/connexion" element={<Connexion onLogin={handleLogin} darkMode={darkMode} />} />

          {isLoggedIn && <Route path="/devoirs" element={<Devoirs darkMode={darkMode} />} />}
          {isLoggedIn && <Route path="/cours" element={<Cours darkMode={darkMode} />} />}
          {isLoggedIn && <Route path="/notes" element={<Notes darkMode={darkMode} />} />}

          {isLoggedIn && (
            <Route
              path="/compte"
              element={
                <Compte
                  user={user}
                  onLogout={handleLogout}
                  onUpdate={handleUpdate}
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
              }
            />
          )}
        </Routes>

      </div>
    </Router>
  );
}

export default App;