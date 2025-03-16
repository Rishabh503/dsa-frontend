import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const res = await fetch('https://dsa-backend-yr7z.onrender.com/api/v1/user/profile', {
        method: 'POST',
        credentials: 'include'
      });

      if (!res.ok) {
        throw new Error('Failed to fetch user');
      }

      const data = await res.json();
      setUser(data.data);
    } catch (error) {
      console.error('Error fetching user:', error.message);
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser(); // ✅ Run on app load to persist user
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
