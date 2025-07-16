
import { useState } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import { Dashboard } from './Dashboard';

export default function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState('signup')
}

function handleSignup(data) {
  setUser(data);
  alert('Account created successfully');
  setPage('login');
}
function handleLogin(data) {
  if (user && data.email === user.email && data.password === user.password) {
    alert('Login Successfully!');
    setPage('dashboard');
  } else {
    alert('Invalid credentials.');
  }
}

return (
  <div>
    
  </div>
)