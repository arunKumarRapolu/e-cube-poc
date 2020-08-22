import React from 'react';
import './App.css';
import { Button, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Row>
        <Col md="1">
        <Button variant="primary">Primary</Button>
        </Col>
        <Col md="3">
        <Button variant="secondary">Secondary</Button>
        </Col>
      </Row>
    </div>
  );
}

export default App;
