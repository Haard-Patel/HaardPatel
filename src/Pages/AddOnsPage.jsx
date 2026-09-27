import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";

import Navbar from "../components/Navbar/Navbar";
import Cursor from "../components/Cursor/Cursor";
import Footer from "../components/Footer/Footer";

import "./AddOnsPage.css";

function AddOnsPage() {
  /*
   * Stores which certificate is currently open.
   *
   * null   = no certificate open
   * "itil" = ITIL certificate open
   * "claude" = Claude Code certificate open
   */
  const [openCertificateName, setOpenCertificateName] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  /*
   * Lock page scrolling while the certificate lightbox is open.
   * Also allows the Escape key to close it.
   */
  useEffect(() => {
    if (!openCertificateName) {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpenCertificateName(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openCertificateName]);

  const openCertificate = (certificateName) => {
    setOpenCertificateName(certificateName);
  };

  const closeCertificate = () => {
    setOpenCertificateName(null);
  };

  return (
    <div className="addons-page">
      <Cursor />
      <Navbar />

      <main className="addons-main">
        <div className="addons-container">

          {/* BACK TO HOME */}
          <Link
            to="/"
            className="addons-back"
          >
            <ArrowLeft size={15} strokeWidth={1.4} />
            <span>Back to Home</span>
          </Link>

          {/* HERO */}
          <section className="addons-hero">
            <div className="addons-eyebrow">
              <span>06 / ADD-ONS</span>
              <span>2026</span>
            </div>

            <h1>
              Certifications
              <br />
              &amp; Credentials.
            </h1>

            <p>
              Professional certifications and ongoing learning that
              complement my technical background and continue to expand
              my knowledge across technology, IT, business, and support.
            </p>
          </section>

          {/* CERTIFICATIONS */}
          <section className="addons-section">
            <div className="certification-list">

              {/* =====================================================
                  01 — ITIL V4 FOUNDATION
              ===================================================== */}
              <article className="certification-item">
                <div className="certification-number">
                  01
                </div>

                <div className="certification-content">
                  <h2>ITIL V4 Foundation (ITSM Fundamentals)</h2>

                  <span className="certification-status">
                    COMPLETED · UDEMY
                  </span>

                  <p>
                    IT service management fundamentals covering
                    service management concepts, processes, and
                    IT service delivery practices.
                  </p>

                  {/* ITIL CERTIFICATE THUMBNAIL */}
                  <button
                    type="button"
                    className="certificate-thumbnail-button"
                    onClick={() => openCertificate("itil")}
                    aria-label="View ITIL certificate"
                  >
                    <img
                      src="/images/Itil.jpeg"
                      alt="ITIL certificate"
                      className="certificate-thumbnail"
                    />

                    <span className="certificate-thumbnail-label">
                      VIEW CERTIFICATE
                    </span>
                  </button>
                </div>
              </article>


              {/* =====================================================
                  02 — DIGITAL MARKETING
              ===================================================== */}
              <article className="certification-item">
                <div className="certification-number">
                  02
                </div>

                <div className="certification-content">
                  <h2>Digital Marketing</h2>

                  <span className="certification-status">
                    COMPLETED · GOOGLE
                  </span>

                  <p>
                    Digital marketing fundamentals covering online
                    marketing concepts, digital channels, and
                    strategies for reaching and engaging audiences.
                  </p>
                </div>
              </article>


              {/* =====================================================
                  03 — CLAUDE CODE
              ===================================================== */}
              <article className="certification-item">
                <div className="certification-number">
                  03
                </div>

                <div className="certification-content">
                  <h2>Claude Code</h2>

                  <span className="certification-status">
                    COMPLETED · ANTHROPIC
                  </span>

                  <p>
                    Claude Code certification covering AI-assisted
                    software development, coding workflows, and
                    effective use of Claude Code for building and
                    working with software projects.
                  </p>

                  {/* CLAUDE CODE CERTIFICATE THUMBNAIL */}
                  <button
                    type="button"
                    className="certificate-thumbnail-button"
                    onClick={() => openCertificate("claude")}
                    aria-label="View Claude Code certificate"
                  >
                    <img
                      src="/images/ClaudeCode.jpeg"
                      alt="Claude Code certificate"
                      className="certificate-thumbnail"
                    />

                    <span className="certificate-thumbnail-label">
                      VIEW CERTIFICATE
                    </span>
                  </button>
                </div>
              </article>


              {/* =====================================================
                  04 — AWS
              ===================================================== */}
              <article className="certification-item">
                <div className="certification-number">
                  04
                </div>

                <div className="certification-content">
                  <h2>AWS Cloud Practitioner Essentials</h2>

                  <span className="certification-status">
                    CURRENTLY DOING · AWS
                  </span>

<p>
  Building foundational AWS knowledge across cloud computing,
  security, storage, networking, databases, and pricing,
  with exposure to
  <br />
  Amazon EC2, S3, RDS, DynamoDB, VPC, Lambda,
  CloudFront, Route 53, CloudWatch, IAM, Kinesis,
  <br />
  Elastic Beanstalk, Elastic Load Balancing, Auto Scaling,
  and CloudFormation.
</p>

                </div>
              </article>


              {/* =====================================================
                  05 — COMPTIA A+
              ===================================================== */}
              <article className="certification-item">
                <div className="certification-number">
                  05
                </div>

                <div className="certification-content">
                  <h2>CompTIA A+</h2>

                  <span className="certification-status">
                    CURRENTLY DOING · COMPTIA
                  </span>

                  <p>
                    Currently working toward the CompTIA A+
                    certification to strengthen foundational
                    IT support, hardware, software, and
                    troubleshooting knowledge.
                  </p>
                </div>
              </article>


              {/* =====================================================
                  06 — APPLE
              ===================================================== */}
              <article className="certification-item">
                <div className="certification-number">
                  06
                </div>

                <div className="certification-content">
                  <h2>Apple Certified IT Professional</h2>

                  <span className="certification-status">
                    CURRENTLY DOING · APPLE · ACIT
                  </span>

                  <p>
                    Currently completing Apple’s IT professional
                    certification focused on technical support,
                    troubleshooting, and Apple technology.
                  </p>
                </div>
              </article>


              {/* =====================================================
                  07 — TECHNICAL SUPPORT
              ===================================================== */}
              <article className="certification-item">
                <div className="certification-number">
                  07
                </div>

                <div className="certification-content">
                  <h2>Technical Support</h2>

                  <span className="certification-status">
                    IN THE QUEUE · GOOGLE · COURSERA
                  </span>

                  <p>
                    Planned certification focused on technical
                    support fundamentals, troubleshooting, and
                    IT support practices.
                  </p>
                </div>
              </article>


              {/* =====================================================
                  08 — ECBA
              ===================================================== */}
              <article className="certification-item">
                <div className="certification-number">
                  08
                </div>

                <div className="certification-content">
                  <h2>ECBA</h2>

                  <span className="certification-status">
                    IN THE QUEUE · IIBA
                  </span>

                  <p>
                    Planned entry-level certification focused on
                    business analysis fundamentals, requirements,
                    stakeholders, and business analysis practices.
                  </p>
                </div>
              </article>

            </div>
          </section>

        </div>
      </main>


      {/* =========================================================
          CERTIFICATE LIGHTBOX
          
          Only ONE lightbox exists.
          The image changes depending on which certificate
          was clicked.
      ========================================================= */}

      {openCertificateName && (
        <div
          className="certificate-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={
            openCertificateName === "itil"
              ? "ITIL certificate preview"
              : "Claude Code certificate preview"
          }
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeCertificate();
            }
          }}
        >
          <div className="certificate-lightbox-content">

            {/* CLOSE BUTTON */}
            <button
              type="button"
              className="certificate-close"
              onClick={closeCertificate}
              aria-label="Close certificate preview"
            >
              <X
                size={24}
                strokeWidth={1.4}
              />
            </button>


            {/* ITIL CERTIFICATE */}
            {openCertificateName === "itil" && (
              <img
                src="/images/Itil.jpeg"
                alt="ITIL certificate enlarged"
                className="certificate-lightbox-image"
              />
            )}


            {/* CLAUDE CODE CERTIFICATE */}
            {openCertificateName === "claude" && (
              <img
                src="/images/ClaudeCode.jpeg"
                alt="Claude Code certificate enlarged"
                className="certificate-lightbox-image"
              />
            )}

          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default AddOnsPage;
