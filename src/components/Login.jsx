import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  
  const [error, setError] = useState('');

  
  const handleSubmit = () => {
   
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

   
    if (username === 'rakshana' && password === '123456') {
        
        navigate('/react-dailytask1/Marks', { state: { username } });
      } else {
        setError('Invalid username or password');
        return;
      }
   
    
  };

  return (
    <div className="login">
      <div className="logdetails">
        <label>
          UserName: 
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </label>
        
        <label>
          Password: 
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </label>
        
        
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
        <button onClick={handleSubmit}>Enter</button>
      </div>
    </div>
  );
};

export default Login;
