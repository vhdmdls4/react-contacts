import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EditContactForm from "./EditContactForm";

describe("EditContactForm", () => {
  it("should submit the form and display the 'Contrato editado' alert on successful form submission", () => {
    const contact = {
      id: 1,
      name: "John Doe",
      contact: "12345678",
      email: "john.doe@example.com",
    };
    const onContactEditMock = jest.fn();

    const { getByLabelText, getByText } = render(
      <EditContactForm contact={contact} onContactEdit={onContactEditMock} />
    );

    const nameInput = getByLabelText("Name");
    const contactInput = getByLabelText("Contact");
    const emailInput = getByLabelText("Email");
    const saveButton = getByText("Save Changes");

    fireEvent.change(nameInput, { target: { value: "Jane Doe" } });
    fireEvent.change(contactInput, { target: { value: "87654321" } });
    fireEvent.change(emailInput, {
      target: { value: "jane.doe@example.com" },
    });

    fireEvent.click(saveButton);

    expect(onContactEditMock).toHaveBeenCalledTimes(1);
    expect(onContactEditMock).toHaveBeenCalledWith({
      ...contact,
      name: "Jane Doe",
      contact: "87654321",
      email: "jane.doe@example.com",
    });

    const alertMessage = getByText("Contrato editado");
    expect(alertMessage).toBeInTheDocument();
  });
});

//generic tests generate by chatGPT
