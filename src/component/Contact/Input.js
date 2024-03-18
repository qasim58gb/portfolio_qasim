import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Input = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const notify = () => {
    error ? toast(error) : toast(message);
  };
  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_q1u95jk",
        "template_jr042j6",
        form.current,
        {
          publicKey: "92w3TIjxvoAwcPBQa",
        }
      );
      console.log("SUCCESS!");
      setMessage("Email sent successfully!");
      setError("");
    } catch (error) {
      console.error("FAILED...", error.text);
      setError("Failed to send email. Please try again later.");
      setMessage("");
    }
  };
  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col space-y-6 md:space-y-14 md:w-[90%] mx-auto p-6 md:p-12 text-[#333] "
      >
        <input
          className="bg-[#f0f0f0] md:p-[1.3rem] p-2 font-[400] md:font-[600] md:text-[1.4rem] border-none outline-none rounded-md"
          type="text"
          name="name"
          placeholder="Enter your name"
          required
        />
        <input
          className="bg-[#f0f0f0] md:p-[1.3rem] p-2 font-[400] md:font-[600] md:text-[1.4rem] border-none outline-none rounded-md"
          type="email"
          name="email"
          placeholder="Enter your  email address"
          required
        />
        <textarea
          className="bg-[#f0f0f0] md:p-[1.3rem] p-2 font-[400] md:font-[600] md:text-[1.4rem] border-none outline-none rounded-md"
          name="message"
          cols="30"
          rows="10"
          placeholder="Enter your message"
          required
        ></textarea>
        <input
          type="submit"
          value="contact me"
          onClick={notify}
          className="bg-[#0062b9] ml-auto md:w-[12rem] w-[8rem] py-2 md:py-4 text-white uppercase tracking-wide font-bold rounded-md md:mt-[3rem] mt-4 cursor-pointer"
        />
        <ToastContainer />
      </form>
    </>
  );
};

export default Input;
