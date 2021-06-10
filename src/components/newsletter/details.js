import React from "react";
import styled from "styled-components";

const DetailsContainer = styled.div`
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
    margin: 0;
    color: #0065d8;
    font-weight: 700;
    font-size: 45px;
`;

const SubHeader = styled.h3`
    margin: 10px 0;
    color: #000;
    font-weight: 700;
    font-size: 24px;
`;

const Text = styled.p`
    color: #000;
    font-weight: 500;
    font-size: 20px;
`;

const FormGroup = styled.div`
    display: flex;
    position: relative;
    height: 52px;
    margin-top: 1em;
`;

const EmailInput = styled.input`
    outline: none;
    border: 1px solid #d9d9d9;
    background-color: #fff;
    padding-left: 1em;
    border-radius: 6px;
    font-size: 20px;
    color: #000;
    height: 100;
    padding-right: 5em;

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
    return <DetailsContainer>
        <InnerContainer>
            <Header>Hey there!</Header>
            <SubHeader>Subscribe now for weekly content..</SubHeader>
            <Text>You will never miss anything from us!</Text>
            <FormGroup>
                <EmailInput type="text" placeholder="abc@email.com" />
                <SubscribeButton>Subscribe</SubscribeButton>
            </FormGroup>
        </InnerContainer>
    </DetailsContainer>
}