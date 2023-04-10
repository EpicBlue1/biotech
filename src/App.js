import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Landing from "./components/landing/landing";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Landing></Landing>
      <Routes>
        <Route path="/"></Route>
        <Route path="Armband"></Route>
        <Route path="Helmet"></Route>
      </Routes>
    </div>
  );
}

export default App;
