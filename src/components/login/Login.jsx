import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';


export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
const {setUser} = useAuth();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/v1/user/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          credentials: 'include', // Important for cookies
          body: JSON.stringify({ email, password })
      });

      if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
      }

      const data = await res.json();
      console.log('User logged in:', data);
      setUser(data.data.user)
      console.log(data.data)
      navigate(`/user/${data.data.user._id}`)
      return data;
  } catch (error) {
      console.error('Login failed:', error.message);
  }
  };

  return (
    <div className='min-h-screen w-full mt-32'>
      <h2>Login</h2>
      <form className='flex flex-col gap-5' onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className='bg-red-300' type="submit">Login</button>
      </form>
    </div>
  );
};

// export default Login;
