import React from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 80%;
    opacity: .8;
    transition: opacity .2s ease;
    &:hover {
        opacity: 1;
    }
`;

const Header = styled.h1`
    font-size: 45px;
    margin: 0;
    font-weight: 700;
    color: #0065d8;
`;

const SubHeader = styled.h3`
    font-size: 24px;
    margin: 10px 0;
    font-weight: 700;
    color: #000;
`;

const FormGroup = styled.div`
    position: relative;
    display: flex;
    margin-top: 1em;
    height: 52px;
`;

const Input = styled.input`
    border: 1px solid #d9d9d9;
    outline: none;
    padding-left: 1em;
    background-color: #fff;
    font-size: 20px;
    border-radius: 6px;
    height: 100;
    color: #000;
    padding-right: 4em;

    &::placeholder {
        color: #d9d9d9;
    }
`;

const SubscribeButton = styled.button`
    position: absolute;
    right: -10px;
    top: 0;
    height: 100%;
    border: none;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    outline: none;
    color: #fff;
    background-color: #019cff;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    transition: all 100ms ease;
    &:hover {
        background-color: #0065d8;
        transform: translateX(2px);
    }
`;

export function Details(props) {
    return <InfoContainer>
        <InnerContainer>
            <Header>Follow Us!</Header>
            <SubHeader>Subscribe now for latest update.</SubHeader>
            <FormGroup>
                <Input type="text" placeholder="abc@email.com" />
                <SubscribeButton>Subscribe</SubscribeButton>
            </FormGroup>
        </InnerContainer>
    </InfoContainer>
}