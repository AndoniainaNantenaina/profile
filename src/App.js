import Home from "./pages/Home";
import 'rsuite/dist/rsuite.min.css';
import { Container, Content, CustomProvider, Header } from "rsuite";
import MyNavBar from "./components/MyNavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skills from "./pages/Skills";
import Study from "./pages/Study";
import Formations from "./pages/Formations";
import Experiences from "./pages/Experiences";
import NewHome from "./pages/NewHome";

function App() {
  return (
    <BrowserRouter>
    <CustomProvider theme="dark">
    <div className="App">
      <Container>
        <Header>
          <MyNavBar/>
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<NewHome/>}/>
            <Route path="/etudes" element={<Study/>}/>
            <Route path="/competences" element={<Skills/>}/>
            <Route path="/formations" element={<Formations/>}/>
            <Route path="/experiences" element={<Experiences/>}/>
          </Routes>
        </Content>
      </Container>
    </div>
    </CustomProvider>
    </BrowserRouter>
  );
}

export default App;
