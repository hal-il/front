import logo from './logo.svg';
import './App.css';

import LoginPage from './pages/Login/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GoogleRedirectHandler from 'components/Login/GoogleRedirectHandler';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/oauth/callback" element={<GoogleRedirectHandler />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
