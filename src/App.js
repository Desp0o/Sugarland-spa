import {Routes,Route} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/main/main";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="*" element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
