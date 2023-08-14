import { Routes, Route } from "react-router-dom";

import Home from "pages/Home";
import Portfolio from "pages/Portfolio";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/portfolio' element={<Portfolio />}></Route>
    </Routes>
  );
};

export default App;
