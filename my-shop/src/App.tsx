import styled from "styled-components"

// criando um componente estilizado que é um h1
// no html é rendenrizado como H1 e com classe aleatória.
const Title = styled.h1`
font-size: 2rem;
color: red;

p {
  color: blue;
}
`

function App() {
  

  return (
    <>
      <Title>My Shop
        <p>llakaklskssskl</p>
      </Title>
    </>
  )
}

export default App
