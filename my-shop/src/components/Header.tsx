import {FiLogIn, FiLogOut} from "react-icons/fi"
import { MdShoppingCartCheckout } from "react-icons/md";
import { useState } from "react";
import React from "react";
import { Cart } from "./Cart/Cart";
import * as S from "./Style"
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../redux/root.reducer";

export const Header: React.FC = () => {
    //Retornando os dados do usuaio logado
    // passa uma função que vai receber o reducer raiz 
    // selecionando o estado que ta guardando dentro do reducer
    const {user} =  useSelector((rootReducer: RootReducer) => rootReducer.userReducer)
    

    const [showCart, setShowCart] = useState(false)
    const isLogged = user !== null;
    const dispatch = useDispatch()

    // função responsavel para diespachar
    function handleUserAuth() {
        // usuario nao esta logado 
        if (user === null) {
            // despachar a action de login 
            dispatch({
                type: 'user/login',
                payload: {
                    nane: 'Jefferson',
                    email: 'teste1@gmail.com'
                }
            })
        } else {
            dispatch({
                type: 'user/logout'
            })
        }
    }

    return (
        <>
            <S.StyledHeader>
                {/*Envolvendo tudo em uma div que foi nomeado de Wrapper*/}
                <S.Wrapper>
                    <S.HeaderTitle>My Shop</S.HeaderTitle>

                    {/*Envolvendo os button em uma div que foi nomeado de buttonWrapper*/}
                    <S.ButtonWrapper>
                        <S.AutButton isLogged={isLogged} onClick={handleUserAuth}>
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