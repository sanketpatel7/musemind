

import { Route, Routes } from "react-router-dom";

import Home from './routes/Home'
import About from './routes/About'
import Work from './routes/Work'
import OurProcess from './routes/OurProcess'
import Career from './routes/Career';
import Blog from './routes/Blog';
import Service from './routes/About'
import Contect from './routes/Contect';

function App() {
  return (
    <Routes>
        <Route path="/" Component = {Home} />
        <Route path="/about" Component = {About} /> 
        <Route path='/work' Component = {Work} />
        <Route path="/ourprocess" Component = {OurProcess} />
        <Route path="/career" Component = {Career} />
        <Route path="/blog" Component = {Blog} /> 
        <Route path='/services' Component = {Service} />
        <Route path="/contect" Component = {Contect} />
      </Routes>
  );
}

export default App;
