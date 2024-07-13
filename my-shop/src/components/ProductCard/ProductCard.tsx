import React from "react";
import * as S from "./style"
import { FiShoppingCart } from "react-icons/fi";
import { Products } from "../../data/products";
import { AiFillStar} from "react-icons/ai"

// esta recebendo a tipagem que foi atribuida no arquivo Data
interface ProductCartProps {
    product: Products
}

// image -nao preciso fechar a tag , pois na pratica é como se fosse a tag img
export const ProductCard: React.FC<ProductCartProps> = ({product}) => {
    console.log(product)
    return (
        <S.Card>
            <S.Image src={product.image} alt={product.description} />
            <S.ProductTitle>
                {product.title}
            </S.ProductTitle>

            <S.ReviewPriceContainer>
                <S.Review>
                    {}
                    {product.rating.rate}
                </S.Review>

                <S.Price>{product.price}</S.Price>
            </S.ReviewPriceContainer>

            <S.AddToCartButtonWrapper>
                <S.AddToCartButton>
                    Adicionar Ao Carrinho <FiShoppingCart />
                </S.AddToCartButton>
            </S.AddToCartButtonWrapper>

        </S.Card>
    )
}