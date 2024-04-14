import { Outlet } from 'react-router-dom';
import Navbar from './components/navBar';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <>
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
