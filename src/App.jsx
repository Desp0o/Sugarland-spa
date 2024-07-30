import { Routes, Route } from "react-router-dom";

import Home from "./pages/main/main";
import Services from "./pages/services";
import Massages from "./pages/massages";
import Footer from "./components/footer/footer";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/massages/:linkName" element={<Massages />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
