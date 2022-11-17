import Home from "./components/Home";
import 'rsuite/dist/rsuite.min.css';
import { Container, Content, CustomProvider, Header } from "rsuite";
import MyNavBar from "./components/MyNavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skills from "./components/Skills";
import Study from "./components/Study";

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
            <Route path="/" element={<Home/>}/>
            <Route path="/study" element={<Study/>}/>
            <Route path="/skills" element={<Skills/>}/>
          </Routes>
        </Content>
      </Container>
    </div>
    </CustomProvider>
    </BrowserRouter>
  );
}

export default App;
