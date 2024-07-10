import { Routes, Route } from "react-router-dom";

import Home from "./pages/main/main";
import Services from "./pages/services";
import Massages from "./pages/massages";
import Footer from "./components/footer/footer";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="*" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
        <Route
          exact
          path="/massages/:linkName"
          element={<Massages />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
