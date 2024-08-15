// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import Navbar from './pages/Navbar';
import ChatPage2 from './pages/ChatPage2';
import ChatPage3 from './pages/ChatPage3';
import ChatPage4 from './pages/ChatPage4';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<ChatPage/>} />
          <Route path="/chat-2" element={<ChatPage2 />} />
          <Route path="/chat-3" element={<ChatPage3 />} />
          <Route path="/chat-4" element={<ChatPage4 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
