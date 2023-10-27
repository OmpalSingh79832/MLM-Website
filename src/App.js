import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nab from './components/Nab/Nab';
import Footer from './components/homepage/Footer';
import "./components/Responsive.css"
import SoftwareDev from './components/layout/SoftwareDev';
import { Routes, Route } from "react-router-dom";
import { HomePage } from './components/homepage/HomePage';


function App() {
  return (
    <>
      <Nab />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/software-development' element={<SoftwareDev />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
