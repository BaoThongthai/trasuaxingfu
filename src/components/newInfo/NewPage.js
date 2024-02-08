// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';


const NewPage = () => (
  <div>
    <h2>Trang tạo mới</h2>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>
);


export default NewPage;
