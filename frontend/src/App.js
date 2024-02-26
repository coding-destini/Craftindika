import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './context/firebaseConfig';
import Home from './pages/Home';
import PageNotFound from './pages/404/PageNotFound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Records from './pages/Records';

const App = () => {
  const [user, setUser] = useState(null);
  const [authResolved, setAuthResolved] = useState(false);

  //checking auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) setUser(user);
      else setUser(null);
      setAuthResolved(true);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (!authResolved) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/records"
          element={user ? <Records /> : <Navigate to="/login" replace />}
        />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
