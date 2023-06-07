import React, { useState } from "react";
import {
  FormContainer,
  H1,
  Hr,
  Label,
  Input,
  TextArea,
  Button,
  ErrorMessage,
} from "./Contact.styles";
import ContactSuccess from "./ContactSuccess/ContactSuccess";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      console.log(formData);
      setSubmitted(true);
    } else {
      setErrors(errors);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (data.fullName.trim() === "") {
      errors.fullName = "Full name is required";
    }
    if (data.subject.trim() === "") {
      errors.subject = "Subject is required";
    }
    if (data.email.trim() === "") {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }
    if (data.body.trim() === "") {
      errors.body = "Message body is required";
    }
    return errors;
  };

  return (
    <>
      {submitted ? (
        <ContactSuccess />
      ) : (
        <FormContainer>
          <H1>Contact Us!</H1>
          <Hr />
          <form onSubmit={handleSubmit}>
            <Label>
              Full Name:
              <Input
                type='text'
                name='fullName'
                value={formData.fullName}
                onChange={handleInputChange}
                minLength={3}
                required
              />
              {errors.fullName && (
                <ErrorMessage>{errors.fullName}</ErrorMessage>
              )}
            </Label>

            <Label>
              Subject:
              <Input
                type='text'
                name='subject'
                value={formData.subject}
                onChange={handleInputChange}
                minLength={3}
                required
              />
              {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}
            </Label>

            <Label>
              Email:
              <Input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </Label>

            <Label>
              Body:
              <TextArea
                name='body'
                value={formData.body}
                onChange={handleInputChange}
                minLength={3}
                required
              ></TextArea>
              {errors.body && <ErrorMessage>{errors.body}</ErrorMessage>}
            </Label>

            <Button type='submit'>Submit</Button>
          </form>
        </FormContainer>
      )}
    </>
  );
}

export default Contact;
