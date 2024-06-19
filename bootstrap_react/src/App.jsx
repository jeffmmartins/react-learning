import Card from 'react-bootstrap/Card'
import CardHeader from 'react-bootstrap/esm/CardHeader'

function App() {
  

  return (
    <>
      <Card bg='dark' text='white' className='m-5'>
        <CardHeader>Nootbook</CardHeader>
      </Card>
      <div className='card bg-dark text-white m-5'>
      <div className='card-header'>Nootbook</div>
      <div className='card-body'>
        <h5 className='card-tittle'>2500</h5>
        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
    </div>
    </>
  )
}

export default App
