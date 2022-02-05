import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage';
import LoginPage from './pages/Login/Login';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/event/:id" element={<EventPage/>} />
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
