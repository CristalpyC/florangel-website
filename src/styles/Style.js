import styled from 'styled-components';

export const Text = styled.p`
    font-family: var(--mongolian);
    background-color: ${({ bgColor }) => bgColor};
    margin-bottom: 1rem;

    @media screen and (width <= 917px){
        font-size: 4vmin;
    }
`

export const TextLine = styled.p`
    font-family: var(--mongolian);
    background-color: #FFFF;
    color: #EA7DCB;

    @media screen and (width <= 917px){
        font-size: 4vmin;
    }
`

export const Title = styled.h2`
    font-family: var(--macondo);
    margin-bottom: 1rem;
    color: #185B6B;

    @media screen and (width <= 917px){
        font-size: 5vmin;
    }
`

export const Titleh1 = styled.h1`
    font-family: var(--macondo);
    margin-bottom: 1rem;
    font-size: 2.3rem;
    text-align: center;
    color: #000000;

    @media screen and (width <= 917px){
        font-size: 5vmin;
    }
`