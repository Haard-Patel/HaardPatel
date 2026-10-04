
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import Cursor from "../components/Cursor/Cursor";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

import "./EcommerceAnalyticsPage.css";

function EcommerceAnalyticsPage() {
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

        {/* Back to Selected Work */}
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

        {/* Hero */}
        <section className="project-detail-hero">
          <div className="project-detail-container">

          <div className="itsm-detail-meta">
              <span>01 / PROJECT</span>
              <span>2026</span>
            </div>

            <div className="project-detail-title-area">
              <div>
                <p className="project-detail-eyebrow">
                  Full Stack · Data · AI
                </p>

                <h1>
                  E-Commerce Analytics
                  <br />
                  <span>&amp; Intelligence Platform.</span>
                </h1>
              </div>

              <div className="project-detail-status">
                <span className="project-detail-status-dot" />
                CURRENTLY BUILDING
              </div>
            </div>

            <div className="project-detail-intro">
              <p>
                A Full Stack Analytical platform turning e-commerce data into
                clear analytics, business intelligence, and
                eventually AI-assisted insights.
              </p>

              <div className="project-detail-creator">
                <span>CREATOR</span>
                <strong>Haard Patel</strong>
                <span>Founder &amp; Creator</span>
              </div>
            </div>

          </div>
        </section>

        {/* Overview */}
        <section className="project-detail-section">
          <div className="project-detail-container">

            <div className="project-detail-section-grid">

              <div className="project-detail-section-label">
                <span>01</span>
                <span>Overview</span>
              </div>

              <div className="project-detail-content">
                <h2>
                  E-Commerce data,
                  <br />
                  made <span>useful.</span>
                </h2>

                <p>
                  A project exploring how to transform rw e-commerce transction data into actionable business intelligence.
                  Extracting, cleaning, validating, transforming, analysing and visualizing data to generate insights that can help businesses make better decisions through interactive analytical dashboard.
                </p>

                <p>
                  The goal is simple: revenue analysis, customer behviour, product performnce, make patterns, trends,
                  and business performance easier to understand, eventully forecasting and anomaly detection.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Direction */}
        <section className="project-detail-section project-detail-section-alt">
          <div className="project-detail-container">

            <div className="project-detail-section-grid">

              <div className="project-detail-section-label">
                <span>02</span>
                <span>Direction</span>
              </div>

              <div className="project-detail-content">

                <h2>
                  From dashboards
                  <br />
                  to <span>intelligence.</span>
                </h2>

                <div className="project-detail-feature-grid">

                  <div className="project-detail-feature">
                    <span>01</span>
                    <h3>Analytics</h3>
                    <p>
                      SQL-based sales, products, customers, and performance
                      presented through useful metrics, and data investigation and visualization.
                    </p>
                  </div>

                  <div className="project-detail-feature">
                    <span>02</span>
                    <h3>Data Engineering</h3>
                    <p>
                    Multi-format data ingestion, ETL, validation, and PostgreSQL data modeling.
                    </p>
                  </div>

                  <div className="project-detail-feature">
                    <span>03</span>
                    <h3>AI / ML</h3>
                    <p>
                      Exploring intelligent ways to discover
                      patterns and generate insights on revenue forecasting, anomaly detection, and customer segmentation.
                    </p>
                  </div>

                  <div className="project-detail-feature">
                    <span>04</span>
                    <h3>Cloud</h3>
                    <p>
                    AWS-based data lake and analytics architecture using S3, Glue, Athena, RDS, IAM, and CloudWatch.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Stack */}
        <section className="project-detail-section">
          <div className="project-detail-container">

            <div className="project-detail-section-grid">

              <div className="project-detail-section-label">
                <span>03</span>
                <span>Stack</span>
              </div>

              <div className="project-detail-content">

                <h2>
                  Built with
                  <br />
                  <span>modern tools.</span>
                </h2>

                <div className="project-detail-stack">
                  <span>Python</span>
                  <span>PostgresSQL</span>
                  <span>Next.js</span>
                  <span>AWS - S3, Glue, Athena, RDS</span>
                  <span>FASTAPIs</span>
                  <span>Node.js</span>
                  <span>Pandas</span>
                  <span>ETL modeling</span>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Preview */}
        <section className="project-detail-section project-detail-preview-section">
          <div className="project-detail-container">

            <div className="project-detail-section-grid">

              <div className="project-detail-section-label">
                <span>04</span>
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
                    The interface, repository, and live demo
                    will appear here as the project develops.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Project Links */}
        <section className="itsm-detail-links-section">
          <div className="itsm-detail-container">

            <div className="itsm-detail-links">

              <a
                href="https://github.com/Haard-Patel/CommerceIQ"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <span>GITHUB</span>
                  <strong>View Repository ↗</strong>
                </div>
              </a>

              <a
                href="Coming Soon"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <span>LIVE DEMO</span>
                  <strong>Coming Soon...</strong>
                </div>
              </a>

            </div>

          </div>
        </section>
        {/* Previous / Next */}
        <section className="project-detail-navigation">
          <div className="project-detail-container">

            <div className="project-detail-nav">

              <Link
                to="/projects/nutritracker"
                className="project-detail-nav-link previous"
              >
                <span className="project-detail-nav-label">
                  <ArrowLeft size={14} strokeWidth={1.4} />
                  Previous
                </span>

                <strong>NutriTracker</strong>
              </Link>

              <Link
                to="/projects/it-service-management"
                className="project-detail-nav-link next"
              >
                <span className="project-detail-nav-label">
                  Next
                  <ArrowRight size={14} strokeWidth={1.4} />
                </span>

                <strong>IT Service Management</strong>
              </Link>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default EcommerceAnalyticsPage;
