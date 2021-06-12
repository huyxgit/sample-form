import React from "react";
import styled from "styled-components";
import { Details } from "./details";
import { SideImage } from "./sideimage";

const MainContainer = styled.div`
    width: 1000px;
    height: 500px;
    display: flex;
    border-radius: 8px;
    position: relative;
    background-color: rgba(255, 255, 255, 1);
    backdrop-filter: blur(10px);
    box-sizing: border-box;
`;

const Footer = styled.div`
    text-align: center;
    margin-top: 4em;
    color: white;
    font-weight: 700;
    & > a {
        text-decoration: none;
        color: white;
    }

`;

export default function Newsletter(props) {
    return <div>
        <MainContainer>
            <Details />
            <SideImage />
        </MainContainer>

        <Footer><a href='https://www.github.com/huynguyez'>Huy Nguyen on ReactJS</a></Footer>

    </div>
}