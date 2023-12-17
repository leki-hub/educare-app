import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Meetings from "./pages/Meetings";
import HomeTest from "./pages/HomeTest";
import Header from "./Components/Header";


function App() {
  return (
    <>
        <BrowserRouter>
        <Header />
      <Routes>
          <Route path="/" element={<HomeTest/>} />
          <Route path="/meetings" element={<Meetings />} />

       
   
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
