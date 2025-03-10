import React from "react";

function Resume() {
  // This function gathers the resume data as a string, creates a Blob,
  // and triggers a download of that Blob as a text file.
  const handleDownload = () => {
    const resumeText = `
    Donald J. Trump
    ---------------
    
    EXPERIENCE
    ----------
    2017 - 2021
    45th President of the United States
    The White House, Washington, D.C.
    - Oversaw economic initiatives, foreign policy decisions, and national security strategies.
    - Engaged in significant policy reforms and reshaped political discourse.
    
    1971 - Present
    President, The Trump Organization (New York, NY)
    - Oversaw diverse real estate projects including hotels, resorts, and golf courses.
    - Led brand management, marketing strategies, and negotiations.
    
    2004 - 2015
    Executive Producer & Host, NBC's "The Apprentice"
    (New York, NY)
    - Created and hosted the reality TV show “The Apprentice.”
    - Expanded brand awareness on a global scale.

    EDUCATION
    ---------
    1966 - 1968
    Wharton School, University of Pennsylvania (Philadelphia, PA)
    Bachelor's Degree in Economics
    - Developed understanding of market dynamics guiding real estate and business strategies.

    1959 - 1964
    New York Military Academy (Cornwall, NY)
    High School Diploma
    - Learned discipline, leadership, and teamwork skills.

    PROFESSIONAL SKILLS
    -------------------
    - Real Estate Development
    - Negotiation & Deal-Making
    - Media & Public Relations

    LANGUAGES
    ---------
    - English
    - Media Communication
    - Political Rhetoric
    `;

    const element = document.createElement("a");
    const file = new Blob([resumeText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "DonaldJTrumpResume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="d-flex flex-column h-100 bg-light">
      <main className="flex-shrink-0">
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
          <div className="container px-5">
            <a className="navbar-brand" href="/">
              <span className="fw-bolder text-primary">Thomas Lazsadi</span>
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
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
              {/* Experience Section */}
              <section>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h2 className="text-primary fw-bolder mb-0">Experience</h2>
                  <button
                    className="btn btn-primary px-4 py-3"
                    onClick={handleDownload}
                  >
                    <div className="d-inline-block bi bi-download me-2" />
                    Download Resume
                  </button>
                </div>

                {/* Experience Card 1 */}
                <div className="card shadow border-0 rounded-4 mb-5">
                  <div className="card-body p-5">
                    <div className="row align-items-center gx-5">
                      <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <div className="bg-light p-4 rounded-4">
                          <div className="text-primary fw-bolder mb-2">2017 - 2021</div>
                          <div className="small fw-bolder">45th President of the United States</div>
                          <div className="small text-muted">The White House</div>
                          <div className="small text-muted">Washington, D.C.</div>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div>
                          Served as the 45th President, overseeing economic initiatives,
                          foreign policy decisions, and national security strategies.
                          Engaged in significant policy reforms and reshaped political
                          discourse through extensive media engagement.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience Card 2 */}
                <div className="card shadow border-0 rounded-4 mb-5">
                  <div className="card-body p-5">
                    <div className="row align-items-center gx-5">
                      <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <div className="bg-light p-4 rounded-4">
                          <div className="text-primary fw-bolder mb-2">1971 - Present</div>
                          <div className="small fw-bolder">President</div>
                          <div className="small text-muted">The Trump Organization</div>
                          <div className="small text-muted">New York, NY</div>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div>
                          Oversaw diverse real estate projects including hotels, resorts,
                          and golf courses worldwide. Spearheaded negotiations, brand
                          management, and marketing strategies to grow the business into a
                          globally recognized name.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience Card 3 */}
                <div className="card shadow border-0 rounded-4 mb-5">
                  <div className="card-body p-5">
                    <div className="row align-items-center gx-5">
                      <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <div className="bg-light p-4 rounded-4">
                          <div className="text-primary fw-bolder mb-2">2004 - 2015</div>
                          <div className="small fw-bolder">Executive Producer & Host</div>
                          <div className="small text-muted">NBC's "The Apprentice"</div>
                          <div className="small text-muted">New York, NY</div>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div>
                          Created and hosted the reality TV show “The Apprentice,” guiding
                          contestants through real-world business challenges. Built a strong
                          media presence and expanded brand awareness on a national and
                          global scale.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Education Section */}
              <section>
                <h2 className="text-secondary fw-bolder mb-4">Education</h2>

                {/* Education Card 1 */}
                <div className="card shadow border-0 rounded-4 mb-5">
                  <div className="card-body p-5">
                    <div className="row align-items-center gx-5">
                      <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <div className="bg-light p-4 rounded-4">
                          <div className="text-secondary fw-bolder mb-2">1966 - 1968</div>
                          <div className="mb-2">
                            <div className="small fw-bolder">
                              Wharton School, University of Pennsylvania
                            </div>
                            <div className="small text-muted">Philadelphia, PA</div>
                          </div>
                          <div className="fst-italic">
                            <div className="small text-muted">Bachelor's Degree</div>
                            <div className="small text-muted">Economics</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div>
                          Gained foundational knowledge in economics and finance, developing
                          an understanding of market dynamics that later helped guide major
                          real estate ventures and business strategies.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education Card 2 */}
                <div className="card shadow border-0 rounded-4 mb-5">
                  <div className="card-body p-5">
                    <div className="row align-items-center gx-5">
                      <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <div className="bg-light p-4 rounded-4">
                          <div className="text-secondary fw-bolder mb-2">1959 - 1964</div>
                          <div className="mb-2">
                            <div className="small fw-bolder">New York Military Academy</div>
                            <div className="small text-muted">Cornwall, NY</div>
                          </div>
                          <div className="fst-italic">
                            <div className="small text-muted">High School Diploma</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div>
                          Developed discipline, leadership, and teamwork skills in a structured
                          military-focused educational environment.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Skills Section */}
              <section>
                <div className="card shadow border-0 rounded-4 mb-5">
                  <div className="card-body p-5">
                    {/* Professional skills list */}
                    <div className="mb-5">
                      <div className="d-flex align-items-center mb-4">
                        <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                          <i className="bi bi-tools" />
                        </div>
                        <h3 className="fw-bolder mb-0">
                          <span className="text-gradient d-inline">Professional Skills</span>
                        </h3>
                      </div>
                      <div className="row row-cols-1 row-cols-md-3 mb-4">
                        <div className="col mb-4 mb-md-0">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            Real Estate Development
                          </div>
                        </div>
                        <div className="col mb-4 mb-md-0">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            Negotiation &amp; Deal-Making
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            Media &amp; Public Relations
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Languages list */}
                    <div className="mb-0">
                      <div className="d-flex align-items-center mb-4">
                        <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                          <i className="bi bi-code-slash" />
                        </div>
                        <h3 className="fw-bolder mb-0">
                          <span className="text-gradient d-inline">Languages</span>
                        </h3>
                      </div>
                      <div className="row row-cols-1 row-cols-md-3 mb-4">
                        <div className="col mb-4 mb-md-0">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            English
                          </div>
                        </div>
                        <div className="col mb-4 mb-md-0">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            Media Communication
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            Political Rhetoric
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>

      {/* Footer*/}
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
