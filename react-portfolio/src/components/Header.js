import React from "react";
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export default function Header(){
return(
    <div>
        <Container>
            <Row>
                <Col>
                    <h1 className="text-end">The Portfolio of Zino Ebiala</h1>
                </Col>
            </Row>
        </Container>
    </div>
)
};