import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Col } from 'react-bootstrap';
import services from '../services';

const PhotoItem = ({ id, title, thumbnailUrl }) => {  

  const deletePhoto = async () => {
    try {
      await services.deletePhoto(id);
      alert('Foto deletada!')
      window.location.reload()
    }catch(error) {
      console.log(error)
      alert('Falha ao deletar a foto!')
    }
  }

  return (
    <Col md="auto" style={{ marginTop: 16 }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={thumbnailUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Link to={`/edit/${id}`}>
            <Button variant="warning">Editar</Button>
          </Link>
          <Button onClick={deletePhoto} variant="danger" style={{ marginLeft: 16 }}>Deletar</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PhotoItem;