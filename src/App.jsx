import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Test from './pages/Test/Test';
import Selector from './components/Selector';
import GenerateDocument from './pages/CreateDocx/generateDocument';
import NotFound from './pages/Error/NotFound';

// Main App component that sets up the routing for the application
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the Home page */}
        <Route
          path="/"
          element={<Home />}
        />
        {/* Route for the Test page */}
        <Route
          path="/test"
          element={<Test />}
        />
        {/* Route for the GenerateDocument page */}
        <Route
          path="/createdocx"
          element={<GenerateDocument />}
        />
        {/* Route for the Selector component */}
        <Route
          path="/selector"
          element={<Selector />}
        />
      {/* Catch-all route for 404 errors */}
        <Route
         path="*"
          element={<NotFound />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
