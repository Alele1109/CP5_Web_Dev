import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Produto from "./routes/Produtos";
import Error from "./routes/Error";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produto />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;