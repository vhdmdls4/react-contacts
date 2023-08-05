import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  Col,
  FormText,
} from "reactstrap";

function AddContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    picture: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const isImage = file.type.startsWith("image/");
      if (isImage) {
        setSelectedFile(file);
      } else {
        alert("Please select a valid image file (JPEG, PNG, etc.)");
        e.target.value = null;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedContacts = localStorage.getItem("contacts");
    const existingContacts = storedContacts ? JSON.parse(storedContacts) : [];

    const isContactExists = existingContacts.some(
      (contact) => contact.contact === formData.contact
    );
    const isEmailExists = existingContacts.some(
      (contact) => contact.email === formData.email
    );

    if (isContactExists) {
      alert("Contact already exists in the database");
      return;
    }

    if (isEmailExists) {
      alert("Email already exists in the database");
      return;
    }

    const newContact = { ...formData, id: Date.now() };

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        newContact.picture = reader.result;
        const updatedContacts = [...existingContacts, newContact];
        localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      };
      reader.readAsDataURL(selectedFile);
      alert("Contato criado");
    } else {
      alert("Picture is required");
    }

    console.log("Form data submitted:", formData);
  };

  return (
    <Card className="custom-card">
      <CardBody>
        <Button
          onClick={() =>
            console.log(JSON.parse(localStorage.getItem("contacts")))
          }
        >
          Clique
        </Button>
        <h2>Add New Contact</h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup floating>
            <Input
              type="text"
              name="name"
              id="name"
              value={formData.name}
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
              value={formData.contact}
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
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
            />
            <Label for="email">Email</Label>
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile" sm={2}>
              Picture
            </Label>
            <Col sm={10}>
              <Input
                id="exampleFile"
                name="file"
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                required
              />
              <FormText>
                Insert the contact's photo here. Only image types will be
                accepted.
              </FormText>
            </Col>
          </FormGroup>
          <div></div>
          <Button block color="primary" type="submit">
            Add Contact
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
}

export default AddContactForm;
