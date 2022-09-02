import "./App.css";

import LoginPage from "./pages/Login/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GoogleRedirectHandler from "components/Login/GoogleRedirectHandler";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/oauth/google" element={<GoogleRedirectHandler />} />
          <Route path="/register" />
          <Route path="/main">
            <Route path=":userId" />
          </Route>
          <Route path="/profile">
            <Route path="edit" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
