import styled from "styled-components";

export default function Example(){
    return (
        <Wrapper>
            <Selected>
                <CircleSelected></CircleSelected>
                Selecionado
            </Selected>
            <Availeble>
                <CircleAvaileble></CircleAvaileble>
                Disponível
            </Availeble>
            <Unavaileble>
                <CircleUnavaileble></CircleUnavaileble>
                Indisponível
            </Unavaileble>
        </Wrapper>
    );
}

const Wrapper= styled.div`
    width: 100%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    letter-spacing: -0.013em;
    color: #4E5A65;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
`;

const Selected= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CircleSelected= styled.div`
    width: 25px;
    height: 25px;
    background: #1AAE9E;
    border: 1px solid #0E7D71;
    border-radius: 17px;
    margin: 5px;
`;

const Availeble= styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CircleAvaileble= styled.div`
    width: 24px;
    height: 24px;
    background: #C3CFD9;
    border: 1px solid #7B8B99;
    border-radius: 17px;
    margin: 5px;
`;

const Unavaileble= styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CircleUnavaileble= styled.div`
    width: 24px;
    height: 24px;
    background: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 17px;
    margin: 5px;
`;