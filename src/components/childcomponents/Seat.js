import styled from "styled-components";

export default function Seat({seat}){
    return (
        <Wrapper>
            {seat.name}
        </Wrapper>
    )
}

const Wrapper= styled.div`
    width: 26px;
    height: 26px;
    background: #C3CFD9;
    border: 1px solid #808F9D;
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