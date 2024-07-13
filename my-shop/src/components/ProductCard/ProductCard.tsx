import React from "react";
import * as S from "./style"
import { FiShoppingCart } from "react-icons/fi";

// image -nao preciso fechar a tag , pois na pratica é como se fosse a tag img
export const ProductCard: React.FC = () => {
    return(
        <S.Card>
            <S.Image src="" alt=""/>
            <S.ProductTitle>
                Mens Casual Slim Fit T-Shirts
            </S.ProductTitle>

            <S.ReviewPriceContainer>
                <S.Review>4.1</S.Review>

                <S.Price>$22.30</S.Price>
            </S.ReviewPriceContainer>

            <S.AddToCartButton>
                Adicionar Ao Carrinho <FiShoppingCart/>
            </S.AddToCartButton>
        </S.Card>
    )
}