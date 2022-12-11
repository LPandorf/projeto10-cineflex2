import { useEffect, useState } from "react";
import styled from "styled-components";
import { URL } from "../Constants";
import axios from "axios";
import Movie from "./childcomponents/Movie";
import { Link } from "react-router-dom";

export default function Home(){
    const [movies, setMovies]= useState(undefined);

    useEffect(()=>{
        const promise=axios.get(`${URL}/movies`);
        promise.then(res=>setMovies(res.data));
        promise.catch(err=>console.log(err.response.data));
    },[]);

    if(!movies){
        return(
            <Loading>Carregando ...</Loading>
        );
    };
    return (
        <>
            <Title>Selecione o filme</Title>
            <Catalog>
                {movies.map(m=>(
                    <Link key={m.id} to={`/sessoes/${m.id}`} >
                        <Movie posterURL={m.posterURL} />
                    </Link>
                ))}
            </Catalog>
        </>
    );
}

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

const Catalog= styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

const Loading= styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
`;