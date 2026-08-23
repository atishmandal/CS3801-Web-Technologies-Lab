import { useState } from "react";
import Page from "../components/Page";

function Contact() {
  // Local state for a simple contact form, used to demonstrate event
  // handling (onChange, onSubmit) beyond just navigation.
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  // Called on every keystroke in any input. "name" comes from the
  // input's name attribute so one handler can serve all three fields.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // stop the browser's default full-page form submit
    setSubmitted(true);
  };

  return (
    <Page eyebrow="Get in touch" title="Contact Us">
      <div className="contact-details">
        <p>
          XYZ University, Chennai, Tamil Nadu. The
          main office is open Monday through Saturday, from 9 in the morning
          until 5 in the evening.
        </p>
        <p>
          For admissions queries, reach the admissions office directly. For
          anything else, use the form below and a member of our team will
          get back to you within two working days.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>

      {submitted && <p className="success-msg">Thanks, {formData.name}! We'll get back to you.</p>}
    </Page>
  );
}

export default Contact;
