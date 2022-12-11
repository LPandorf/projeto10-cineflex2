import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { URL } from "../../Constants";

export default function Buyer({session, selectedChair, setselectedChair, setSuccessInfo}){
    const [form,setForm] =useState({ name: "", cpf: "" });
    const navigate=useNavigate();

    function forms(e){
        const {name,value}=e.target;
        setForm({...form, [name]:value});
    }

    function buy(e){
        e.preventDefault();

        const body={
            ids: selectedChair.map(s=>s.id),
            ...form
        };

        const info={
            movie: session.movie.title,
            date: session.day.date,
            hour: session.name,
            buyer: form.name,
            cpf: form.cpf,
            seats: selectedChair.map(s=>s.name)
        }

        const promise=axios.post(`${URL}/seats/bookmany`, body);
        promise.then(res=>{
            setSuccessInfo(info)
            setselectedChair([])
            navigate("/sucesso")
        });
        promise.catch(err=>alert(err.response.data));
    }
    
    return (
        <Form onSubmit={buy}>
            Nome do comprador:
            <input 
                placeholder="Digite seu nome..."
                name="name"
                value={form.name}
                onChange={forms}
                type="text"
            />
            CPF do comprador:
            <input 
                placeholder="Digite seu CPF..."
                name="cpf"
                value={form.cpf}
                onChange={forms}
                type="number"
            />
            <button type="submit">Reservar Assento(s)</button>
        </Form>
    )
}

const Form= styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    flex-direction: column;
    margin: 24px;
    color: #293845;
    button{
        align-self: center;
        background: #E8833A;
        border: 1px solid #E8833A;
        border-radius: 3px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        letter-spacing: 0.04em;
        width: 225px;
        height: 42px;
        color: #FFFFFF;
        margin-top: 50px;
    }
    input{
        box-sizing: border-box;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        color: #AFAFAF;
        margin-top: 3px;
        margin-bottom: 10px;
    }
`
