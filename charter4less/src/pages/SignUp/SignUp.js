import React from 'react';
import './SignUp.css';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { Formik, setFieldValue } from 'formik'; // Import setFieldValue from formik
import * as Yup from 'yup';

export default function SignUp() {

  const schema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    username: Yup.string().required('Username is required'),
    address: Yup.string().required('Address is required'),
    contact: Yup.number().typeError('Contact must be a number').required('Contact is required'),
    profilePicture: Yup.mixed().required('Profile picture is required'),
    terms: Yup.bool().required('Terms must be accepted').oneOf([true], 'Terms must be accepted'),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => console.log(values)}
      initialValues={{
        firstName: '',
        lastName: '',
        username: '',
        address: '',
        contact: '',
        profilePicture: null,
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, setFieldValue, values, touched, errors }) => (
        <div className="signup-form-container">
        <h1 className="text-center">Sign Up</h1>
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik101" className="position-relative">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
                isInvalid={touched.firstName && !!errors.firstName}
              />
              <Form.Control.Feedback type="invalid" tooltip>{errors.firstName}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik102" className="position-relative">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
                isInvalid={touched.lastName && !!errors.lastName}
              />
              <Form.Control.Feedback type="invalid" tooltip>{errors.lastName}</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
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
          <Row>
            <Form.Group as={Col} md="3" controlId="validationFormik104" className="position-relative">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name="address"
                value={values.address}
                onChange={handleChange}
                isInvalid={touched.address && !!errors.address}
              />
              <Form.Control.Feedback type="invalid" tooltip>{errors.address}</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="3" controlId="validationFormik105" className="position-relative">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                name="contact"
                value={values.contact}
                onChange={handleChange}
                isInvalid={touched.contact && !!errors.contact}
              />
              <Form.Control.Feedback type="invalid" tooltip>{errors.contact}</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="position-relative mb-3">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control
              type="file"
              name="profilePicture"
              onChange={(event) => {
                setFieldValue('profilePicture', event.target.files[0]);
              }}
              isInvalid={touched.profilePicture && !!errors.profilePicture}
            />
            <Form.Control.Feedback type="invalid" tooltip>{errors.profilePicture}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="position-relative mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={touched.terms && !!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik106"
              feedbackTooltip
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
      )}
    </Formik>
  );
}
