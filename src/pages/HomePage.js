import React from "react";
import { Col, Row, Container, Card, CardBody, CardHeader, Button } from "reactstrap";

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col className='justify-content-center'>
          <h1> Want To Find Your Forever Best Friend?</h1>
          <p>Puppy Love is the first dating-app style platform that matches people with pets!</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button>Create an Account</Button>
          <Button>Log In</Button>
        </Col>
      </Row>
      <Row>
        <Col col='sm-6'>
          <Card className="card text-center">
            <CardHeader>Create a profile</CardHeader>
            <CardBody>See all swiped favorite cats and dogs in one place</CardBody>
				  </Card>
			  </Col>
			  <Col col='sm-6'>
          <Card className="card text-center">
            <CardHeader>Complete a Pet Parent Questionnaire</CardHeader>
            <CardBody>
              Tell us what kind of pet you are looking for and we will show you only relevant matches!
            </CardBody>
				  </Card>
			  </Col>
			  <Col col='sm-6'>
          <Card className="card text-center">
            <CardHeader>Browse all available cats and dogs</CardHeader>
            <CardBody>Click on each pet profile to see more information about them</CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
