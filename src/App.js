// style
import './app.css'

//pages
import Main from './pages/main/Main';
import Stock from './pages/investment/Stock';

// react route
import {
   BrowserRouter as Router,
   Routes,
   Route,
 
 } from "react-router-dom";


function App() {
  return (
   <Router>
      <Routes>
         <Route path="/" element={<Main/>} />
         <Route path="/stock" element={<Stock/>}  />
      </Routes>
   </Router>

 
  );
}

export default App;
