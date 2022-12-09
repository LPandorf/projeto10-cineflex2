import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {URL} from "../Constants";
import Session from "./childcomponents/Session";
import Footer from "./childcomponents/Footer";

export default function Sessions(){
    const {idFilme}= useParams();
    const [movie, setMovie]= useState(undefined);

    useEffect(()=>{
        const promise=axios.get(`${URL}/movies/${idFilme}/showtimes`);
        promise.then(res=>setMovie(res.data));
        promise.catch(err=>console.log(err.response.data));
    })

    if(!movie){
        return (
            <Loading>Carregando ...</Loading>
        );
    }

    return (
        <>
            <Title>Selecione o horário</Title>
            <Times>
                {movie.days.map(m=>(
                    <Session movie={m} key={m.id} />
                ))}
            </Times>
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
const Times=styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;