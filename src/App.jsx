import React from 'react'
import LoginForm from './LoginForm'
import LogoutForm from './LogoutForm'
import Dashboard from './Dashboard';

function App() {
  return (
    <div>
        <LoginForm/>
        <LogoutForm/>
        <Dashboard/>
    </div>
  );
}

export default App