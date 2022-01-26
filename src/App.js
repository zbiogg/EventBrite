import HomePage from './pages/Home';
import Test from './components/Footer/test';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/test" element={<Test/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
