// import  { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Test from './pages/Test/Test';
import CreateDocx from './pages/CreateDocx/generateDocument';
import Selector from './components/Selector'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />} // Pass CSV data as a prop to Home
        />
        <Route
          path="/test"
          element={<Test />} // Pass CSV data as a prop to Home
        />
        <Route
          path="/createdocx"
          element={<CreateDocx />} // Pass CSV data as a prop to Home
        />
        <Route
          path="/selector"
          element={<Selector />} // Pass CSV data as a prop to Home
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
