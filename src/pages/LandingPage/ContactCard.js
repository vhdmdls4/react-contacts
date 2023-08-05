import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import ConfirmationModal from "./ConfirmationModal";

function ContactCard({ contact, onDelete }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleDelete = () => {
    onDelete(contact.id);
    toggleModal();
  };

  const toggleModal = () => {
    setModalOpen((prevModalOpen) => !prevModalOpen);
  };

  return (
    <Card>
      <CardImg height={200} top src={contact.picture} alt={contact.name} />
      <CardBody>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          ID: {contact.id}
        </CardSubtitle>
        <CardTitle tag="h5">{contact.name}</CardTitle>
        <CardText>Contact: {contact.contact}</CardText>
        <CardText>Email: {contact.email}</CardText>

        <div className="d-flex justify-content-between">
          {/* <Link to={`/details/${contact.id}`} className="btn btn-primary">
            Details
          </Link> */}
          <Button
            className="fw-bold"
            color="dark"
            tag={Link}
            to={`/details/${contact.id}`}
          >
            Details
          </Button>

          <>
            <Button className="fw-bold" color="success">
              Edit
            </Button>{" "}
            <Button className="fw-bold" color="danger" onClick={toggleModal}>
              Delete
            </Button>
            <ConfirmationModal
              isOpen={modalOpen}
              toggle={toggleModal}
              onDelete={handleDelete}
            />
          </>
        </div>
      </CardBody>
    </Card>
  );
}

export default ContactCard;
