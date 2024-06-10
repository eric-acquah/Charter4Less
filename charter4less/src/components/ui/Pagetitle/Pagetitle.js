import React from 'react';
import { Row, Col, Breadcrumb, Container } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";
import './Pagetitle.css';

function PageHeader({ text }) {
  return <h1 className="page-heading">{text}</h1>;
}

function BreadCrumbs() {
  const currentPath = useLocation();

  const crumbs = currentPath.pathname.split('/').filter((crumb) => crumb !== '');

  return (
    <Breadcrumb className='breadcrumbs'>
      <Link className={`breadcrumb-item ${currentPath.pathname === '/' ? 'activeCrumb': ''}`} to="/">Home</Link>
      {
        crumbs.map((crumb, index) => {
          const pathToCrumb = `/${crumbs.slice(0, index + 1).join('/')}`;
          return (
            <Link key={index} className={`breadcrumb-item ${currentPath.pathname === pathToCrumb ? 'activeCrumb': ''}`} to={pathToCrumb}>
              {crumb === 'howitworks' ? 'How It Works' : (crumb === 'listitem' ? 'List Item' : crumb.charAt(0).toUpperCase() + crumb.slice(1))}
            </Link>
          );
        })
      }
    </Breadcrumb>
  );

}
export default function Pagetitle() {
  const currentPath = useLocation();


  return (
    <div className="pagetitle-wrapper">  {/* New class for styling */}
      <Container className="pagetitle-container">  {/* New class for styling */}
        <Row className='pagetitle-row'>
          <Col>
            <PageHeader text={
              currentPath.pathname === '/item'
                ? 'Item Page'
                : currentPath.pathname === '/categories'
                ? 'Categories Page'
                : currentPath.pathname === '/howitworks'
                ? 'How It Works Page'
                : currentPath.pathname === '/aboutus'
                ? 'About Us Page'
                : currentPath.pathname === '/signup'
                ? 'Sign-In Page'
                : currentPath.pathname === '/login'
                ? 'Log-In Page'
                : currentPath.pathname === '/listitem'
                ? 'List Item Page'
                : 'Not Found'
            } />
          </Col>
        </Row>
      </Container>
      <Container fluid className="breadcrumb-container">  {/* New class for styling */}
        <Row>
          <Col>
            <BreadCrumbs />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
