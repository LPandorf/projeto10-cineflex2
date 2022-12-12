import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import {URL} from "../Constants";
import Session from "./childcomponents/Session";
import Footer from "./childcomponents/Footer";

export default function Sessions(){
    const {idFilme}= useParams();
    const [movie, setMovie]= useState(undefined);
    const navigate=useNavigate;

    useEffect(()=>{
        const promise=axios.get(`${URL}/movies/${idFilme}/showtimes`);
        promise.then(res=>setMovie(res.data));
        promise.catch(err=>console.log(err.response.data));
    }, []);

    if(!movie){
        return (
            <Loading>Carregando ...</Loading>
        );
    };

    return (
        <>
            <Title>Selecione o horário</Title>
            <Times>
                {movie.days.map(m=>(
                    <Session movie={m} key={m.id} />
                ))}
            </Times>
            <Wrapper>
                <Link to={"/"}>
                    <button data-test="go-home-header-btn">voltar para home</button>
                </Link>
            </Wrapper>
            <Footer poster={movie.posterURL} title={movie.title}/>
        </>
    );
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
    margin-bottom: 50px;
`;

const Wrapper=styled.div`
    margin-bottom: 150px;
    width: 100%;
    display: flex;
    justify-content: center;
    button{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
        width: 225px;
        height: 42px;
        background: #C3CFD9;
        border: 1px solid #E8833A;
        border-radius: 3px;
        color: #E8833A;
        display: flex;
        justify-content: center;
    }
`;