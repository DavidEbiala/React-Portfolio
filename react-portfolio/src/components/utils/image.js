import React from 'react';
import logo from './Zino.jpeg'; // Tell webpack this JS file uses this image
import movieLogo from './movie-logo.png';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

console.log(logo); // /logo.84287d09.png

function Logo() {
  // Import result is the URL of your image
  return(
    <Container>
        <Row>
        <Col xs={6} md={4}>
            <Image src={logo} alt="Logo" rounded/>
        </Col>
        </Row>
    </Container>
  );
}

function Logo2(){
    return <img src ={movieLogo} alt= "Movie-Logo" />;
}

export default Logo;