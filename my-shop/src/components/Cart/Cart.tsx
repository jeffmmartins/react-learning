import { useSelector } from "react-redux"
import * as S from "./style"
import { RootReducer } from "../../redux/root.reducer"

interface CartProps {
    showCart: boolean
}
export const Cart: React.FC <CartProps> = ({showCart}) => {
    // para pegar os itens que está no carrinho 
    const {cart} = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer)

    const cartTotal = cart.reduce((totalCart, product) => {
        return product.price + totalCart
    },0)

    return (
        <>
            <S.Container showCart={showCart}>
                <S.Title>Carrinho</S.Title>

                <S.CartProductList>
                    {cart.map((product) => (
                        <S.CartProductItem key={product.id}>
                            <S.WeigthLetter>{product.title} -</S.WeigthLetter> ${product.price}</S.CartProductItem>
                    ))}
                </S.CartProductList>

                <S.CartTotal>
                    Total: $ 0,00
                </S.CartTotal>
            </S.Container>
        </>
    )
}