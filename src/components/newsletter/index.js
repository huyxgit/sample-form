import React from "react";
import styled from "styled-components";
import { Details } from "./details";
import { SideImage } from "./sideimage";

const MainContainer = styled.div`
    width: 1000px;
    height: 500px;
    display: flex;
    border-radius: 10px;
    position: relative;
    background-color: rgba(255, 255, 255, 1);
    backdrop-filter: blur(10px);
    box-sizing: border-box;
`;

export default function Newsletter(props) {
    return <MainContainer>
        <Details />
        <SideImage />
    </MainContainer>
}