import React from "react";
import Navigation from "./Navigation";

export default function Contact() {
  return (
    <div className="contact">
      <Navigation />
      <h2 className="title">Contact</h2>
      <section class="wrapper">
        <h1>Contact Us</h1>
        <p>
          Have a question or want to learn more about our services? We'd love to
          hear from you. Send us a message and we'll respond as soon as
          possible.
        </p>
        <form>
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />
          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email.."
          />
          <label for="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{ height: "200px" }}
          ></textarea>
          <input type="submit" value="Submit" />
        </form>
      </section>
    </div>
  );
}
