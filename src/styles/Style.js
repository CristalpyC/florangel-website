import styled from 'styled-components';

export const Text = styled.p`
    font-family: var(--mongolian);
    background-color: ${({ bgcolor }) => bgcolor};
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

export const Wavy = styled.img`
    width: 100%;
    height: 100%;
    margin-top: -1rem;
`

export const FooterLine = styled.div`
    padding: 25px;
    width: 100%;
`

export const Message = styled.p`
    font-family: var(--mclaren);
    color: ${({ textcolor }) => textcolor};
    font-weight: bold;
    text-align: center;

    @media screen and (width <= 917px){
        font-size: 3vmin;
    }
`

export const LogoContainer = styled.div`
    display: flex;
    font-family: var(--mclaren);
`

export const Img = styled.img`
    width: 3rem;
`

export const H2 = styled.h2`
    @media screen and (width <= 266px){
        display: none;
    }
`