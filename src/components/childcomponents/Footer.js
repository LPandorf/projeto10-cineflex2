import styled from "styled-components";

export default function Footer(){
    return(
        <Wrapper>
            Footer
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