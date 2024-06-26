export const CardProduct = ({ product }) => {
    return (
       <li>
          <h3>{product.productName}</h3>
          <p>{product.productWeight} kg</p>
          <button onClick={() => removeProductFromProductlist(product.id)}>Remover</button>
       </li>
    );
 };