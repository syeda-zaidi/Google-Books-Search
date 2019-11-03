import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Nav from './components/nav';
import searchBooks from "./pages/searchBooks";


function App() {
  return (
    <div>
     <Router>
       <Nav />
        <Route exact path="/" component={searchBooks} />
       
       </Router>
      
    </div>
  );
}

export default App;
