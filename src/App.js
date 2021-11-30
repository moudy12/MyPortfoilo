import "./App.css";
import About from "./Components/About/About";
import { Routes, Route } from "react-router";
import Navigation from "./Components/Navigation/Navigation";
import { Navigate } from "react-router";
import { Skills } from "./Components/Skills/Skills";
function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="content">
        <Routes>
          <Route path="/skills" element={<Skills />} />
          <Route path="/" element={<About />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
