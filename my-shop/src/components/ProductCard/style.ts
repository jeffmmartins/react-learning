import styled from "styled-components"

// Dica: é imaginar o que vc colocaria no HTML na hora da construção da tag e aplicar aqui. 
//olha para o Layout e ver oq ue vai precisar e depois monta o HTML
export const Card = styled.article`
background-color: white;
width: 100%;
padding: 1rem;
margin: 0 auto;
`

export const Image = styled.img`
width: 90%;

`

export const ProductTitle = styled.h2`
font-weight: 500;
font-size: 1.2rem;
`

export const ReviewPriceContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
export const AddToCartButtonWrapper = styled.div`
display: flex;
justify-content: center;
`

export const Review = styled.span``

export const Price = styled.strong``

export const AddToCartButton = styled.button`
display: flex;
align-items: center;
gap: 0.5rem;
`

