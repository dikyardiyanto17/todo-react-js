import EmptyDetails from "../components/EmptyDetails";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../css/details.css";
import CardDetail from "../components/CardDetail";
import React, { useState } from "react";
export default function Details() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container">
        <div className="todo-header">
          <div className="d-flex justify-content-center align-items-center">
            <h1 style={{ marginRight: "20px" }}>{"<"}</h1>
            <h1 className="activity" style={{ marginRight: "20px" }}>
              New Activity
            </h1>
            <svg
              style={{ marginRight: "20px" }}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 19.9998H8L18.5 9.49981C19.0304 8.96938 19.3284 8.24996 19.3284 7.49981C19.3284 6.74967 19.0304 6.03025 18.5 5.49981C17.9696 4.96938 17.2501 4.67139 16.5 4.67139C15.7499 4.67139 15.0304 4.96938 14.5 5.49981L4 15.9998V19.9998Z"
                stroke="#A4A4A4"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.5 6.49982L17.5 10.4998"
                stroke="#A4A4A4"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <svg
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 24L22 20M22 20L26 24M22 20V34"
                stroke="#888888"
                stroke-width="1.5"
                stroke-linecap="square"
              />
              <path
                d="M36 30L32 34M32 34L28 30M32 34V20"
                stroke="#888888"
                stroke-width="1.5"
                stroke-linecap="square"
              />
              <rect
                x="0.5"
                y="0.5"
                width="53"
                height="53"
                rx="26.5"
                stroke="#E5E5E5"
              />
            </svg>
            <Button
              variant="primary"
              data-cy="activity-add-button"
              style={{ marginLeft: "20px" }}
              onClick={handleShow}
            >
              + Tambah
            </Button>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <EmptyDetails />
        </div>
        <CardDetail />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
