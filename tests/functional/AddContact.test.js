import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddContactForm from "./AddContactForm";

describe("AddContactForm", () => {
  it("should submit the form and display the 'Contato criado' alert on successful form submission", () => {
    const { getByLabelText, getByText } = render(<AddContactForm />);

    const nameInput = getByLabelText("Name");
    const contactInput = getByLabelText("Contact");
    const emailInput = getByLabelText("Email");
    const pictureInput = getByLabelText("Picture");
    const addButton = getByText("Add Contact");

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(contactInput, { target: { value: "12345678" } });
    fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
    fireEvent.change(pictureInput, {
      target: { files: [new File([""], "test.jpg", { type: "image/jpeg" })] },
    });

    fireEvent.click(addButton);

    const alertMessage = screen.getByText("Contato criado");
    expect(alertMessage).toBeInTheDocument();
  });
});

//generic tests generate by chatGPT
