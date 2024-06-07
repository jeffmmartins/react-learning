import { useState } from "react"

export const RegisterProductForm = ({categories}) => {
    /*
    const [productName, setProductName] = useState("")
    const [productWeight, setProductWeight] = useState("")
    const [productCategory, setProductCategory] = useState("")
    */

    const [formData, setFormData] = useState({
        productName: "",
        productWeight: "",
        productCategory: ""
    })

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
        setFormData({
            productName: "",
            productWeight: "",
            productCategory: ""
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={formData.productName} onChange={(e) => setFormData({...formData, productName: e.target.value}) }/>
            <input type="number" value={formData.productWeight} onChange={(e) => setFormData({...formData, productWeight: e.target.value})}/>
            <select value={FormData.productCategory} onChange={(e)=> setFormData({...formData, productCategory: e.target.value})}>
                {categories.map(category=> (
                    <option key={category.slug} value={category.slug}> {category.label}</option>
                ))}
            </select>
            <button type="submit">Cadastrar Produtos</button>
        </form>
    )
}