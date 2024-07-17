import { useSelector } from "react-redux"
import * as S from "./style"
import { RootReducer } from "../../redux/root.reducer"

interface CartProps {
    showCart: boolean
}
export const Cart: React.FC <CartProps> = ({showCart}) => {
    // para pegar os itens que está no carrinho 
    const {cart} = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer)

    return (
        <>
            <S.Container showCart={showCart}>
                <S.Title>Carrinho</S.Title>

                <S.CartProductList>
                    {cart.map((product) => (
                        <S.CartProductItem key={product.id}>{product.title}</S.CartProductItem>
                    ))}
                </S.CartProductList>
            </S.Container>
        </>
    )
}