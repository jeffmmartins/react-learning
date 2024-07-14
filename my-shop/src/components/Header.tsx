import {FiLogIn, FiLogOut} from "react-icons/fi"
import { MdShoppingCartCheckout } from "react-icons/md";
import { useState } from "react";
import React from "react";
import { Cart } from "./Cart/Cart";
import * as S from "./Style"

export const Header: React.FC = () => {
    const [showCart, setShowCart] = useState(false)
    const isLogged = false;

    return (
        <>
            <S.StyledHeader>
                {/*Envolvendo tudo em uma div que foi nomeado de Wrapper*/}
                <S.Wrapper>
                    <S.HeaderTitle>My Shop</S.HeaderTitle>

                    {/*Envolvendo os button em uma div que foi nomeado de buttonWrapper*/}
                    <S.ButtonWrapper>
                        <S.AutButton isLogged={isLogged}>
                            {isLogged ? "Logout" : "login"}
                            { isLogged ? <FiLogOut/> :   <FiLogIn/>}
                        </S.AutButton>

                        <S.CartButton onClick={() => setShowCart(!showCart)}> 
                            Carrinho
                            <MdShoppingCartCheckout/>
                        </S.CartButton>
                    </S.ButtonWrapper>
                </S.Wrapper>
                <Cart showCart={showCart}/>
            </S.StyledHeader>

        </>
    )
}