import { CardProduct } from "../CradProduct";
export const ListProduct = ({productList}) => {
    return (
        <ul>
          {productList.map(({ id, productName, productWeight }) => {
            return (
              <CardProduct
                key={id}
                productName={productName}
                productWeight={productWeight}
              />
            );
          })}
        </ul>
    )
}