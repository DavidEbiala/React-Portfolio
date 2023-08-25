import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import movieLogo from './movie-logo.png';
import musicLogo from './music-logo.png';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function BasicExample() {
  return (
    
  <div>
    <Container>
      <Row>

        <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={movieLogo} alt= "Movie-Logo"/>
          <   Card.Body>
          <Card.Title>Netflix & Chill Project</Card.Title>
          <Card.Text>
          Website for movies
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={musicLogo} alt= "Music-Logo" />
          <Card.Body>
          <Card.Title>Symphony Project</Card.Title>
            <Card.Text>
           Music API Website
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>
      </Row>

    </Container>
  </div>
    
  );
}

export default BasicExample;