import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Flavours from './pages/Flavours';
import History from './pages/History';
import Aboutus from './pages/Aboutus';
import Footer from "./Components/Footer";
import "./App.css";

import {BrowserRouter as  Router, Route, Switch, Routes} from "react-router-dom";
//

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
       <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/flavours' element={<Flavours/>}/>
        <Route exact path='/history' element={<History/>}/>
        <Route exact path='/aboutus' element={<Aboutus/>}/>
       </Routes>
       <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
