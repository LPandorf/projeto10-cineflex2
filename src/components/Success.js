import styled from "styled-components";
import {Link} from "react-router-dom";

export default function Success({successInfo}){
    console.log(successInfo);
    const { movie, date, hour, buyer, cpf, seats } = successInfo;
    return (
        <Wrapper>
            <Title>Pedido feito<br/>com sucesso!</Title>
            <InfoWrapper data-test="movie-info" >
            <NameInfo>Filme e sessão</NameInfo>
                <Info>
                    <p>{movie}</p>
                    <p>{date} - {hour}</p>
                </Info>
            </InfoWrapper>
            <InfoWrapper data-test="seats-info" >
            <NameInfo>Ingressos</NameInfo>
                <Info>
                    {seats.map(s=>
                        <p key={s}>Assento {s}</p>   
                    )} 
                </Info>
            </InfoWrapper>
            <InfoWrapper data-test="client-info">
                <NameInfo>Comprador</NameInfo>
                <Info>
                    <p>Nome: {buyer}</p>
                    <p>Cpf: {cpf}</p>
                </Info>
            </InfoWrapper>
            <Link to="/">
                <button data-test="go-home-btn">Voltar para home</button>
            </Link>
        </Wrapper>
    );
}
const Wrapper =styled.div`
    width: 100%;
    display: flex;;
    flex-direction: column;
    align-items: center;
    button{
        margin-top: 100px;
        width: 225px;
        height: 42px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
        background: #E8833A;
        border-radius: 3px;
        border: 1px solid #E8833A;
        display: flex;
        justify-content: center;
        color: #FFFFFF;
        align-self: center;
    }
`;

const Title= styled.div`
    width: 100%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #247A6B;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NameInfo= styled.div`
    width: 100%;
    margin-top: 50px;
    margin-left: 30px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #293845;
`;

const Info= styled.div`
    width: 100%;
    margin-top: 10px;
    margin-left: 30px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #293845;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const InfoWrapper= styled.div`
    width: 100%;
`;