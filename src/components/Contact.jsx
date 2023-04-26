import React, { Component, useState } from "react";
import Swal from "sweetalert2";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    emailStatus: "",
  };

  // handle the value
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  // when submit btn is clicked
  submitForm = (e) => {
    const { name, email, phone, subject, message } = this.state;

    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // get a callback when the server responds
    xhr.addEventListener("load", () => {
      // update the response state and the step

      this.setState({
        emailStatus: xhr.responseText,
      });
    });
    // open the request with the verb and the url
    xhr.open(
      "GET",
      "https://zaferkalik.com/mail-api-react-active/contact-mail-api.php?email=" +
        email +
        "&name-surname=" +
        name +
        "&phone=" +
        phone +
        "&subject=" +
        subject +
        "&message=" +
        message
    );
    // send the request
    xhr.send();

    // reset the fields
    this.setState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    e.preventDefault();
  };

  render() {
    const { name, email, phone, subject, message, emailStatus } = this.state;

    const Alert = () => {
      Swal.fire({
        icon: "success",
        title: "Mesajınız Gönderildi.",
        text: "Yakında Sizinle İletişime Geçeceğiz.",
        confirmButtonText: "Tamam",
      });
    };

    return (
      <div className="formBlock" onSubmit={this.submitForm}>
        {emailStatus ? emailStatus : null}
        <div
          name="contact"
          className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
        >
          <form
            method="POST"
            onSubmit={Alert}
            action=""
            className="flex flex-col max-w-[600px] w-full"
          >
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
                Contact
              </p>
              <p className="text-gray-300 py-4">
                // Submit the form below or shoot me an email -
                zaferkalik@gmail.com
              </p>
            </div>
            <input
              value={name}
              onChange={this.handleChange("name")}
              className="bg-[#ccd6f6] p-2"
              type="text"
              placeholder="Name"
              name="name"
              required
            />
            <input
              value={subject}
              onChange={this.handleChange("subject")}
              className="mt-4 p-2 bg-[#ccd6f6]"
              type="subject"
              placeholder="Subject"
              name="subject"
              required
            />

            <input
              value={email}
              onChange={this.handleChange("email")}
              className="mt-4 p-2 bg-[#ccd6f6]"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
            <input
              value={phone}
              onChange={this.handleChange("phone")}
              className="my-4 p-2 bg-[#ccd6f6] outline-none"
              type="number"
              placeholder="Phone number"
              name="number"
              required
            />
            <textarea
              value={message}
              onChange={this.handleChange("message")}
              className="bg-[#ccd6f6] p-2"
              name="message"
              rows="10"
              placeholder="Message"
              required
            ></textarea>
            <button
              type="submit"
              className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
            >
              Let's Contact
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
