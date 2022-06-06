import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";


function App() {
  return (
    <div className="App">
     <Router>
       <Nav />
       <Routes>
         <Route exact component={Home}/>
       </Routes>
       <Home />
     </Router>
    </div>
  );
}

export default App;
