import React from 'react';
import './LogIn.css';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function LogIn() {

  const schema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters'),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => console.log(values)}
      initialValues={{
        username: '',
        password: '',
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <div className="login-form-container">
          <h1 className="text-center">Log In</h1>
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="form-row">
              <Form.Group as={Col} controlId="validationFormikUsername" className="position-relative">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder=""
                    aria-describedby="inputGroupPrepend"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    isInvalid={touched.username && !!errors.username}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>{errors.username}</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="form-row password-row">
              <Form.Group as={Col} controlId="validationFormikPassword" className="position-relative">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={touched.password && !!errors.password}
                />
                <Form.Control.Feedback type="invalid" tooltip>{errors.password}</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Button type="submit">Submit</Button>
            </Row>
          </Form>
        </div>
      )}
    </Formik>
  );
}
