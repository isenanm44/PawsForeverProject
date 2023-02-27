import React from "react";
import { Col, Row, Container, Card, CardBody, CardHeader, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

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
            <CardHeader style={{ backgroundColor: "violet" }}>First, create a profile</CardHeader>
            <CardBody>Keep Track of The Animals You Have Matched With</CardBody>
          </Card>
        </Col>
        <Col col="sm-6" style={{ marginBottom: "50px" }}>
          <Card className="card text-center">
            <CardHeader style={{ backgroundColor: "violet" }}>Complete a Pet Parent Questionnaire</CardHeader>
            <CardBody>Tell us what kind of pet you are looking for and we will optimize your search</CardBody>
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
          <Nav>
            <NavItem>
              <NavLink
                style={{color: 'purple', fontSize: 30, marginBottom: '100px'}}
                to='/signUp'> Create An Account
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
