import { ProductCard } from "../ProductCard/ProductCard"
import * as S from "./style"

export const ProductList: React.FC = () => {
    return (
        <>
            <S.Container>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </S.Container>
        </>
    )
}