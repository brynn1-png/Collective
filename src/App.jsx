import React, { useState } from "react";
import {
  HERO_DATA,
  MEMBERS,
  TECH_STACK,
  PROJECTS,
  CONTACT_DATA,
} from "./portfolioData";

function App() {
  const [activeFilter] = useState("ALL");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formError, setFormError] = useState(null);
  const [showPrivateModal, setShowPrivateModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleProjectClick = (project) => {
    if (project.isPrivate) {
      setShowPrivateModal(true);
    } else if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  };

  const filteredProjects =
    activeFilter === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormSubmitting(true);
    setFormError(null);

    try {
      const response = await fetch(CONTACT_DATA.formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      } else {
        const data = await response.json();
        throw new Error(
          data.error || "Form submission failed. Please check your setup.",
        );
      }
    } catch (err) {
      console.error("Formspree Error:", err);
      setFormError(
        err.message || "An unexpected error occurred. Please try again.",
      );
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark flex flex-col font-sans selection:bg-brand-dark selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-brand-bg/90 backdrop-blur-md border-b border-black/5 py-5 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
        <a
          href="#home"
          className="text-xl font-bold tracking-tight uppercase hover:opacity-75 transition-opacity"
        >
          Collective®
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 text-xs tracking-[0.2em] font-semibold text-brand-muted">
          <a href="#home" className="hover:text-brand-dark transition-colors">
            HOME
          </a>
          <a
            href="#collective"
            className="hover:text-brand-dark transition-colors"
          >
            THE COLLECTIVE
          </a>
          <a
            href="#tech-stack"
            className="hover:text-brand-dark transition-colors"
          >
            TECH STACK
          </a>
          <a
            href="#projects"
            className="hover:text-brand-dark transition-colors"
          >
            PROJECTS
          </a>
          <a
            href="#contact"
            className="hover:text-brand-dark transition-colors"
          >
            CONTACT
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col justify-between w-6 h-4 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-full bg-brand-dark transition-transform duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
          ></span>
          <span
            className={`h-0.5 w-full bg-brand-dark transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`h-0.5 w-full bg-brand-dark transition-transform duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-brand-bg z-40 flex flex-col justify-center items-center space-y-8 text-lg tracking-widest font-semibold transition-transform duration-500 ease-in-out md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <a
          href="#home"
          onClick={() => setMobileMenuOpen(false)}
          className="hover:text-neutral-500 transition-colors"
        >
          HOME
        </a>
        <a
          href="#collective"
          onClick={() => setMobileMenuOpen(false)}
          className="hover:text-neutral-500 transition-colors"
        >
          THE COLLECTIVE
        </a>
        <a
          href="#tech-stack"
          onClick={() => setMobileMenuOpen(false)}
          className="hover:text-neutral-500 transition-colors"
        >
          TECH STACK
        </a>
        <a
          href="#projects"
          onClick={() => setMobileMenuOpen(false)}
          className="hover:text-neutral-500 transition-colors"
        >
          PORTFOLIO
        </a>
        <a
          href="#contact"
          onClick={() => setMobileMenuOpen(false)}
          className="hover:text-neutral-500 transition-colors"
        >
          CONTACT
        </a>
      </div>

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          id="home"
          className="pt-16 pb-20 px-6 md:px-12 max-w-7xl mx-auto"
        >
          <div className="mb-8">
            <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-none text-brand-dark select-none mb-2">
              {HERO_DATA.title}
            </h1>
            <p className="text-xs tracking-[0.4em] font-semibold text-brand-muted uppercase pl-2">
              {HERO_DATA.subtitle}
            </p>
          </div>

          {/* Hero Banner Grid/Card */}
          <div className="relative w-full h-[50vh] md:h-[70vh] rounded-lg overflow-hidden group">
            <img
              src={HERO_DATA.bannerImage}
              alt="Obsidian Showcase Banner"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

            {/* Overlay card */}
            <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-lg max-w-sm md:max-w-md shadow-2xl transition-all duration-300 border border-white/20 hover:bg-white text-brand-dark">
              <p className="text-sm md:text-base font-light italic leading-relaxed mb-6">
                "{HERO_DATA.quote}"
              </p>
              <div className="flex justify-between items-center">
                <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-brand-muted">
                  {HERO_DATA.quoteTag}
                </span>
                <a
                  href="#contact"
                  className="bg-brand-dark text-white px-5 py-2.5 text-xs font-semibold tracking-widest rounded-full hover:bg-neutral-800 transition-colors"
                >
                  {HERO_DATA.buttonText}
                </a>
              </div>
            </div>
          </div>

          {/* Philosophy Text */}
          <div className="mt-20 grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <p className="text-xs tracking-[0.3em] font-bold text-brand-muted uppercase">
                {HERO_DATA.philosophyTitle}
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="text-2xl md:text-4xl font-light leading-relaxed text-brand-dark">
                {HERO_DATA.philosophyText}
              </h2>
            </div>
          </div>
        </section>

        {/* The Collective (Group Members) */}
        <section
          id="collective"
          className="py-24 bg-white border-y border-black/5"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-center text-xs tracking-[0.4em] font-bold text-brand-muted uppercase mb-16">
              THE COLLECTIVE
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {MEMBERS.map((member, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="w-full aspect-[4/5] overflow-hidden rounded-lg bg-neutral-100 mb-6 shadow-sm relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>
                  <h3 className="text-lg font-bold tracking-widest uppercase mb-1.5">
                    {member.name}
                  </h3>
                  <p className="text-xs tracking-wider text-brand-muted">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="py-24 bg-black text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <p className="text-xs tracking-[0.4em] font-bold text-neutral-400 uppercase mb-16">
              OUR TECH STACK
            </p>

            <div className="grid md:grid-cols-4 gap-12 md:gap-8 relative">
              {TECH_STACK.map((tech, index) => (
                <div
                  key={index}
                  className="relative flex flex-col justify-between pt-8 border-t border-neutral-800 group hover:border-neutral-400 transition-colors duration-300"
                >
                  <div>
                    <span className="text-xs text-neutral-400 font-bold block mb-4">
                      •
                    </span>
                    <h3 className="text-3xl font-bold tracking-tight mb-2 group-hover:translate-x-1 transition-transform duration-300">
                      {tech.title}
                    </h3>
                    <h4 className="text-xs tracking-[0.2em] font-bold uppercase text-neutral-400 mb-4">
                      {tech.category}
                    </h4>
                  </div>
                  <p className="text-sm font-light text-neutral-400 leading-relaxed mt-4">
                    {tech.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-24 max-w-7xl mx-auto px-6 md:px-12"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
            <div>
              <p className="text-xs tracking-[0.4em] font-bold text-brand-muted uppercase mb-3">
                SELECTED WORKS
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                Projects
              </h2>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className={`group flex flex-col bg-white p-4 rounded-xl shadow-sm border border-black/5 ${project.size} transition-all duration-500 hover:shadow-md cursor-pointer`}
              >
                <div className="overflow-hidden rounded-lg bg-neutral-100 flex-grow">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold tracking-wide">
                      {project.title}
                    </h3>
                    <p className="text-xs text-brand-muted tracking-wider mt-1">
                      {project.category}
                    </p>
                  </div>
                  <span className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-brand-dark group-hover:text-white transition-colors duration-300 text-xs">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-24 bg-white border-t border-black/5"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-16">
            {/* Left coordinate block */}
            <div className="md:col-span-5 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  {CONTACT_DATA.title}
                </h2>
                <p className="text-brand-muted font-light leading-relaxed mb-8 max-w-sm">
                  {CONTACT_DATA.description}
                </p>
                <div className="space-y-4 text-xs font-semibold tracking-wider">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">✉</span>
                    <a
                      href={`mailto:${CONTACT_DATA.email}`}
                      className="hover:underline"
                    >
                      {CONTACT_DATA.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">☎</span>
                    <a
                      href={`tel:${CONTACT_DATA.phone}`}
                      className="hover:underline"
                    >
                      {CONTACT_DATA.phone}
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden md:block text-xs text-brand-muted font-light mt-12">
                {CONTACT_DATA.location}
              </div>
            </div>

            {/* Right form block */}
            <div className="md:col-span-7">
              {formSubmitted ? (
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-8 text-center flex flex-col items-center justify-center min-h-[300px] animate-fade-in">
                  <span className="text-4xl mb-4">✓</span>
                  <h3 className="text-xl font-bold mb-2">Message Sent</h3>
                  <p className="text-sm text-brand-muted max-w-xs">
                    Thank you for reaching out. We will get back to your inquiry
                    within 48 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[10px] tracking-[0.2em] font-bold text-brand-muted uppercase mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Elena Marce"
                      className="w-full bg-neutral-50 border-b border-neutral-200 py-3.5 px-4 text-sm focus:outline-none focus:border-brand-dark transition-colors"
                      disabled={formSubmitting}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[10px] tracking-[0.2em] font-bold text-brand-muted uppercase mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. elena@collective.com"
                      className="w-full bg-neutral-50 border-b border-neutral-200 py-3.5 px-4 text-sm focus:outline-none focus:border-brand-dark transition-colors"
                      disabled={formSubmitting}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[10px] tracking-[0.2em] font-bold text-brand-muted uppercase mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Describe your project or creative vision..."
                      className="w-full bg-neutral-50 border-b border-neutral-200 py-3.5 px-4 text-sm focus:outline-none focus:border-brand-dark transition-colors resize-none"
                      disabled={formSubmitting}
                    ></textarea>
                  </div>

                  {formError && (
                    <div className="text-xs text-red-500 font-semibold tracking-wide">
                      Error: {formError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formSubmitting}
                    className="w-full bg-brand-dark hover:bg-neutral-800 disabled:bg-neutral-400 text-white text-xs tracking-[0.2em] font-bold py-4 rounded-full transition-all duration-300 shadow-md cursor-pointer disabled:cursor-not-allowed uppercase"
                  >
                    {formSubmitting ? "SENDING..." : "SEND INQUIRY"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-bg py-12 px-6 md:px-12 border-t border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-sm font-bold tracking-tight uppercase">
            Collective®
          </span>

          <span className="text-[10px] text-brand-muted tracking-wider">
            © {new Date().getFullYear()} Collective Creative Co. All Rights
            Reserved.
          </span>
        </div>
      </footer>

      {/* Private Project Modal */}
      {showPrivateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/45 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setShowPrivateModal(false)}
          ></div>

          <div className="relative bg-white text-brand-dark p-8 md:p-10 rounded-2xl max-w-lg w-full shadow-2xl border border-black/5 z-10 duration-200">
            <button
              onClick={() => setShowPrivateModal(false)}
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full border border-black/10 hover:bg-brand-dark hover:text-white transition-colors duration-300 text-xs cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="mb-6">
              <span className="text-[10px] tracking-[0.25em] font-bold uppercase text-red-500 block mb-2">
                Confidential Project
              </span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight uppercase">
                Private Deployment
              </h3>
            </div>

            <p className="text-sm md:text-base font-light text-brand-muted leading-relaxed mb-8">
              This project is currently deployed and used by a private
              corporation. Because it contains sensitive business information
              and private data, access to the source code, documentation, and
              live system cannot be shared publicly.
            </p>

            <div className="flex justify-end">
              <button
                onClick={() => setShowPrivateModal(false)}
                className="bg-brand-dark text-white px-6 py-3 text-xs font-semibold tracking-widest rounded-full hover:bg-neutral-800 transition-colors cursor-pointer uppercase"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
