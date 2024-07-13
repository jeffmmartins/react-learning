import React from "react";
import * as S from "./style"
import { FiShoppingCart } from "react-icons/fi";

// image -nao preciso fechar a tag , pois na pratica é como se fosse a tag img
export const ProductCard: React.FC = () => {
    return (
        <S.Card>
            <S.Image src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
            <S.ProductTitle>
                Mens Casual Slim Fit T-Shirts
            </S.ProductTitle>

            <S.ReviewPriceContainer>
                <S.Review>4.1</S.Review>

                <S.Price>$22.30</S.Price>
            </S.ReviewPriceContainer>

            <S.AddToCartButtonWrapper>
                <S.AddToCartButton>
                    Adicionar Ao Carrinho <FiShoppingCart />
                </S.AddToCartButton>
            </S.AddToCartButtonWrapper>

        </S.Card>
    )
}