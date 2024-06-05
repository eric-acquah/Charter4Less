import React, {useState, useEffect} from "react";
import { Col, Container, Row, Form, InputGroup, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./ListItemSection.css";

const schema = z.object({
  itemName: z.string().max(50).min(5),
  itemDescription: z.string().max(2000).min(20),
  itemPrice: z.string().regex(/^[1-9]+\.?\d*$/, "Price must be a positive number greater than 0"),
  itemLocation: z.string().max(50).min(4),
  // itemImage: z.object().refine(obj => Object.keys(obj).length > 0, {
  //   message: "At least one image must be uploaded",
  //   path: ['itemImage']
  // }),
});


export default function ListItemSection() {
  const { register, handleSubmit, formState:{ errors } } = useForm(
    {
      resolver: zodResolver(schema),
    }
  );

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="list-item-section">
      <Container>
        <div className="form-wrapper" >
          <Row>
            <Col className="form-title">
              <h1>List Item</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={handleSubmit(onSubmit)} className="form-sections-container">
                <Row className="form-sections-row1">
                  <Col>
                    <Form.Group controlId="">
                      <Form.Label >Item Name</Form.Label>
                      <Form.Control isInvalid={errors.itemName} {...register("itemName") } name="itemName" type="text" placeholder="Enter item name" />
                      <Form.Control.Feedback type="invalid">
                        {errors.itemName && errors.itemName.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="">
                      <Form.Label>Item Description</Form.Label>
                      <Form.Control isInvalid={errors.itemDescription} {...register("itemDescription")} name="itemDescription" as="textarea" rows={2} placeholder="Enter item description" />
                      <Form.Control.Feedback type="invalid">
                        {errors.itemDescription && errors.itemDescription.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="">
                      <Form.Label>Item Price</Form.Label>
                       <InputGroup className="mb-3">
                          <InputGroup.Text>$</InputGroup.Text>
                          <Form.Control isInvalid={errors.itemPrice} {...register("itemPrice")} name="itemPrice" aria-label="Amount (to the nearest dollar)" type="number" placeholder="Enter item price" />
                          <InputGroup.Text>.00</InputGroup.Text>
                          <Form.Control.Feedback type="invalid">
                            {errors.itemPrice && errors.itemPrice.message}
                          </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="form-sections-row2">
                  <Col>
                    <Form.Group controlId="">
                      <Form.Label>Item Image</Form.Label>
                      <Form.Control isInvalid={errors.itemImage} {...register("itemImage")} name="itemImage" accept="image/png, image/jpeg" type="file" multiple placeholder="Enter item image" />
                      <Form.Control.Feedback type="invalid">
                            {errors.itemImage && errors.itemImage.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="">
                      <Form.Label>Item Location</Form.Label>
                      <Form.Control isInvalid={errors.itemLocation} {...register("itemLocation")} name="itemLocation" type="location" placeholder="Enter item location" />
                      <Form.Control.Feedback type="invalid">
                        {errors.itemLocation && errors.itemLocation.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col className="form-sections-row2-col3">
                    <Form.Group className="col3-form" controlId="">
                      <Form.Label>Item Category</Form.Label>
                      <Form.Select {...register("itemCategory")} name="itemCategory" >
                        <option disabled >Select category of item</option>
                        <option value="tools">Tool</option>
                        <option value="equipment">Equipment</option>
                        <option value="vehicles">Vehicle</option>
                        <option value="electronics">Electronic</option>
                        <option value="utensils">Utensil</option>
                        <option value="apparel&accessories">Apparel/Accessory</option>
                        <option value="Event&party-supplies">Event/Party Supply</option>
                        <option value="Residential-Commercial-spaces">Residential/Commercial space </option>
                      </Form.Select>
                    </Form.Group>
                    <Button className="form-submit-btn" type="submit" variant="primary">Sunmit</Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}