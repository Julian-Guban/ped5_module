import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './Pages/Index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Index/>}/>
          <Route path='/' element={<Index/>}>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
