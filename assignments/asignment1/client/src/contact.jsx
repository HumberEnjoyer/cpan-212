import React, { useState } from "react";

function Contact() {
  // State for each form field
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Update state whenever user types in a field
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent normal page reload

    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not OK");
      }

      const resData = await response.json();
      console.log("Server says:", resData);
   
      alert("Form submitted! Check your server console.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="d-flex flex-column h-100">
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
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/resume">Resume</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Page content */}
        <section className="py-5">
          <div className="container px-5">
            {/* Contact form */}
            <div className="bg-light rounded-4 py-5 px-4 px-md-5">
              <div className="text-center mb-5">
                <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
                  <i className="bi bi-envelope" />
                </div>
                <h1 className="fw-bolder">Get in touch</h1>
                <p className="lead fw-normal text-muted mb-0">Let's work together!</p>
              </div>
              <div className="row gx-5 justify-content-center">
                <div className="col-lg-8 col-xl-6">
                  {/* Updated form with onSubmit and controlled inputs */}
                  <form onSubmit={handleSubmit}>
                    {/* Name input */}
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Enter your name..."
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="name">Full name</label>
                    </div>
                    {/* Email input */}
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="email">Email address</label>
                    </div>
                    {/* Phone input */}
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="phone"
                        type="tel"
                        placeholder="(123) 456-7890"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="phone">Phone number</label>
                    </div>
                    {/* Message input */}
                    <div className="form-floating mb-3">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Enter your message here..."
                        style={{ height: "10rem" }}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="message">Message</label>
                    </div>

                    {/* Submit Button */}
                   <div className="d-grid">
                      <button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                  {/* End form */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto">
              <div className="small m-0">Made with ❤️</div>
            </div>
            <div className="col-auto">
              <a className="small" href="#!">Stuff</a>
              <span className="mx-1">·</span>
              <a className="small" href="#!">More Stuff</a>
              <span className="mx-1">·</span>
              <a className="small" href="#!">idk yet</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
