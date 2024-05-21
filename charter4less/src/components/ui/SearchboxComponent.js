import React from "react";
import { Form, Button } from "react-bootstrap";
import './SearchboxComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default function SearchboxComponent({ placeholder = "Search", btnText = "Search" }) {
  return (
    <Form>
      <div className="searchbox-flex">
        <div className="search-icon">
          <FontAwesomeIcon className="icon" name="search" style={{height: "1.5rem"}} icon={faSearch} />
        </div>
        <Form.Control className="search-box" type="text" placeholder={placeholder} />
        <div className="search-btn-container">
          <Button className="search-btn" variant="primary">{btnText}</Button>
        </div>
      </div>
    </Form>
  )
}