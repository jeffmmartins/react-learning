import { useState } from "react"

export const RegisterProductForm = ({categories}) => {
    const [productName, setProductName] = useState("")
    const [productWeight, setProductWeight] = useState("")
    const [productCategory, setProductCategory] = useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        console.log({productName,productWeight,productCategory})
        setProductCategory("");
        setProductName("");
        setProductWeight("");
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={productName} onChange={(e) => setProductName(e.target.value) }/>
            <input type="number" value={productWeight} onChange={(e) => setProductWeight(e.target.value)}/>
            <select value={productCategory} onChange={(e)=> setProductCategory(e.target.value)}>
                {categories.map(category=> (
                    <option key={category.slug} value={category.slug}> {category.label}</option>
                ))}
            </select>
            <button type="submit">Cadastrar Produtos</button>
        </form>
    )
}