import React, { useState } from "react";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Button from "../Button/Buttons";
import styles from "./Contact.module.css";

const Contact_form = () => {
  const [name, setName] = useState("Jeet");
  const [email, setEmail] = useState("jeetshile@gmail.com");
  const [text, setText] = useState("laude apna kaam kar");

  const handleSubmit = (e) => {
    e.preventDefault();
    // with controlled inputs we already have the latest values in state
    console.log({ name, email, text });
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button icon={<MdMessage size={24} />} text="VIA SUPPORT CHAT" />
          <Button icon={<FaPhoneAlt size={24} />} text="VIA CALL" />
        </div>

        <Button
          isOutline={true}
          icon={<HiMail size={24} />}
          text="VIA EMAIL FORM"
        />

        <form onSubmit={handleSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea
              id="text"
              name="text"
              rows="8"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button text="SUBMIT" type="submit" />
          </div>

          <div>{`${name} ${email} ${text}`}</div>
        </form>
      </div>

      <div className="contact_img">
        <img src="/images/Big_img.svg" alt="contact_img" />
      </div>
    </section>
  );
};

export default Contact_form;
