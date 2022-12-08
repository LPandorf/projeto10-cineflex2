import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Home from "./components/Home";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";
import Success from "./components/Success";

export default function App() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sessoes/:idFilme" element={<Sessions/>} />
            <Route path="/assentos/:idSessao" element={<Seats/>} />
            <Route path="/sucesso" element={<Success/>} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin-top: 47px;
`;