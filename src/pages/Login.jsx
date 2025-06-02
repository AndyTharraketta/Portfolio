import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password || !repeatPassword) {
      setError('Bitte fülle alle Felder aus.');
      return;
    }

    if (password !== repeatPassword) {
      setError('Die Passwörter stimmen nicht überein.');
      return;
    }

    // Optional: Du könntest hier eine Registrierung speichern oder verifizieren.
    setError('');
    navigate('/portfolio');
  };

  return (
    <div>
      <h2>Login / Registrierung</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Benutzername:</label><br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Passwort:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Passwort wiederholen:</label><br />
          <input
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
