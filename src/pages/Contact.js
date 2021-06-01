import React from "react";
// import components
import { Container, Row } from "../components/Grid";
import { FormBtn } from "../components/Form";

function ContactForm() {
  return (
    <Container>
      <section className="content space">
        <Row>           
          <h2>Contact</h2>
          <hr/>
          <form action="mailto:pfotis@gmail.com" method="post" enctype="text/plain">
            <div className="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="your name"
              />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="example@email.com"
              />
            </div>
            <div className="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                className="form-control"
                placeholder="Write a message"
                rows="8"
              ></textarea>
            </div>
            <FormBtn>Submit</FormBtn>
          </form>
        </Row>
      </section>
    </Container>
  );
}

export default ContactForm;