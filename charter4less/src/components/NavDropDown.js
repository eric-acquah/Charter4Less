import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./NavDropDown.css";



const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Navigations
  </Tooltip>
);


export default function NavDropDown() {
  return (
      <OverlayTrigger
          placement="left"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
      <Dropdown id="dropdown-basic" align={{ md: 'end' }}>

        <Dropdown.Toggle variant="outline-dark" >
        </Dropdown.Toggle>
          <Dropdown.Menu  className="dropdown-parent">
          <Dropdown.Header className="text-color-dark">Go to...</Dropdown.Header>
            <Link to="/categories">Categories</Link>
            <Link to="/listitem">List Item</Link>
            <Link to="/aboutus">About Us</Link>
            <Dropdown.Divider />
            <Link to="/">Home</Link>
          
          </Dropdown.Menu>
    </Dropdown>
    </OverlayTrigger>
  );
}