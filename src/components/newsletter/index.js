import React from "react";
import styled from "styled-components";
import { Details } from "./details";
import { SideImage } from "./sideimage";

const CardContainer = styled.div`
    width: 1100px;
    height: 500px;
    display: flex;
    border-radius: 10px;
    position: relative;
    /* border: 1px solid #fff; */
    background-color: rgba(255, 255, 255, 1);
    backdrop-filter: blur(10px);
`;

export default function Newsletter(props) {
    return <CardContainer>
        <Details />
        <SideImage />
    </CardContainer>
}