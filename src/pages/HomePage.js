import React from "react";
import { Col, Row, Container, Card, CardBody, CardHeader, Button } from "reactstrap";

const HomePage = () => {
  return (
    <Container style={{ backgroundColor: "blueviolet" }}>
      <Row>
        <Col className="header">
          <h1> Want To Find Your Forever Best Friend?</h1>
        </Col>
      </Row>
      <Row>
        <Col className="header-two">
          <p>Puppy Love is the first dating-app style platform that matches people with pets!</p>
        </Col>
      </Row>

      <Row>
        <Col style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "50px" }}>
          <h2>Here's How It Works:</h2>
        </Col>
      </Row>

      <Row>
        <Col col="sm-6">
          <Card className="card text-center">
            <CardHeader style={{ backgroundColor: "violet" }}>Create a profile</CardHeader>
            <CardBody>See all swiped favorite cats and dogs in one place</CardBody>
          </Card>
        </Col>
        <Col col="sm-6" style={{ marginBottom: "50px" }}>
          <Card className="card text-center">
            <CardHeader style={{ backgroundColor: "violet" }}>Complete a Pet Parent Questionnaire</CardHeader>
            <CardBody>
              Tell us what kind of pet you are looking for and we will show you only relevant matches!
            </CardBody>
          </Card>
        </Col>
        <Col col="sm-6">
          <Card className="card text-center">
            <CardHeader style={{ backgroundColor: "violet" }}>Browse all available cats and dogs</CardHeader>
            <CardBody>Click on each pet profile to see more information about them</CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Button style={{ marginBottom: "50px", backgroundColor: "purple", color: "blanchedalmond" }}>Log In</Button>
          <Button
            style={{ marginBottom: "50px", marginLeft: "10px", color: "blanchedalmond", backgroundColor: "purple" }}
          >
            Create an Account
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
