import React, { useContext} from "react";
import { Container, Row, Col, Form, Button, Carousel } from "react-bootstrap";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RatingContext } from "../../context/RatingContext";
import useRetrieveFeedback from "../../hooks/useRetrieveFeedback";
import useAddFeedback from "../../hooks/useAddFeedback";
import thumnail1 from "../../assets/images/thumbnail-1.jpg";
import thumnail2 from "../../assets/images/thumbnail-2.jpg";
import thumnail3 from "../../assets/images/thumbnail-3.jpeg";
import thumnail4 from "../../assets/images/thumbnail-4.jpg";

import "./FeedBackSection.css";
import FeedBackStars from "../../components/FeedBackStars";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  review: z.string().min(10, "Review message must be at least 10 characters"),
});

export default function FeedBackSection() {
  const { register, handleSubmit, reset, formState: {errors} } = useForm({
    resolver: zodResolver(schema),
  });

  const {starCount, handleStarClick} = useContext(RatingContext);
  const {setFeedbackData} = useRetrieveFeedback();
  const {loading, error, addFeedback, isSubmitted} = useAddFeedback({reset, handleStarClick, setFeedbackData}); //


  const onSubmit = async (data) => {
    data.starCount = starCount;
    await addFeedback(data);
  }

  return (
    <section className="feedback-section">
      <Container className="feedback-container">
        <Row className="thumbnail-section">
          <Carousel>
            <Carousel.Item>
              <img src={thumnail1} style={{width: "32rem", height: "25rem"}} alt="thumbnail" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={thumnail2} style={{width: "32rem", height: "25rem"}} alt="thumbnail" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={thumnail3} style={{width: "32rem", height: "25rem"}} alt="thumbnail" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={thumnail4} style={{width: "32rem", height: "25rem"}} alt="thumbnail" />
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row className="form-container">
        <Col>
            <h2 className="feedback-heading">Feedback</h2>
          </Col>
          <Col className="form-col">
            <Form onSubmit={handleSubmit(onSubmit)} className="feedback-form">
              <Form.Group className="mb-3" controlId="id1">
                <div className="review-stars-sec">
                  <Form.Label>Name</Form.Label>
                   <FeedBackStars />
                </div>
                <Form.Control isInvalid={errors.name} {...register("name")} type="text" placeholder="Enter your name" />
                <Form.Control.Feedback type="invalid">
                        {errors.name && errors.name.message}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="id2">
                <Form.Label>Email</Form.Label>
                <Form.Control isInvalid={errors.email} {...register("email")} type="email" placeholder="Enter your email" />
                <Form.Control.Feedback type="invalid">
                        {errors.email && errors.email.message}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="id3">
                <Form.Label>Message</Form.Label>
                <Form.Control isInvalid={errors.review} {...register("review")} as="textarea" rows={3} placeholder="Enter your message" />
                <Form.Control.Feedback type="invalid">
                        {errors.review && errors.review.message}
                </Form.Control.Feedback>
              </Form.Group>
               <div className="form-footer" >
               { isSubmitted ? <small>Thanks for your feedback!</small> : error ? <small className="text-danger">Something went wrong. Please try again later </small> :
                <small>Kindly share your takes of this platform with us.</small>
                }
                { loading ? <Button className="form-btn" variant="primary" type="submit" disabled>Submitting...</Button> :
                  <Button className="form-btn" variant="primary" type="submit">Submit</Button>}
               </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}