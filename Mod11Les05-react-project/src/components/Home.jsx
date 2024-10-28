import { Row, Col, Image, Container, Button, Card } from 'react-bootstrap'

const Home = () => {


    return (
        <Container className='ms-1 my-2 border border-3 border-danger rounded-3 bg-warning' fluid>
            <Row className='p-2 justify-content-lg-center'>
                <Col lg={6}>
                    <h1 className="my-3 text-dark p-1">Marvel App Homepage</h1>
                    
                    <Button variant='primary' className='m-1 p-2 px-3 border border-dark border-1 shadow-lg'>Shop Now!</Button> 

                    <Card style={{ width: 'auto' }} className='my-3 border border-danger border-3 bg-secondary'>
                        <Card.Body>
                            <Card.Title className='text-light mb-3'>Buy a Comic to Meet Robert Downey Jr.!</Card.Title>
                            <Card.Text className='text-light'>
                            Buy today and win a trip to meet Robert Downey Jr. as Dr. Doom or Ironman today
                            </Card.Text>
                            <Card.Link href="/comics"activeclassname="active" className='link-opacity-10-hover text-light bg-danger m-1 p-2 border rounded-3 border-dark border-1 shadow-lg'>Buy a Comic Today</Card.Link>
                        </Card.Body>
                    </Card>   
                </Col>
                <Col className='align-content-center text-center'>
                    <Image id='ironman'src="../src/assets/ironman.jpeg" width="1000px" height="auto"rounded fluid/>
                </Col>
                
            </Row>
        </Container>
        // <div>
        //     <h1>Marvel Characters</h1>
        //     <p>Home page</p>

        // </div>
    );
};

export default Home;

