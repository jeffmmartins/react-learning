import React from "react";
import * as S from "./style"
import { FiShoppingCart } from "react-icons/fi";
import { Products } from "../../data/products";
import { AiFillStar, AiOutlineStar} from "react-icons/ai"
import { useDispatch } from "react-redux";

// esta recebendo a tipagem que foi atribuida no arquivo Data
interface ProductCartProps {
    product: Products
}

// image -nao preciso fechar a tag , pois na pratica é como se fosse a tag img
export const ProductCard: React.FC<ProductCartProps> = ({product}) => {
    
    const dispatch = useDispatch()

    // ao clicar no botão adicionar é despachado a action. que no payload const o produto que foi adicionado 
    const handleAddProductToCart = () => {
        // despachar uma action. precisa usar o usedispatch
        // tenho que passar a action.
        dispatch({
            type: 'cart/add-product',
            payload: product,
        })
    } 

   
    return (
        <S.Card>
            <S.Image src={product.image} alt={product.description} />
            <S.ProductTitle>
                {product.title}
            </S.ProductTitle>

            <S.ReviewPriceContainer>
                <S.Review>
                    {Array.from({length:5}).map(
                        (_,index) => index < Math.round(product.rating.rate)
                        ? (
                            <AiFillStar key={index}/>
                        ) : (
                            <AiOutlineStar key={index}/>
                        ))}
                    ({` ${product.rating.rate}`})
                </S.Review>

                <S.Price>{product.price}</S.Price>
            </S.ReviewPriceContainer>

            <S.AddToCartButtonWrapper>
                <S.AddToCartButton onClick={handleAddProductToCart }>
                    Adicionar Ao Carrinho <FiShoppingCart />
                </S.AddToCartButton>

                <S.RemoveFromCartButton >
                    Remover do Carrinho  <FiShoppingCart />
                </S.RemoveFromCartButton>
            </S.AddToCartButtonWrapper>

        </S.Card>
    )
}