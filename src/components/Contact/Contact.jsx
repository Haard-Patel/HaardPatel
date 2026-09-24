import { useState } from "react";
import { ArrowUpRight, Check, Copy, Send } from "lucide-react";
import "./Contact.css";

const contactLinks = [
  {
    label: "GITHUB",
    value: "HaardPatel",
    href: "https://github.com/Haard-Patel",
  },
  {
    label: "LINKEDIN",
    value: "haard-patel2010",
    href: "https://www.linkedin.com/in/haard-patel2012010/",
  },
  {
    label: "INSTAGRAM",
    value: "haard20_",
    href: "https://www.instagram.com/haard20_/",
  },
  {
    label: "EMAIL",
    value: "haardp9@gmail.com",
    href: "mailto:haardp9@gmail.com",
  },
  {
    label: "RÉSUMÉ",
    value: "PDF",
    href: "/ResumeCS.pdf",
  },
];

function Contact() {
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("idle");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("haardp9@gmail.com");

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      window.location.href = "mailto:haardp9@gmail.com";
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    setFormStatus("sending");
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Failed to send message.");
      }
  
      setFormStatus("success");
  
      setFormData({
        name: "",
        email: "",
        message: "",
      });
  
      window.setTimeout(() => {
        setFormStatus("idle");
      }, 4000);
    } catch (error) {
      console.error("Contact form error:", error);
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <div className="contact-topline">
          <span>04 / CONTACT</span>
          <span>OPEN TO OPPORTUNITIES</span>
        </div>

        <div className="contact-grid">

          <div className="contact-main">
            <h2>
              Say <em>hello.</em>
            </h2>

            <p className="contact-description">
              Ready to take what I have learned{" "}
              <strong>beyond classroom and into the real world.</strong>
              I am exploring opportunities across{" "}
              <strong>
                Technological support, Software, Application, Analysis
              </strong>{" "}
              while always interested in meeting people, exchanging ideas,
              and learning from the work others are doing.
              If you’re building something, solving a problem, or simply want
              to connect?
              <strong> I'd lve to connnect.</strong>
            </p>

            <div className="contact-email-block">
              <span className="contact-small-label">
                WRITE TO ME
              </span>

              <div className="contact-email-row">
                <a
                  href="mailto:haardp9@gmail.com"
                  className="contact-email"
                >
                  haardp9@gmail.com
                </a>

                <button
                  type="button"
                  className="contact-copy"
                  onClick={copyEmail}
                  aria-label={
                    copied
                      ? "Email copied"
                      : "Copy email address"
                  }
                >
                  {copied ? (
                    <>
                      <Check size={12} strokeWidth={1.8} />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} strokeWidth={1.5} />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="contact-side">

            <div className="contact-side-heading">
              ELSEWHERE
            </div>

            <div className="contact-links">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noreferrer"
                  }
                  className="contact-link"
                >
                  <span className="contact-link-label">
                    {link.label}
                  </span>

                  <span className="contact-link-value">
                    {link.value}

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.4}
                    />
                  </span>
                </a>
              ))}
            </div>

            <div className="contact-direct">

              <div className="contact-direct-header">
                <div>

                  <span className="contact-direct-title">
                    DIRECT LINE
                  </span>
                </div>

                <span className="contact-direct-status">
                  AVAILABLE
                </span>
              </div>

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="contact-form-field">
                  <label htmlFor="contact-name">
                    YOUR NAME
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-form-field">
                  <label htmlFor="contact-email">
                    EMAIL ADDRESS
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@domain.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-form-field contact-message-field">
                  <label htmlFor="contact-message">
                    MESSAGE
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  />
                </div>

                <div className="contact-form-bottom">

                  <button
                    type="submit"
                    className="contact-send"
                    disabled={formStatus === "sending"}
                  >
                    <span>
                      {formStatus === "sending"
                        ? "SENDING"
                        : formStatus === "success"
                        ? "MESSAGE SENT"
                        : "SEND MESSAGE"}
                    </span>

                    {formStatus === "success" ? (
                      <Check
                        size={15}
                        strokeWidth={1.8}
                      />
                    ) : (
                      <Send
                        size={14}
                        strokeWidth={1.5}
                      />
                    )}
                  </button>

                  <p className="contact-form-note">
                    Sends straight to my inbox — I will reply from there.
                  </p>

                </div>

                {formStatus === "error" && (
                  <p className="contact-form-error">
                    Something went wrong. Please email me directly.
                  </p>
                )}

              </form>
            </div>

          </div>
        </div>

        <div className="contact-social-row">

          <a
            href="https://github.com/Haard-Patel"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
          </a>

          <a
            href="https://www.linkedin.com/in/haard-patel2010/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
          </a>

          <a
            href="https://www.instagram.com/haard20_/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
          </a>

          <a
            href="mailto:haardp9@gmail.com"
            aria-label="Email"
          >
          </a>

        </div>

        <div className="contact-end">

          <div className="contact-end-line" />

          <div className="contact-end-content">

            <div className="contact-end-copy">

              <p>
                End of page. Not the end of{" "}
                <span className="contact-handwritten">
                  work.
                </span>
              </p>

              <p className="contact-end-secondary">
                <span>More ideas.</span>{" "}
                <span>More experiments.</span>{" "}
                <strong>More to come.</strong>
              </p>

            </div>

            <span className="contact-end-index">
              04 / END
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;