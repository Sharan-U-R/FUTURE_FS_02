import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Will be null if logged out, or an object if logged in

  // Simulate login
  const login = (userData) => {
    // In a real app, you'd verify credentials with a backend
    // For now, we'll just set the user
    const loggedInUser = {
      id: 1, // dummy id
      email: userData.email,
      name: 'User' // dummy name
    };
    setUser(loggedInUser);
  };

  // Logout
  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user, // A handy boolean to check if user is logged in
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
