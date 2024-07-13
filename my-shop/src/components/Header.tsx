import {FiLogIn} from "react-icons/fi"
import { MdShoppingCartCheckout } from "react-icons/md";
import React from "react";
import * as S from "./Style"

export const Header: React.FC = () => {
    return (
        <>
            <S.StyledHeader>
                {/*Envolvendo tudo em uma div que foi nomeado de Wrapper*/}
                <S.Wrapper>
                    <S.HeaderTitle>My Shop</S.HeaderTitle>

                    {/*Envolvendo os button em uma div que foi nomeado de buttonWrapper*/}
                    <S.ButtonWrapper>
                        <S.AutButton>
                            Login
                            <FiLogIn/>
                        </S.AutButton>

                        <S.CartButton> 
                            Carrinho
                            <MdShoppingCartCheckout/>
                        </S.CartButton>
                    </S.ButtonWrapper>

                </S.Wrapper>
            </S.StyledHeader>

        </>
    )
}