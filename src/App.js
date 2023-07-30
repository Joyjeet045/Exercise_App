import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import { Box } from '@mui/material';
import Navbar from './Components/Navbar';
import ExerciseDetail from './Pages/ExerciseDetail'
import Home from './Pages/Home'
import Footer from './Components/Footer'
const App=()=> {
  return (
    <Box width="400px" sx={{width:{xl:"1488px"}}} m="auto" backgroundColor="hsl(300, 100%, 99%)" >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail/>} />
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
