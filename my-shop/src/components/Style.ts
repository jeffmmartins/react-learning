import styled from "styled-components";

// nomeando como styledHeader para nao gerar conflito
export const StyledHeader = styled.header`
background-color: navy;
`
export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

max-width: 1240px;
margin: 0 auto;
padding: 0 2rem;
height: 60px;
`

export const HeaderTitle = styled.h1`
color: white;
`

export const AutButton = styled.button`
border: none;
border-radius: 5px;
height: 30px;
padding: 0 2rem;
background-color: green;
color: white;

display: flex;
align-items: center;
`

export const ButtonWrapper = styled.div`
display: flex;
gap: 1rem;
`

export const CartButton = styled.button`
border: none;
border-radius: 5px;
height: 30px;
padding: 0 2rem;
background-color: violet;
color: white;

display: flex;
align-items: center;
`