import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import EasyProjects from './pages/EasyProjects';
import MediumProjects from './pages/MediumProjects';
import LargeProjects from './pages/LargeProjects';
import StudentsProjects from './pages/StudentsProjects';
import Calculator from './projects/Calculator';
import ColorChanger from './projects/colorchanger/ColorChanger';

function App() {
  return (
    <>
      <Navbar />     

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/small_projects' element={<EasyProjects/>}></Route>
        <Route path='/medium_projects' element={<MediumProjects/>}></Route>
        <Route path='/large_projects' element={<LargeProjects/>}></Route>
        <Route path='/students_projects' element={<StudentsProjects/>}></Route>
        <Route path='/calculator' element={<Calculator/>}></Route>
        <Route path='/color_changer' element={<ColorChanger/>}></Route>
       


      </Routes>

    </>
  );
}

export default App;
