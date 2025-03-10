// client/src/resume.jsx
import React, { useEffect, useState } from "react";

function Resume() {
  // States to hold data from server
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [overview, setOverview] = useState({});

  // Fetch data on component mount
  useEffect(() => {
    // Education
    fetch("http://localhost:8000/fetch/getEdu")
      .then((res) => res.json())
      .then((data) => setEducation(data))
      .catch((err) => console.error("Error fetching education:", err));

    // Experience
    fetch("http://localhost:8000/fetch/getExp")
      .then((res) => res.json())
      .then((data) => setExperience(data))
      .catch((err) => console.error("Error fetching experience:", err));

    // Overview
    fetch("http://localhost:8000/fetch/getOverview")
      .then((res) => res.json())
      .then((data) => setOverview(data))
      .catch((err) => console.error("Error fetching overview:", err));
  }, []);



  return (
    <div className="d-flex flex-column h-100 bg-light">
      <main className="flex-shrink-0">
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
          <div className="container px-5">
            <a className="navbar-brand" href="/">
              <span className="fw-bolder text-primary">
             
                Thomas Lazsadi
              </span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/resume">
                    Resume
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div className="container px-5 my-5">
      
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0">
              <span className="text-gradient d-inline">Resume</span>
            </h1>
          </div>
          <div className="text-center mb-5">
            {overview.name && <h2>{overview.name}</h2>}
            {overview.title && <h3>{overview.title}</h3>}
            {overview.brief && <p>{overview.brief}</p>}
          </div>

          {/* Education Section */}
          <section>
            <h2 className="text-secondary fw-bolder mb-4">Education</h2>

            {education.map((edu, index) => (
              <div key={index} className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-secondary fw-bolder mb-2">
                          {edu.from} - {edu.to}
                        </div>
                        <div className="mb-2">
                          <div className="small fw-bolder">{edu.school}</div>
                        </div>
                        <div className="fst-italic">
                          <div className="small text-muted">{edu.degree}</div>
                          {edu.major && (
                            <div className="small text-muted">{edu.major}</div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div>
                     
                        Gained foundational knowledge in economics and finance.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Experience Section */}
          <section>
            <h2 className="text-primary fw-bolder mb-4">Experience</h2>

            {experience.map((exp, index) => (
              <div key={index} className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-primary fw-bolder mb-2">
                          {exp.from} - {exp.to}
                        </div>
                        <div className="small fw-bolder">{exp.role}</div>
                        <div className="small text-muted">{exp.company}</div>
                        <div className="small text-muted">{exp.location}</div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div>
                     
                        Led business operations and engaged in public relations.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto">
              <div className="small m-0">Made with ❤️</div>
            </div>
            <div className="col-auto">
              <a className="small" href="#!">
                Stuff
              </a>
              <span className="mx-1">·</span>
              <a className="small" href="#!">
                More Stuff
              </a>
              <span className="mx-1">·</span>
              <a className="small" href="#!">
                idk yet
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Resume;
