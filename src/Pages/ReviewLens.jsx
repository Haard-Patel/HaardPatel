import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import Cursor from "../components/Cursor/Cursor";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

import "./ReviewLens.css";

function ReviewLensPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="project-detail-page">
      <Cursor />
      <Navbar />

      <main className="project-detail-main">

        {/* =========================================
            BACK TO SELECTED WORK
        ========================================= */}

        <div className="project-detail-container">
          <Link
            to="/"
            state={{ scrollTo: "projects" }}
            className="project-detail-back"
          >
            <ArrowLeft size={15} strokeWidth={1.4} />
            <span>Selected Work</span>
          </Link>
        </div>

        {/* =========================================
            HERO
        ========================================= */}

        <section className="project-detail-hero">
          <div className="project-detail-container">

            <div className="project-detail-meta">
              <span>03 / PROJECT</span>
              <span>2026 — PRESENT</span>
            </div>

            <div className="project-detail-title-area">

              <div>
                <p className="project-detail-eyebrow">
                  Data · Analytics · NLP
                </p>

                <h1>
                  ReviewLens
                  <br />
                  <span>Customer Review Intelligence Platform.</span>
                </h1>
              </div>

              <div className="project-detail-status">
                <span className="project-detail-status-dot" />
                CURRENTLY BUILDING
              </div>

            </div>

            <div className="project-detail-intro">

              <p>
                A data analytics and sentiment intelligence project exploring
                what customer reviews reveal about product satisfaction,
                ratings, helpfulness, and recurring customer experiences.
              </p>

              <div className="project-detail-creator">
                <span>CREATOR</span>
                <strong>Haard Patel</strong>
                <span>Founder &amp; Creator</span>
              </div>

            </div>

          </div>
        </section>

        {/* =========================================
            OVERVIEW
        ========================================= */}

        <section className="project-detail-section">
          <div className="project-detail-container">

            <div className="project-detail-section-grid">

              <div className="project-detail-section-label">
                <span>01</span>
                <span>Overview</span>
              </div>

              <div className="project-detail-content">

                <h2>
                  Customer reviews,
                  <br />
                  made <span>intelligible.</span>
                </h2>

                <p>
                  ReviewLens is an analytical project built around the Amazon
                  Fine Food Reviews dataset, containing 568,454 customer
                  reviews and associated product, user, rating, and
                  helpfulness information.
                </p>

                <p>
                  The project explores how structured analysis and natural
                  language processing can turn large volumes of customer
                  feedback into meaningful patterns around sentiment,
                  satisfaction, ratings, product experiences, and customer
                  behaviour.
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* =========================================
            DIRECTION
        ========================================= */}

        <section className="project-detail-section project-detail-section-alt">
          <div className="project-detail-container">

            <div className="project-detail-section-grid">

              <div className="project-detail-section-label">
                <span>02</span>
                <span>Direction</span>
              </div>

              <div className="project-detail-content">

                <h2>
                  From raw reviews
                  <br />
                  to <span>customer insight.</span>
                </h2>

                <div className="project-detail-feature-grid">

                  <div className="project-detail-feature">
                    <span>01</span>
                    <h3>Exploratory Data Analysis</h3>
                    <p>
                      Investigating dataset structure, distributions,
                      missing values, review behaviour, and relationships
                      between customer and product attributes.
                    </p>
                  </div>

                  <div className="project-detail-feature">
                    <span>02</span>
                    <h3>Sentiment Analysis</h3>
                    <p>
                      Applying VADER-based sentiment analysis to identify
                      positive, neutral, and negative customer feedback
                      within large-scale review text.
                    </p>
                  </div>

                  <div className="project-detail-feature">
                    <span>03</span>
                    <h3>Customer &amp; Rating Analysis</h3>
                    <p>
                      Exploring rating distributions, review helpfulness,
                      customer behaviour, and relationships between sentiment
                      and product ratings.
                    </p>
                  </div>

                  <div className="project-detail-feature">
                    <span>04</span>
                    <h3>Data Visualization</h3>
                    <p>
                      Turning analytical findings into clear visualizations
                      that make trends, patterns, comparisons, and customer
                      behaviour easier to understand.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =========================================
            DATASET
        ========================================= */}

        <section className="project-detail-section">
          <div className="project-detail-container">

            <div className="project-detail-section-grid">

              <div className="project-detail-section-label">
                <span>03</span>
                <span>Dataset</span>
              </div>

              <div className="project-detail-content">

                <h2>
                  568,454 reviews.
                  <br />
                  <span>One customer voice.</span>
                </h2>

                <p>
                  The project uses the Amazon Fine Food Reviews dataset to
                  investigate customer feedback at scale. Each review
                  provides structured information alongside free-form
                  customer text.
                </p>

                <div className="project-detail-dataset-grid">

                  <div className="project-detail-dataset-item">
                    <span>01</span>
                    <strong>Review Text</strong>
                    <p>
                      Written customer feedback used for text and sentiment
                      analysis.
                    </p>
                  </div>

                  <div className="project-detail-dataset-item">
                    <span>02</span>
                    <strong>Score</strong>
                    <p>
                      Product rating used to study satisfaction and its
                      relationship with sentiment.
                    </p>
                  </div>

                  <div className="project-detail-dataset-item">
                    <span>03</span>
                    <strong>Helpfulness</strong>
                    <p>
                      Customer voting information used to examine which
                      reviews receive greater community value.
                    </p>
                  </div>

                  <div className="project-detail-dataset-item">
                    <span>04</span>
                    <strong>Product &amp; User Information</strong>
                    <p>
                      Product and customer identifiers supporting behavioural
                      and product-level analysis.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =========================================
            STACK
        ========================================= */}

        <section className="project-detail-section">
          <div className="project-detail-container">

            <div className="project-detail-section-grid">

              <div className="project-detail-section-label">
                <span>04</span>
                <span>Stack</span>
              </div>

              <div className="project-detail-content">

                <h2>
                  Built with
                  <br />
                  <span>data-focused tools.</span>
                </h2>

                <div className="project-detail-stack">
                  <span>Python</span>
                  <span>Pandas</span>
                  <span>NumPy</span>
                  <span>VADER</span>
                  <span>Matplotlib</span>
                  <span>Jupyter- Notebook</span>
                  <span>FastAPI</span>
                  <span>React</span>
                </div>

                <p className="project-detail-stack-note">
                  FastAPI and React will support the web-based version of
                  ReviewLens as the project evolves from notebook-based
                  analysis into an interactive application which was part of my internship project)
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* =========================================
            PREVIEW
        ========================================= */}

        <section className="project-detail-section project-detail-preview-section">
          <div className="project-detail-container">

            <div className="project-detail-section-grid">

              <div className="project-detail-section-label">
                <span>05</span>
                <span>Preview</span>
              </div>

              <div className="project-detail-content">

                <div className="project-coming-soon">

                  <span>PROJECT IN DEVELOPMENT</span>

                  <h2>
                    Coming
                    <br />
                    <span>soon.</span>
                  </h2>

                  <p>
                    The analytical work is currently being developed.
                    An interactive ReviewLens interface and live demo will
                    be introduced as the project evolves into a web
                    application.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =========================================
            PROJECT LINKS
        ========================================= */}

        <section className="project-detail-links-section">
          <div className="project-detail-container">

            <div className="project-detail-links">

              <a
                href="https://github.com/Haard-Patel/ReviewLens"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <span>GITHUB</span>
                  <strong>View Repository ↗</strong>
                </div>
              </a>

              <a
                href="#"
                onClick={(event) => event.preventDefault()}
                className="project-detail-disabled-link"
              >
                <div>
                  <span>LIVE DEMO</span>
                  <strong>Coming Soon...</strong>
                </div>
              </a>

            </div>

          </div>
        </section>

        {/* =========================================
            PREVIOUS / NEXT
        ========================================= */}

        <section className="project-detail-navigation">
          <div className="project-detail-container">

            <div className="project-detail-nav">

              <Link
                to="/projects/it-service-management"
                className="project-detail-nav-link previous"
              >
                <span className="project-detail-nav-label">
                  <ArrowLeft size={14} strokeWidth={1.4} />
                  Previous
                </span>

                <strong>IT Service Management</strong>
              </Link>

              <Link
                to="/projects/nutritracker"
                className="project-detail-nav-link next"
              >
                <span className="project-detail-nav-label">
                  Next
                  <ArrowRight size={14} strokeWidth={1.4} />
                </span>

                <strong>NutriTracker</strong>
              </Link>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default ReviewLensPage;
