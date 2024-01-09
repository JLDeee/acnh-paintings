import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import ArtList from "./ArtList.js";
import Art from "./Art.js";
import NotFound from "./NotFound.js";
import Errors from "./Errors.js";
import Navbar from "./Navbar.js";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={"/"} element={ <Home/> }/>
        <Route path={"/about"} element={ <About/> }/>
        <Route path={"/contact"} element={ <Contact/> }/>
        <Route path={"/art"} element= { <ArtList/> }/>
        <Route path={"/art/:id"} element= { <Art/> }/>
        <Route path={"*"} element= { <NotFound/> }/>
        <Route path={"/errors"} element= { <Errors/> }/>
      </Routes>
    </Router>
  );

}

export default App;
