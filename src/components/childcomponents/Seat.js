import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Seat({seat, isSelected, chair}){
    const [color,setColor]= useState("#C3CFD9");
    const [border,setBorder]= useState("#808F9D");

    useEffect(()=>{
        if(isSelected){
            setColor("#1AAE9E");
            setBorder("#0E7D71");
        }else{
            if(seat.isAvailable){
                setColor("#C3CFD9");
                setBorder("#808F9D");
            }else{
                setColor("#FBE192");
                setBorder("#F7C52B");
            }
        }
    })

    return (
        <Wrapper color={color} border={border} onClick={()=>chair(seat)} >
            {seat.name}
        </Wrapper>
    )
}

const Wrapper= styled.div`
    width: 26px;
    height: 26px;
    background: ${props=>props.color};
    border: 1px solid ${props=>props.border};
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #000000;
`