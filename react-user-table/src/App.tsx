import "./App.css";
import { AddUsers } from "./components/features/users/AddUsers";
import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add-user" element={<AddUsers />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
