import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Home from "./components/Home";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";
import Success from "./components/Success";
import { useState } from "react";

export default function App() {
  const [successInfo,setSuccessInfo]=useState({});
  return (
    <>
      <Navbar />
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sessoes/:idFilme" element={<Sessions/>} />
            <Route path="/assentos/:idSessao" element={<Seats setSuccessInfo={setSuccessInfo} />} />
            <Route path="/sucesso" element={<Success successInfo={successInfo} />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin-top: 113px;
`;