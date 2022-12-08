import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Session({movie}){
    return (
        <Weekday>
            {movie.weekday} - {movie.date}
            <Time>
                {movie.showtimes.map((t)=>(
                    <Link key={t.name} to={`/assentos/${t.id}`} >
                        <Button>{t.name}</Button>
                    </Link>
                ))}
            </Time>
        </Weekday>
    );
}

const Weekday=styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    letter-spacing: 0.02em;
    color: #293845;
    width: 100%;
    margin-bottom: 40px;
    margin-left: 10px;
`
const Time = styled.div`
    display: flex;
`
const Button = styled.div`
    width: 83px;
    height: 43px;
    background: #E8833A;
    border-radius: 3px;
    margin-right: 8px;
    margin-top: 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
`