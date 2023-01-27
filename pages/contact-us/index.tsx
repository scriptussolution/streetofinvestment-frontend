import React, { useState } from "react";
import style from "./contactUs.module.scss";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import client from "../../apollo-client";
import { CREATE_CONTACT, FETCH_ALL_CATEGORIES } from "../../lib/queries";
import Link from "next/link";
import { Button, Col, Form, Row, Toast } from "react-bootstrap";

interface ContactUSPageProps {
  allCategories: any;
}

const ContactUS: React.FC<ContactUSPageProps> = ({ allCategories }) => {
  const [message, setMessage] = useState("");
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [disabled,setDisable]=useState(false)

  const handelChange = (e: any) => {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const onSave = (e: any) => {
    const form = e.currentTarget;
    setValidated(true);
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setMessage("Please fill all the required input field");
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 2000);
      return;
    }
    e.preventDefault();
    client
      .mutate({
        mutation: CREATE_CONTACT,
        variables: {
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        },
      })
      .then((result: any) => {
        e.target.reset();
        setValidated(false);
        setMessage("Request Received Successfully");
        setShow(true);
        setDisable(true)
        setTimeout(() => {
          setShow(false);
        }, 2000);
      })
      .catch((error) => {
        console.log("error", error);
        setMessage("Something went wrong while submitting request.");
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 2000);
      });
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Navbar categories={allCategories?.categories?.data} />
      <div className={style.maincontainer}>
        <div className="container">
          <div className="row pt-5">
            <div className={`col-lg-6 ${style.textContent}`}>
              <h1>Contact Us</h1>
              <p>
                {"Any query/suggestion/business enquiry, send an email at "}
                <Link href="mailto:streetofinvestment@gmail.com">
                  streetofinvestment@gmail.com
                </Link>
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="/image/contactus.webp"
                alt=""
                className="d-block mx-auto img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Form noValidate validated={validated} onSubmit={onSave}>
          <div className={`row g-2 mt-5 ${style.contactform}`}>
            <h1>Get in Touch</h1>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validateName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="name"
                  className={`form-control ${style.inputField}`}
                  onChange={(e) => handelChange(e)}
                />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validateEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  className={`form-control ${style.inputField}`}
                  onChange={(e) => handelChange(e)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validateSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  required
                  type="subject"
                  name="subject"
                  onChange={(e) => handelChange(e)}
                  className={`form-control ${style.inputField}`}
                  id="validationTooltip03"
                />
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  className={`form-control ${style.textArea}`}
                  id="validationTextarea"
                  placeholder="Enter you message"
                  onChange={(e) => handelChange(e)}
                />
              </Form.Group>
            </Row>
            <Button type="submit" disabled={disabled} className={style.button}>
              Submit
            </Button>
          </div>
        </Form>
      </div>
      <Footer allCategories={allCategories?.categories?.data} />
      <Row>
        <Col xs={6}>
          <Toast
            onClose={handleClose}
            show={show}
            delay={3000}
            autohide
            className={style.toastmsg}
          >
            <Toast.Header className={`text-white  p-3 ${validated || (!disabled && show) ? "bg-danger" : "bg-success"}`}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto fs-6">{message}</strong>
            </Toast.Header>
          </Toast>
        </Col>
      </Row>
      {/* <div
        className={`toast align-items-center text-bg-primary border-0 ${
          show && "show"
        } ${style.toastDesign}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex ">
          <div className="toast-body ">{message}</div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
            onClick={handleClose}
          ></button>
        </div>
      </div> */}
    </>
  );
};

export default ContactUS;

export async function getStaticProps({}) {
  const [{ data: allCategories }] = await Promise.all([
    client.query({
      query: FETCH_ALL_CATEGORIES,
      variables: { sort: ["id:asc"] },
    }),
  ]);
  return {
    props: {
      allCategories,
    },
    revalidate: 10,
  };
}
