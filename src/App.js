import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Meetings from "./pages/Meetings";


function App() {
  return (
    <>
        <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meetings" element={<Meetings />} />

       
   
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
