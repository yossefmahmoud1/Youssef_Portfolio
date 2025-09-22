import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = ({ currentLanguage }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const translations = {
    en: {
      contact: {
        title: "Get In Touch",
        subtitle: "Let's work together on your next project",
        lets_talk: "Let's Talk",
        description:
          "I'm always interested in hearing about new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!",
        form: {
          name: "Name",
          email: "Email",
          message: "Message",
          send: "Send Message",
          success: "Thank you! Your message has been sent successfully.",
          error:
            "Sorry, there was an error sending your message. Please try again.",
        },
      },
    },
    ar: {
      contact: {
        title: "تواصل معي",
        subtitle: "دعنا نعمل معاً على مشروعك القادم",
        lets_talk: "لنتحدث",
        description:
          "أنا دائماً مهتم بسماع الفرص الجديدة والمشاريع المثيرة. سواء كان لديك سؤال أو تريد فقط أن تقول مرحباً، لا تتردد في التواصل!",
        form: {
          name: "الاسم",
          email: "البريد الإلكتروني",
          message: "الرسالة",
          send: "إرسال الرسالة",
          success: "شكراً لك! تم إرسال رسالتك بنجاح.",
          error: "عذراً، حدث خطأ في إرسال رسالتك. يرجى المحاولة مرة أخرى.",
        },
      },
    },
  };

  const t = translations[currentLanguage] || translations.en;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceId = "service_jofuzno";
    const templateId = "template_a2jd0g9";
    const publicKey = "IR1M8jPwrxShf7Djz";

    try {
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>{t.contact.lets_talk}</h3>
            <p>{t.contact.description}</p>

            <div className="contact-links">
              <a
                href="mailto:omaryosef136@gmail.com"
                className="contact-link"
                aria-label="Email"
              >
                <FaEnvelope className="contact-icon" />
                <span>omaryosef136@gmail.com</span>
              </a>

              <a
                href="https://github.com/yossefmahmoud1"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                aria-label="GitHub"
              >
                <FaGithub className="contact-icon" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/youssef-mahmoud-14b0022a4/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="contact-icon" />
                <span>LinkedIn</span>
              </a>

              <a
                href="tel:+201149177542"
                className="contact-link"
                aria-label="Phone"
              >
                <FaPhoneAlt className="contact-icon" />
                <span>01149177542</span>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t.contact.form.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder={t.contact.form.name}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t.contact.form.email}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder={t.contact.form.email}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t.contact.form.message}</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder={t.contact.form.message}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : t.contact.form.send}
            </button>

            {submitStatus && (
              <div
                className={`form-message ${
                  submitStatus === "success" ? "success" : "error"
                }`}
              >
                {submitStatus === "success"
                  ? t.contact.form.success
                  : t.contact.form.error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
