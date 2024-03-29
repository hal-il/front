import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" />
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
