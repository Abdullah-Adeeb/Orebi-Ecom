import "./App.css";
import RootLayouts from "./components/layouts/RootLayouts";
import HOME from "./components/pages/Home";
import { Routes , Route } from "react-router-dom";
import Shop from "./components/pages/Shop";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import Error from "./components/pages/Error";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import MyAcoount from "./components/pages/MyAcoount";
function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayouts/>}>
        <Route path="/" element={<HOME/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/myAccount" element={<MyAcoount/>}/>
        <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
