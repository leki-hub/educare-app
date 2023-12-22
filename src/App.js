import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Meetings from "./pages/MeetingsTest";
import Header from "./Components/Header";
import MeetingDetails from "./pages/MeetingDetails";




function App() {
  return (
    <>
        <BrowserRouter>
        <Header />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/meetings" element={<Meetings/>} />
          <Route path="/meeting-details" element={<MeetingDetails />} />
       
   
      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
