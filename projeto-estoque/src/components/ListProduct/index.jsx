import { CardProduct } from "../CradProduct";
export const ListProduct = ({productList, removeProductFromProductlist}) => {
    return (
        <ul>
          {productList.map(({ product }) => {
            return (
              <CardProduct
                key={product.id}
                product = {product}
                removeProductFromProductlist={removeProductFromProductlist}
              />
            );
          })}
        </ul>
    )
}