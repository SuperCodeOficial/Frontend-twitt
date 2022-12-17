import React from "react";
import {Modal} from "react-bootstrap";
import LogowhiteTwitt from "../../../asset/png/logo-white.png";

import "./BasicModal.scss";

export default function BasicModal(props){
    const {show, setshow, children} = props;

    return(
        <Modal
            className="basic-modal"
            show={show}
            onHide={()=> setshow(false)}
            centered
            size="lg"
        >
        <Modal.Header>
            <Modal.Title>
                <img src={LogowhiteTwitt} alt="Twitt-max" />
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        </Modal>
    )
}