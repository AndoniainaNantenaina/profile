import Home from "./components/Home";
import 'rsuite/dist/rsuite.min.css';
import { CustomProvider } from "rsuite";
import MyNavBar from "./components/MyNavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skills from "./components/Skills";
import Study from "./components/Study";

function App() {
  return (
    <BrowserRouter>
    <CustomProvider theme="dark">
    <div className="App">
      <MyNavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/study" element={<Study/>}/>
        <Route path="/skills" element={<Skills/>}/>
      </Routes>
    </div>
    </CustomProvider>
    </BrowserRouter>
  );
}

export default App;
