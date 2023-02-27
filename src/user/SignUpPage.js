import { useState } from "react";
import { Col, Row, Container } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Label, FormGroup, Button } from "reactstrap";
import aladdin from "../images/aladdin.png";

const SignUpPage = () => {
  const handleSignUp = (values) => {
    const newUser = {
      id: Date.now(),
      avatar: aladdin,
      username: values.username,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
    };
  };
  const validateUserSignUp = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "Required";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    }

    if (!values.username) {
      errors.username = "Required";
    } else if (values.username.length < 6) {
      errors.username = "Must be at least 6 characters";
    }
    if (!values.password) {
      errors.values = "Required";
    }

    if (values.username.length > 15) {
      errors.username = "Cannot exceed 15 characters;";
    }

    if (values.password.length < 8) {
      errors.password = "Must be at least 8 characters";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };
  return (
    <>
      <h1>Sign Up Here</h1>
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
          lastName: "",
          firstName: "",
        }}
        onSubmit={handleSignUp}
        validate={validateUserSignUp}
      >
        <Form className="signupform">
          <FormGroup>
            <Label htmlFor="first-name">First Name</Label>
            <Field id="first-name" name="first-name" placeholder="First Name" />
            <ErrorMessage name="first-name">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="last-name">Last Name</Label>
            <Field id="last-name" name="last-name" placeholder="Last Name" />
            <ErrorMessage name="last-name">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="username"> Username</Label>
            <Field id="username" name="username" placeholder="Username" />
            <ErrorMessage name="username">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Field id="password" name="password" placeholder="Password" />
            <ErrorMessage name="password">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Field id="email" name="email" placeholder="Email" />
            <ErrorMessage name="email">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
          </FormGroup>
          <Button type="submit" color="primary">
            Login
          </Button>
        </Form>
      </Formik>
    </>
  );
};

export default SignUpPage;
