import styled, { keyframes } from "styled-components";
import initialBG from '../../assets/initialBG.jpg';

const zoom = keyframes`
    0% {
        transform: scale(1.1);

    }
    100% {
        transform: scale(1);
    }
`

const overlay = keyframes`
    0% {
        opacity: 0;
    }
    25%{
        opacity: 0;
        backdrop-filter: blur(0px);
    }
    100% {
        opacity: 1;
        backdrop-filter: blur(4px);
    }
`

const moveCta = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-20%);
    }
    50% {
        opacity: 0;
        transform: translateY(-20%);

    },
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

export const InitialPage = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    
    `

export const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${initialBG});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    animation: ${zoom} 1s forwards ease-in-out;
    `

export const Content = styled.div`
    width: 100%;
    height: 100%;
    color: white;
    animation: ${overlay} 1s forwards ease-in-out;
    background: linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.95) 100%);

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Cta = styled.div`
    text-align: center;
    animation: ${moveCta} 2s forwards ease-in-out;
    h1 {
        font-weight: bolder;
    }
    h2 {
        font-weight: normal;
    }
`

export const Btn = styled.button`
    margin-top: 8px;
    background: white;
    border: 0;
    color: black;
    padding: 10px;
    font-weight: 700;
    border-radius: 16px;
`