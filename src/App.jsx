import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import User from "./components/User"
import Login from './components/login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        <Header/>
        <main className='flex-grow'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;