
import { Col, Row } from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router-dom'

const MyProjects = () => {
    const navigate = useNavigate()
    return (
        <div className="container text-center mt-5">
            <div className='mt-5'>
                <h1>SOME OF MY PROJECTS</h1>
            </div>
            <Row className='container text-center mt-4'>
                <Col lg={4} md={4} sm={12}>
                <div id='splash' className=' mt-2' onClick={() => navigate("js")}>JS</div>
                </Col>
                <Col lg={4} md={4} sm={12}>
                <div id='splash2' className=' mt-2' onClick={() => navigate("react")}>REACT</div>
                </Col>
                <Col lg={4} md={4} sm={12}>

                <div id='splash3' className=' mt-2' onClick={() => navigate("html")}>HTML-CSS</div>
                </Col>
                
            </Row>

            < Outlet />
        </div>
    )
}

export default MyProjects