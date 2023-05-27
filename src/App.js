import {Routes,Route} from "react-router-dom";
import Home from "./pages/main/main";
import Services from "./pages/services/services";
import Massages from "./pages/massages/massages";
import Footer from "./components/footer/footer";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="*" element={<Home/>} />
        <Route exact path="/pages/services/services" element={<Services/>} />
        <Route exact path="/pages/massages/massages/:id" element={<Massages/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
