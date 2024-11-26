import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom"

const PrivateRouter = () => {
  const navigate = useNavigate()

  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={() => navigate("private")}>Do you have not an account?</Button>
      </Card.Body>
    </Card>
  )
}

export default PrivateRouter