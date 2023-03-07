import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Result = () => {
  return (
    <p className="flex justify-center text-xl text-white">
      Your message successfully sent. I will contact u soon.
    </p>
  );
};

const Contact = () => {
  const form = useRef();
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2xdvgab",
        "template_azq4179",
        form.current,
        "Hz6_iK3dacWJZ8z0B"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    showResult(true);
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        ref={form}
        method="POST"
        onSubmit={sendEmail}
        action=""
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email - zaferkalik@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="mt-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="number"
          placeholder="Phone number"
          name="number"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Contact
        </button>
        <div className="row">{result ? <Result /> : null}</div>
      </form>
    </div>
  );
};

export default Contact;
