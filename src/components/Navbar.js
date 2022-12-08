import styled from "styled-components";

export default function Navbar(){
    return (
        <Header>
            CINEFLEX
        </Header>
    );
}

const Header=styled.div`
    width: 100%;
    height: 67px;
    left: 0px;
    top: 0px;
    background: #C3CFD9;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #E8833A;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
`;