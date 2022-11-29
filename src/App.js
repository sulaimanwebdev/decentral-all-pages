import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Settings from "./pages/Settings";
import Chat from "./pages/Chat";
import Friends from "./pages/Friends";
import BuySell from "./pages/BuySell";

function App() {
  return (
    <>
  <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/chat" element={<Chat/>} />
      <Route path="/friends" element={<Friends/>} />
      <Route path="/buy-sell" element={<BuySell/>} />

     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;