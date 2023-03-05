import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { Main } from './pages/main/main'
import { Login } from './pages/login';
import { Navbar } from './components/navbar';
import { CreatePost } from './pages/create-post/create-post';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
