import React from 'react'
import {Row, Col, Form, Button, Spinner} from "react-bootstrap";

import "./SingUpForm.scss";

export default function SingUpForm(props) {
    const {setshowModal}=props;

  const onSubmit = e =>{
    e.preventDefault();
    setshowModal(false);
  };
  return (
    <div className="sign-up-form">
        <h2>Crea tu cuenta</h2>
        <Form onSubmit={onSubmit}>
            <Form.Group className='sign-up-form__group'>
                <Row>
                    <Col>
                        <Form.Control type="text" placeholder="Nombre"/>
                    </Col>
                    <Col>
                        <Form.Control type="text" placeholder="Apellidos"/>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className='sign-up-form__group'>
                <Form.Control type="text" placeholder="Correo Electronico"/>
            </Form.Group>
            <Form.Group className='sign-up-form__group'>
            <Row>
                <Col>
                    <Form.Control type="password" placeholder="Contraseña"/>
                </Col>
                <Col>
                <Form.Control type="password" placeholder="Repetir Contraseña"/>
                </Col>
                </Row>
            </Form.Group>
            <Button variant="primary" type="submit">
                Registrarse
            </Button>
        </Form>
    </div>
  );
}
