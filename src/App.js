import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Meetings from "./pages/Meetings";
import Header from "./Components/Header";
import MeetingDetails from "./pages/MeetingDetails";
import 'font-awesome/css/font-awesome.min.css';




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



