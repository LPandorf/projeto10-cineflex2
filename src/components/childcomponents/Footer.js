import styled from "styled-components";

export default function Footer({poster, title, weekday, hour}){
    return(
        <Wrapper>
            <Poster>
                <img src={poster} alt={poster}/>
            </Poster>
            <Title>
                <p>{title}</p>
                {weekday && hour && <p>{weekday} - {hour}</p>}
            </Title>
        </Wrapper>
    )
}

const Wrapper= styled.div`
    bottom: 0;
    width: 100%;
    height: 117px;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    position: fixed;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #293845;
`

const Poster=styled.div`
    margin-left: 20px;
    width: 64px;
    height: 89px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 48px;
        height: 72px;
    }
`

const Title=styled.div`
    margin-left: 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #293845;
`