import "./App.css";
import { useState } from "react";
import { RegisterProductForm } from "./components/RegisterProductForm";
import { DefaultTemplate } from "./components/template/DefaultTemplate";
import { v4 as uuidv4 } from 'uuid';
import { ListProduct } from "./components/ListProduct";
import { ListCategories } from "./components/ListCategories";

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
    const newProduct = {...formData, id: uuidv4(), productWeight: Number(formData.productWeight)} // vem as informações do objeto e alterando o productweight
    setProductList([...productList, newProduct])
    console.log(newProduct)
  }

  const removeProductFromProductlist = (productId) => {
    const newProduct = productList.filter((product) => {
      return product.id !== productId
    });
    setProductList(newProduct)
    // retorna tudo, menos o que eu quero remover.
  }

  return (
    <>
      <DefaultTemplate>
        <ListCategories categories={categories}/>
        <RegisterProductForm categories={categories} addProductList={addProductList}/>
        <ListProduct productList={productList} removeProductFromProductlist={removeProductFromProductlist}/>
      </DefaultTemplate>
    </>
  );
}

export default App;
