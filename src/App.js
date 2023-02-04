import GetStarted from "./components/pages/GetStarted";
import AddSpending from "./components/pages/AddSpending";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/add" element={<AddSpending />} />
      </Routes>
  </ BrowserRouter>
  );
}

export default App;
