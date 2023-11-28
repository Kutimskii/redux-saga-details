import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/Services';
import ServiceCard from './components/ServiceCard';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Services/>} />
          <Route path="/:id/details" element={<ServiceCard/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
