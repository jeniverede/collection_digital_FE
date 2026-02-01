import { Button, Form, FloatingLabel } from "react-bootstrap";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./CSS/Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q9q9njo",
        "template_jsenkvn",
        form.current,
        "mY9UVnGPJXUvkCUu-"
      )
      .then(
        (result) => {
          console.log("email send worked", result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="contact_page_container">
        <h1 className="contact">Contact Us</h1>
        <div className="contact_container">
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-2" controlId="inlineFormInput">
              <Form.Control type="text" placeholder="Name" name="user_name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="user_email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                placeholder="Message"
                name="user_subject"
                style={{ height: "100px" }}
              />
            </Form.Group>

            <Button onSubmit={sendEmail} className="send_button" type="submit">
              Send
            </Button>
          </Form>
        </div>
        <p style={{ paddingTop: 20, color: "grey", width: "100%" }}>
          * This website is a front-end only demo.
          It does not include a live backend, Login/Signup, or Contact form submissions.
          <br />
          For questions or opportunities, please contact me at jennifer.r.rothrock(at)gmail(dot)com.
        </p>
      </div>
    </>
  );
}
