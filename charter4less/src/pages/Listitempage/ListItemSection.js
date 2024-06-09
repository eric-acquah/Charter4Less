import React, {useState} from "react";
import { Col, Container, Row, Form, InputGroup, Button, Alert, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useAddItem from "../../hooks/useAddItem";
import "./ListItemSection.css";

const schema = z.object({
  itemName: z.string().max(50, "Item name must not be more than 50 characters").min(5, "Item name must be at least 5 characters"),
  itemDescription: z.string().max(2000, "Item description must not be more than 2000 characters").min(20, "Item description must be at least 20 characters"),
  itemPrice: z.string().regex(/^[1-9]+\.?\d*$/, "Price must be a positive number greater than 0"),
  itemLocation: z.string().max(50, "Please enter a valid location").min(4, "Please enter a valid location"),
  itemCategory: z.string().min(1, "Please select a category for the item"),
  itemImage: z.unknown()
  .refine((file) => file && file.length > 0, {message: "Upload at least one image of the item"})
  .refine((file) => file && file.length <= 5, {message: "You can only upload up to 5 images"}),
});


export default function ListItemSection() {
  // const [itemData, setItemData] = useState({});
  // const [formSubmitted, setFormSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState:{ errors } } = useForm(
    {
      resolver: zodResolver(schema),
    }
  );


  const onSubmit = async (data) => {
    console.log(data);
    setItemData(data);
    setFormSubmitted(true);
    await handleUpload(data)
    setImageIsUploaded(true);
  }

  const {formSubmitted, docAdded, handleUpload, setFormSubmitted, setImageIsUploaded, setItemData, uploadError} = useAddItem({reset: reset});

  return (
    <div className="list-item-section">
      <Container>
        <div className="form-wrapper" >
        {
          docAdded ? <Alert variant="success" dismissible>
          Your item has been listed successfully!
        </Alert>
        : uploadError ? <Alert variant="danger" dismissible>Something went wrong while listing item. Try again later</Alert> : ""
        }
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
                      <Form.Control isInvalid={errors.itemImage} {...register("itemImage", {required: "Upload at least one image of the item", validate: (file) => file.length > 0})} name="itemImage" accept="image/png, image/jpeg" type="file" multiple placeholder="Enter item image" />
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
                      <Form.Select isInvalid={errors.itemCategory} {...register("itemCategory")} name="itemCategory" >
                        <option value="">Select category of item</option>
                        <option value="tools">Tool</option>
                        <option value="equipment">Equipment</option>
                        <option value="vehicles">Vehicle</option>
                        <option value="electronics">Electronic</option>
                        <option value="utensils">Utensil</option>
                        <option value="apparel&accessories">Apparel/Accessory</option>
                        <option value="Event&party-supplies">Event/Party Supply</option>
                        <option value="Residential-Commercial-spaces">Residential/Commercial space </option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {errors.itemCategory && errors.itemCategory.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Button className={`form-submit-btn ${formSubmitted ? 'disabled' : ''}`} type="submit" variant="primary">
                      {
                        formSubmitted ? <span className="save-spinner"><Spinner aria-hidden="true" className="spinner-element" animation="border" role="status" /> Saving...</span> : "Submit"
                      }
                    </Button>
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