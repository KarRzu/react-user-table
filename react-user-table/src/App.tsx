import "./App.css";
import { AddUsers } from "./components/features/users/AddUsers";
import { EditUsers } from "./components/features/users/EditUsers";
import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/addUser" element={<AddUsers />}></Route>
          <Route path="/editUser/:id" element={<EditUsers />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
