import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import { Profile } from './components/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
