import "./Experience.css";

const experiences = [

  {
    number: "01",
    title: "Data Analyst Intern",
    company: (
      <>
        CodeAlpha -{" "}
        <a
          href="https://github.com/Haard-Patel/CodeAlpha_DataAnalytics"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>GitHub Repo</span>
        </a>
      </>
    ),
    location: "Remote",
    duration: "October 2026- November 2026",

    metrics: [
      {
        value: "4",
        label: "Analytics Projects Completed on Amazon Fine Food Reviews Dataset",
      },
      {
        value: "568K+",
        label: "Customer Review Data Points Analyzed",
      },
      {
        value: "5",
        label: "Analytical and visualization tools used",
      },
    ],

    points: [
      {
        number: "01",
        title: "Explortory data analysis (EDA)",
        description:
          "Performed EDA on large datasets of 568K+ customer reviews to examine datasets, qualitatively and quantitatively analyze data, rating distributions, review lenght nd helpfulness ptterns.",
      },
      {
        number: "02",
        title: "Data cleaning & preprocessing",
        description:
          "Cleaned and transformed raw review data by converting data types, parsing test and timestmps and helpfulness metrics, identifying invalid records removing duplictes, spliting spaces and creting analysis ready parse_reviews.",
      },
      {
        number: "03",
        title: "Data visualization",
        description:
          "Used python, matplotlib and pandas to communicate rating distributions, review acitivity , review length into visualizations.",
      },
      {
        number: "04",
        title: "NLP Sentiment analysis",
        description:
          "Performed VADER sentiment analysis on customer reviews using NLP techniques to classify reviews as positive, negative, or neutral and identify key themes and trends in customer feedback.",
      },
    ],
  },

  {
    number: "02",
    title: "Theatre Manager",
    company: "Cineplex",
    location: "Regina, SK",
    duration: "December 2024",
    

    metrics: [
      {
        value: "25+",
        label: "Team Members Managed",
      },
      {
        value: "200+",
        label: "Resolved Customer Escalations",
      },
      {
        value: "25%",
        label: "Improved Operational Excellence",
      },
    ],

    points: [
      {
        number: "01",
        title: "Theatre operations & service",
        description:
          "Managed day-to-day theatre operations while maintaining a strong focus on customer service, team coordination, and efficient execution leading to high customer satisfaction and operational excellence.",
      },
      {
        number: "02",
        title: "Technical troubleshooting",
        description:
          "Troubleshot digital projection, audio, POS, and other technical systems to keep theatre operations running smoothly.",
      },
      {
        number: "03",
        title: "Systems & workflow coordination",
        description:
          "Worked with internal teams and vendors to resolve operational and technical issues involving equipment, scheduling, playlists, and systems.",
      },
      {
        number: "04",
        title: "Team leadership",
        description:
          "Supported and trained team members while coordinating responsibilities, resolving issues under pressure, and maintaining operational standards.",
      },
    ],
  },

  {
    number: "03",
    title: "Software Development Mentor",
    company: "University of Saskatchewan",
    location: "Saskatoon, SK",
    duration: "May 2024 - December 2024",

    metrics: [
      {
        value: "25+",
        label: "Students Mentored",
      },
      {
        value: "100+",
        label: "Codebaes Reviewed",
      },
      {
        value: "7",
        label: "Git Repositories Managed",
      },
    ],

    points: [
      {
        number: "01",
        title: "Programming support & debugging",
        description:
          "Helped students understand and resolve programming, runtime, build, and environment issues across Linux and Windows development environments.",
      },
      {
        number: "02",
        title: "Git & development workflows",
        description:
          "Guided students through Git branching, merging, conflict resolution, deployment and practical software development workflows.",
      },
      {
        number: "03",
        title: "Code review & problem solving",
        description:
          "Reviewed Python, Java, and C++ implementations and helped students reason through technical problems and improve their solutions for efficiency, correctness, robustness and maintainability.",
      },
      {
        number: "04",
        title: "Technical communication",
        description:
          "Explained technical concepts clearly and adapted guidance to different levels of programming experience while supporting competition and development activities.",
      },
    ],
  },

  {
    number: "04",
    title: "Technical Support Specialist",
    company: "Prince Technology",
    location: "Remote, India",
    duration: "July 2023 - August 2024",

    metrics: [
      {
        value: "92%",
        label: "First Contact Resolution Rate",
      },
      {
        value: "80+",
        label: "Troubleshooting Steps Documented",
      },
      {
        value: "75+",
        label: "Incident Supported",
      },
    ],

    points: [
      {
        number: "01",
        title: "Production troubleshooting",
        description:
          "Investigated production incidents involving user access, data synchronization, API integrations, authentication, and system configuration.",
      },
      {
        number: "02",
        title: "Log analysis & issue reproduction",
        description:
          "Analyzed logs, reproduced technical issues, identified failure conditions, and documented findings to support reliable resolutions.",
      },
      {
        number: "03",
        title: "Cross-functional engineering support",
        description:
          "Collaborated with developers to communicate technical findings, isolate root causes, and coordinate fixes across development and production environments.",
      },
      {
        number: "04",
        title: "Systems & integration support",
        description:
          "Worked across configuration, authentication, integrations, and environment-specific issues while documenting recurring failures and troubleshooting approaches.",
      },
    ],
  },
];

function Experience() {
  return (
    <main className="experience-page">
      <section className="experience-hero">
        <div className="experience-container">
          <p className="experience-eyebrow">
            CAREER · TECHNICAL EXPERIENCE
          </p>

          <h1>
            Experience<span>.</span>
          </h1>

          <p className="experience-intro">
            A look at the roles, systems, and problems I've worked
            with across software development, technical support, and
            technology operations.
          </p>
        </div>
      </section>

      <section className="experience-list">
        <div className="experience-container">
          {experiences.map((experience) => (
            <article
              className="experience-item"
              key={experience.number}
            >
              <div className="experience-header">
                <span className="experience-number">
                  {experience.number}
                </span>

                <div className="experience-role">
                  <h2>{experience.title}</h2>

                  <div className="experience-company">
                    <span>{experience.company}</span>
                    <span>/</span>
                    <span>{experience.location}</span>
                    <span>/</span>
                    <span>{experience.duration}</span>
                  </div>
                </div>
              </div>

              <div className="experience-metrics">
                {experience.metrics.map((metric, index) => (
                  <div
                    className="experience-metric"
                    key={`${experience.number}-${index}`}
                  >
                    <span className="experience-metric-label">
                      {metric.label}
                    </span>

                    <strong>{metric.value}</strong>
                  </div>
                ))}
              </div>

              <div className="experience-points">
                {experience.points.map((point) => (
                  <div
                    className="experience-point"
                    key={point.number}
                  >
                    <span className="experience-point-number">
                      {point.number}
                    </span>

                    <div className="experience-point-content">
                      <h3>{point.title}</h3>
                      <p>{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}

          <div className="experience-closing">
            <p>
              <strong>
              Great software is built where thoughtful systems meet 
              </strong>{" "}
              <em>meaningful experiences.</em>{" "}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Experience;