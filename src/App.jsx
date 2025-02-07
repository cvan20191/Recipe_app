import { BrowserRouter, Routes, Route } from "react-router-dom";
import Waitlist from "./pages/Waitlist";

function Home() {
  return <div>Home Page</div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waitlist" element={<Waitlist />} />
      </Routes>
    </BrowserRouter>
  );
}