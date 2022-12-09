import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "./childcomponents/Footer";

export default function Seats(){
    const {idSessao}= useParams();
    const [session,setSession] = useState(undefined);

    if(!session){
        return (
            <Loading>Carregando ...</Loading>
        );
    }

    return(
        <>
            <Footer/>
        </>
    )
}

const Loading= styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
`;