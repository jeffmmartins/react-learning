import "./App.css";
import { useState } from "react";
import { CardProduct } from "./components/CradProduct";
import { RegisterProductForm } from "./components/RegisterProductForm";
import { DefaultTemplate } from "./components/template/DefaultTemplate";

function App() {
  const fruitList = [
    {
      productName: "Banana",
      productWeight: 20,
      productCategory: "frutas",
    },
    {
      productName: "Morango",
      productWeight: 5,
      productCategory: "frutas",
    },
    {
      productName: "Uva",
      productWeight: 12,
      productCategory: "frutas",
    },
    {
      productName: "Maçã",
      productWeight: 20,
      productCategory: "frutas",
    },
  ];

  const categories = [
    {
      slug: "frutas",
      label: "Frutas",
    },
    {
      slug: "legumes",
      label: "Legumes",
    },
    {
      slug: "ovos",
      label: "Ovos",
    },
  ];

  const [productList, setProductList] = useState(fruitList)

  
  //const [count, setCount] = useState(0) forjando um id unico

  const addProductList = (formData) => {
    const newProduct = {...formData, id: count, productWeight: Number(formData.productWeight)} // vem as informações do objeto e alterando o productweight

    setProductList([...productList, newProduct])
    setCount(count + 1)
    console.log(newProduct)
  }
  return (
    <>
      <DefaultTemplate>
        <h1>Meu Estoque:</h1>
        <ul>
          {categories.map(({ label, slug }) => (
            <li key={slug}>{label}</li>
          ))}
        </ul>
        <RegisterProductForm categories={categories} addProductList={addProductList}/>
        <ul>
          {productList.map(({ productName, productWeight }) => {
            return (
              <CardProduct
                key={productName}
                productName={productName}
                productWeight={productWeight}
              />
            );
          })}
        </ul>
      </DefaultTemplate>
    </>
  );
}

export default App;
