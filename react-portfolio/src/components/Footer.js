import React from "react";
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import GitHub from './utils/GitHub.png';
import LinkedIn from './utils/LinkedIn.png';


export default function Footer(){
return(
    <div>
        <Container>
            <Row>
                <Col className="align-items-center col-6">
                <Image src={GitHub}/>
                </Col>
                <Col className="align-items-center col-6">
                <Image src={LinkedIn}/>
                </Col>
            </Row>
        </Container>
    </div>
)
};