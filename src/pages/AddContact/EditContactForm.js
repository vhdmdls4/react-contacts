import React, { useEffect, useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  CardTitle,
  CloseButton,
} from "reactstrap";

function EditContactForm({ contact, onContactEdit }) {
  const [formData, setFormData] = useState(contact ? contact : {});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const localContacts = JSON.parse(localStorage.getItem("contacts"));
    if (!localContacts) return;

    const contactIndex = localContacts.findIndex(
      (item) => item.id === formData.id
    );
    if (contactIndex === -1) return;

    localContacts[contactIndex] = { ...formData };

    localStorage.setItem("contacts", JSON.stringify(localContacts));

    onContactEdit(localContacts[contactIndex]);

    alert("Contrato editado");
  };

  useEffect(() => {
    if (contact) {
      setFormData(contact);
    }
  }, [contact]);

  return (
    <Card className="custom-card">
      <CardBody>
        <div
          className="d-flex justify-content-end"
          style={{ position: "absolute", right: "1rem" }}
        >
          <CloseButton onClick={() => onContactEdit(null)} />
        </div>
        <h2>Edit Contact</h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup floating>
            <Input
              type="text"
              name="name"
              id="name"
              value={formData.name || ""}
              onChange={handleChange}
              required
              minLength={6}
              placeholder="Name"
            />
            <Label for="name">Name</Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              type="tel"
              name="contact"
              id="contact"
              value={formData.contact || ""}
              onChange={handleChange}
              required
              pattern="[0-9+]{8,15}"
              maxLength={15}
              placeholder="Contact"
            />
            <Label for="contact">Contact</Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              type="email"
              name="email"
              id="email"
              value={formData.email || ""}
              onChange={handleChange}
              required
              placeholder="Email"
            />
            <Label for="email">Email</Label>
          </FormGroup>
          <Button color="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
}

export default EditContactForm;
