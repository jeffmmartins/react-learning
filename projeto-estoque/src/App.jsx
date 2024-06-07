
import './App.css'
import { DefaultTemplate } from './components/template/DefaultTemplate';

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
    }
 ];

  return (
    <>
      <DefaultTemplate>
        <h1>Teste</h1>
      </DefaultTemplate>
    </>
  )
}

export default App
