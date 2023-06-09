import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login.jsx';
import { Profile } from './components/Profile.jsx';
import { ProfileDetail } from './components/ProfileDetail.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/:id' element={<ProfileDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
