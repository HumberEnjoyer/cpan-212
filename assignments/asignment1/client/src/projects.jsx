import React from "react";

function Projects() {
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
       {/* Projects Section */}
        <section className="py-5">
          <div className="container px-5 mb-5">
            <div className="text-center mb-5">
              <h1 className="display-5 fw-bolder mb-0">
                <span className="text-gradient d-inline">Projects</span>
              </h1>
            </div>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-11 col-xl-9 col-xxl-8">
                {/* Project Card 1: FlockBlock */}
                <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                  <div className="card-body p-0">
                    <div className="d-flex align-items-center">
                      <div className="p-5">
                        <h2 className="fw-bolder">FlockBlock</h2>
                        <p>
                          FlockBlock is a smart app designed to keep birds away from your property.
                          Using ultrasonic sound waves and motion detection, it detects incoming birds 
                          and emits deterrent frequencies tailored to their hearing range. Ideal for 
                          farmers, urban dwellers, and anyone tired of unwanted feathered guests.
                          Customizable settings allow users to adjust frequency levels, schedule active 
                          hours, and even log bird activity.
                        </p>
                      </div>
                      <img
                        className="img-fluid"
                        src="https://creolened.com/wp-content/uploads/2017/09/pigeon-dj.gif"
                        alt="FlockBlock App"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Card 2: VerbalFilter */}
                <div className="card overflow-hidden shadow rounded-4 border-0">
                  <div className="card-body p-0">
                    <div className="d-flex align-items-center">
                      <div className="p-5">
                        <h2 className="fw-bolder">VerbalFilter</h2>
                        <p>
                          VerbalFilter is your personal speech coach, helping you avoid saying 
                          something you'll regret. The app continuously records your speech in 
                          real-time, analyzing for filler words, inappropriate remarks, and 
                          accidental blunders. With AI-driven insights, it provides immediate 
                          feedback, highlighting phrases that may be misunderstood or could 
                          harm your professional or social interactions. Whether you're preparing 
                          for a meeting, public speaking, or just want to improve your communication, 
                          VerbalFilter has you covered.
                        </p>
                      </div>
                      <img
                        className="img-fluid"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtjUXeAbeaD5UIYvr0UW999nYc0WB5d8vtoQ&s"
                        alt="VerbalFilter App"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action section */}
        <section className="py-5 bg-gradient-primary-to-secondary text-white">
          <div className="container px-5 my-5">
            <div className="text-center">
              <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
              <a
                className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder"
                href="/contact"
              >
                Contact me
              </a>
            </div>
          </div>
        </section>
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

export default Projects;
