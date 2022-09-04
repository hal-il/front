import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" />
          <Route path="/register" />
          <Route path="/main" element={<MainPage />}>
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
