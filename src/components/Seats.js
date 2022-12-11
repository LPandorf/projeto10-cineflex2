import { useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Footer from "./childcomponents/Footer";
import { URL } from "../Constants";
import Seat from "./childcomponents/Seat";
import Buyer from "./childcomponents/Buyer";
import Example from "./childcomponents/Example";

export default function Seats({setSuccessInfo}){
    const {idSessao}= useParams();
    const [session,setSession] = useState(undefined);
    const [selectedChair, setSelectedChair]= useState([]);

    useEffect(()=>{
        const promise=axios.get(`${URL}/showtimes/${idSessao}/seats`);
        promise.then(res=>setSession(res.data));
        promise.catch(err=>console.log(err.response.data));
    },[]);

    if(!session){
        return (
            <Loading>Carregando ...</Loading>
        );
    };

    function chair(seat){
        if(seat.isAvailable===false){
            alert("Esse assento não está disponível")
        }else{
            const isSelected=selectedChair.some(s=>seat.id===s.id);
            if(isSelected){
                const newList=selectedChair.filter(s=>seat.id!==s.id);
                setSelectedChair(newList);
            }else{
                setSelectedChair([...selectedChair, seat]);
            }
        };
    };

    return(
        <>  
            <Title>Selecione o(s) assento(s)</Title>
            <Page>
                <Chairs>
                    {session.seats.map(seat=>(
                        <Seat 
                            key={seat.id}
                            seat={seat}
                            chair={chair}
                            isSelected={selectedChair.some(s=> seat.id===s.id)}
                        />
                    ))} 
                </Chairs>
                <Example/>
                <Buyer
                    session={session}
                    selectedChair={selectedChair}
                    setselectedChair={setSelectedChair}
                    setSuccessInfo={setSuccessInfo}
                />
            </Page>
            <Footer 
                title={session.movie.title}
                poster={session.movie.posterURL}
                weekday={session.day.weekday}
                hour={session.name}
            />
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

const Page= styled.div`
    margin-bottom: 150px;
`;

const Chairs= styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 19px;
    justify-content: center;
`;