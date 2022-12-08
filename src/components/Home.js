import styled from "styled-components";

export default function Home(){
    return (
        <Title>Selecione o filme</Title>
    );
}

const Title= styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.04em;
    color: #293845;
`;