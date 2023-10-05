import Home from './pages/Home';
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="/Home"
          element={<Home />}
        />
      </Routes>
    </div>
  );
}

export default App;
