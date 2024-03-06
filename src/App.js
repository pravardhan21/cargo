import Landing from './Landing';
import LoginPage from './LoginPage';
import RegisterPage from './Registerpage';
import {BrowserRouter as Router, Route,  Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App  bg-slate-600">
      <Router>
        <Routes> 
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/landing" element={<Landing/>} />
          </Routes>        
        </Router>    </div>
  );
}

export default App;
// bg-gradient-to-l w-screen h-screen p-3 text-white from-[#C33764] to-[#1D2671]