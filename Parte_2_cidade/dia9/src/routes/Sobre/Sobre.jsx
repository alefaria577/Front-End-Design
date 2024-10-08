import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './sobre.css'
import Imagem from '../../assets/natureza.jpg'

const Sobre = ()=>{
    return(
    <section className='container'>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Imagem} />
      <Card.Body>
        <Card.Title>Foto 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Imagem} />
      <Card.Body>
        <Card.Title>Foto 2</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Imagem} />
      <Card.Body>
        <Card.Title>Foto 3</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        
    </section>


    )


}
export default Sobre