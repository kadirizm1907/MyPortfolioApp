import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate, Outlet } from "react-router-dom";

const MyProjects = () => {
    const navigate = useNavigate();
    const [projectType, setProjectType] = useState("MY"); // Varsayılan metin

    const handleNavigation = (type, path) => {
        setProjectType(type); // Proje türünü güncelle
        navigate(path); // Yönlendirme yap
    };

    return (
        <div className="container text-center mt-5 mb-5">
            <div className="mt-5">
                <h1>SOME OF {projectType} PROJECTS</h1>
            </div>
            <Row className="container cursor text-center mt-4">
                <Col lg={4} md={4} sm={12}>
                    <div
                        id="splash"
                        className="pointer-event pe-auto mt-2"
                        onClick={() => handleNavigation("JS", "js")}
                    >
                        JS
                    </div>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <div
                        id="splash2"
                        className="mt-2"
                        onClick={() => handleNavigation("REACT", "react")}
                    >
                        REACT
                    </div>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <div
                        id="splash3"
                        className="mt-2"
                        onClick={() => handleNavigation("HTML-CSS", "html")}
                    >
                        HTML-CSS
                    </div>
                </Col>
            </Row>
            < Outlet />
        </div>
    );
};

export default MyProjects;
