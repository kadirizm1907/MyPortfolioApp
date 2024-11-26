import Card from 'react-bootstrap/Card';
import back from "../img/hexagon.png";
import { useNavigate } from "react-router-dom"

const PrivateRouter = () => {
  const navigate = useNavigate()

  return (
      <Card id='cardPR' onClick={() => navigate("/")} >
        <Card.Img variant="top" src={back}/>
        <Card.Body>
          <Card.Text id='textPR' >
            HERE IS MY PORTFOLIO🌞🔥
          </Card.Text>
        </Card.Body>
      </Card>
  )
}

export default PrivateRouter