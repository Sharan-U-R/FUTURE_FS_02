import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login({ email, password });
      navigate('/');
    } else {
      alert('Please enter email and password.');
    }
  };

  return (
    <div className="flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-2 text-brand-dark">Welcome Back</h1>
          <p className="text-center text-gray-500 mb-8">Log in to continue to Digital Drift.</p>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
              required
            />
          </div>
          <button type="submit" className="w-full bg-brand-blue text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-colors text-lg">
            Login
          </button>
          <p className="text-center text-gray-600 mt-6">
            Don't have an account? <Link to="/register" className="font-semibold text-brand-blue hover:underline">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
