import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap'
import services from '../services';
import { useHistory } from 'react-router-dom';


const AddScreen = ({ match: { params }}) => {
    const photoId = params.id;
    const [photoTitle, setPhotoTitle] = useState('');
    const [photoURL, setPhotoURL] = useState('');

    const loadphoto = async () => {
        try {
        const res = await services.editPhotos(photoId);
        const photo = res.data;
        setPhotoTitle(photo.title);
        setPhotoURL(photo.thumbnaiUrl);
        } catch (error) {
            alert('Falha ao editar a foto.')
        }
    }

    useEffect(() => {
        loadphoto()
    }, [])


    const handleSubmit = async () => {
        try {
            if(!photoTitle || !photoURL) {
                alert('É necessário o título ou o URL da foto');
                return;
            }
            const photo = {
                photoTitle,
                photoURL
            };
            await services.addPhoto(photo);
            alert('Foto adicionada com sucesso!!')
        } catch (error) {
            console.log(error);
            alert('Erro ao adicionar a foto, verifique se preencheu todos os campos corretamente.');
        }
    }


    if(!photoTitle || !photoURL) {
        return (
            <Container>
                <Row>
                    <Col>
                        <p>Carregando a foto...</p>
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
       <Container style={{ padding: 16 }}>
           <Row>
               <Col>
               <Form>
                    <Form.Group >
                        <Form.Label>Descrição da foto:</Form.Label>
                        <Form.Control 
                        type="text"
                        onChange={e => setPhotoTitle(e.target.value)}
                        value={photoTitle}
                        required
                        />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>URL da foto:</Form.Label>
                        <Form.Control 
                        type="text"
                        onChange={e => setPhotoURL(e.target.value)}
                        value={photoURL}
                        required
                        />
                    </Form.Group>
                    <Form.Group >
                        <Button variant="dark" onClick={handleSubmit} >Enviar</Button>
                    </Form.Group>
                    </Form>
               </Col>
           </Row>
       </Container>
    );
};

export default AddScreen;