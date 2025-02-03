import "./App.css";
import RootLayouts from "./components/layouts/RootLayouts";
import HOME from "./components/pages/Home";
import { Routes , Route } from "react-router-dom";
import Shop from "./components/pages/Shop";
function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayouts/>}>
        <Route path="/" element={<HOME/>}/>
        <Route path="/shop" element={<Shop/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
