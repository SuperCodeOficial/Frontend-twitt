import React, {useState} from 'react'
import {Container, Row, Col, Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faSearch, faUser, faComment} from "@fortawesome/free-solid-svg-icons";
import BasicModal from "../../components/Modal/BasicModal";
import SingUpForm from "../../components/SingUpForm";
import LogoTwitt from "../../asset/png/logo.png";
import LogoWhiteTwitt from "../../asset/png/logo-white.png";

import "./SignInSignUp.scss";

export default function SignInSignUp() {
    const[showModal, setshowModal] = useState(false);
    const[contentModal, setContentModal]  = useState(null);

    const openModal = content => {
        setshowModal(true);
        setContentModal(content);
    };

  return (
    <>
    <Container className='signin-signup' fluid>
        <Row>
            <LeftComponent/>
            <RightComponent openModal={openModal} setshowModal={setshowModal}/>
        </Row>
    </Container>
    <BasicModal show={showModal} setShow={setshowModal}>
        {contentModal}
    </BasicModal>
    </>
    );
}

function LeftComponent(){
    return (
        <Col className="signin-signup__left" md={6}>
            <img src={LogoTwitt} alt="image twitt"/>
            <div>
                <h2>
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    Sigue lo que te interesa
                </h2>
                <h2>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    Enterate de lo que está hablando la gente</h2>
                <h2>
                    <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                    Unete a la conversación</h2>
            </div>
        </Col>
    );
}
function RightComponent(props){
    const {openModal, setshowModal}=props;
    return (
        <Col className="signin-signup__right" md={6}>
            <div>
                <img src={LogoWhiteTwitt} alt="image twitt-white"/>
                <h2>
                    Enterate de lo que está pasando en el mundo, en este momento.
                </h2>
                <h3>
                    Unete a Twitt-Max, ahora mismo.
                </h3>
                <Button variant="primary"
                onClick={()=> openModal(<SingUpForm setshowModal={setshowModal}/>)}
                >
                    Registrate</Button>
                <Button variant="outline-primary"
                onClick={()=> openModal(<h2>Formulario de Login</h2>)}
                >
                    Iniciar sesión</Button>
            </div>
        </Col>
    );
}