import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthContext';


export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {setUser,fetchUser} = useAuth();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://dsa-backend-yr7z.onrender.com/api/v1/user/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          credentials: 'include', // Important for cookies
          body: JSON.stringify({ email, password })
      });

      if (!res.ok) {
        const err=await res.json()
        console.log(err)
          throw new Error(`Error: ${err.message}`);
      }

      const data = await res.json();
      console.log('User logged in:', data);
      // setUser(data.data.user)
      console.log(data.data.user.role)
      await fetchUser()
      toast.success("user loggin succesffull")
      // console.log(user)
      if(data.data.user.role=="admin"){
      navigate(`/admin`)}
      else{
        navigate(`/user/${data.data.user._id}`)}
      
      return data;
  } catch (error) {
    toast.error(error.message)
      console.error('Login failed:', error);
  }
  };

  return (
    <section className='min-h-screen w-full flex items-center justify-center'>
    <div className='sm:p-10 w-full p-4   sm:w-1/2'>
    <div className='border sm:px-10 sm:py-4 w-full bg-gray-300  rounded-md'>
      
     <h2 className='text-center'>Login</h2>
      <form className='flex flex-col gap-2 items-center' onSubmit={handleLogin}>
       <div className='flex p-2 flex-col '>
       <label className='pl-2' htmlFor="">Email</label>
        <input className='border pl-2 rounded-md'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
       </div>



       <div className='flex px-2 flex-col '>
       <label className='pl-2' htmlFor="">Password</label>
       <input className='border pl-2 rounded-md'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
       </div>
        <button className='bg-red-300 rounded-md w-1/3 ' type="submit">Login</button>
      </form>
     </div>
    </div>
    </section>
  );
};

// export default Login;