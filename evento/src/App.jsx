import './App.css'

function App() {
  
  function handleSubmit() {
    console.log("clicou")
  }

  function handleScroll(event) {
    console.log(event)
  }

  window.addEventListener("scroll", handleScroll)

  return (
    <div style={{height: "200vh"}}>
      <button onClick={handleSubmit} onMouseMove={handleSubmit}>clique aqui</button>
    </div>
  )
}

export default App
