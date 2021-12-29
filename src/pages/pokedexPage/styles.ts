import styled from "styled-components";

export const PokedexPage = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const PokemonCard = styled.div`
    position: relative;

    display: flex;
    flex-basis: 25%;
    flex-direction: column;
    align-items: center;

    img {
        width: 220px;
        margin-bottom: 16px;
        filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.25));
        cursor: pointer;
        transition: all 0.5s ease;
        
        &:hover {
            transform: scale(1.1);
        }
    }

    p {
        margin-bottom: 16px;
    }
`


export const CardBackground = styled.div`
    position: absolute;
    width: calc(220px + 10%);
    height: 50%;
    background:#f9f9f9;
    bottom: 0;
    z-index: -1;

    border-radius: 16px;
    
    &:hover {
        filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.15));
    }
`