import { useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Footer from "./childcomponents/Footer";
import { URL } from "../Constants";
import Seat from "./childcomponents/Seat";
import BuyerForm from "./childcomponents/BuyerForm";
import Example from "./childcomponents/Example";

export default function Seats(){
    const {idSessao}= useParams();
    const [session,setSession] = useState(undefined);

    useEffect(()=>{
        const promise=axios.get(`${URL}/showtimes/${idSessao}/seats`);
        promise.then(res=>setSession(res.data));
        promise.catch(err=>console.log(err.response.data));
    },[])

    if(!session){
        return (
            <Loading>Carregando ...</Loading>
        );
    }/* 
*/
    return(
        <>  
            <Title>Selecione o(s) assento(s)</Title>
            <Page>
                <Chair>
                    {session.seats.map(s=>(
                        <Seat 
                            key={s.id}
                            seat={s}
                            
                        />
                    ))} 
                </Chair>
                <Example/>
                <BuyerForm/>
            </Page>
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

const Title= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;
    margin-bottom: 20px;
`;

const Page= styled.div`
    margin-bottom: 150px;
`

const Chair= styled.div`
    display: flex;
    flex-wrap: wrap;
    margin:24px;
    justify-content: center;
`