import React from "react";
import styled from "styled-components";
import CityImage from "./../../assets/svg/city.svg";

const SideImageContainer = styled.div`
    max-width: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    position: relative;
    background: rgb(148, 147, 247);
    background: linear-gradient(217deg, rgba(148, 147, 247, 1) 0%, rgba(218, 194, 221, 1) 100%);
    clip-path: polygon(9% 0, 100% 0, 100% 100%, 0% 100%);

    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`;

const Image = styled.div`
    width: auto;
    height: 22em;
    img {
        width: auto;
        height: 100%;
    }
`;
export function SideImage(props) {
    return <SideImageContainer>
        <Image>
            <img src={CityImage} alt="" />
        </Image>
    </SideImageContainer>

}