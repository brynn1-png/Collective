import { useState } from "react";
import {
  HERO_DATA,
  MEMBERS,
  TECH_STACK,
  PROJECTS,
  CONTACT_DATA,
} from "./portfolioData";
import AnimatedSection from "./components/AnimatedSection";

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
            <AnimatedSection animation="fade" delay={100}>
              <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-none text-brand-dark select-none mb-2">
                {HERO_DATA.title}
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade" delay={300}>
              <p className="text-xs tracking-[0.4em] font-semibold text-brand-muted uppercase pl-2">
                {HERO_DATA.subtitle}
              </p>
            </AnimatedSection>
          </div>

          {/* Hero Banner Grid/Card */}
          <AnimatedSection animation="fade-up" delay={500}>
            <div className="relative w-full rounded-lg overflow-hidden group">
              <div className="w-full h-[50vh] md:h-[70vh] relative">
                <img
                  src={HERO_DATA.bannerImage}
                  alt="Obsidian Showcase Banner"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

                {/* Overlay card — desktop only absolute */}
                <div className="hidden md:block absolute bottom-12 right-12 bg-white/95 backdrop-blur-sm p-8 rounded-lg max-w-md shadow-2xl transition-all duration-300 border border-white/20 hover:bg-white text-brand-dark">
                  <p className="text-base font-light italic leading-relaxed mb-6">
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

              {/* Mobile card — stacked below image */}
              <div className="md:hidden bg-white/95 p-6 rounded-b-lg shadow-md border border-black/5 text-brand-dark">
                <p className="text-sm font-light italic leading-relaxed mb-5">
                  "{HERO_DATA.quote}"
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-brand-dark text-white px-5 py-2.5 text-xs font-semibold tracking-widest rounded-full hover:bg-neutral-800 transition-colors"
                >
                  {HERO_DATA.buttonText}
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Philosophy Text */}
          <div className="mt-20 grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <AnimatedSection animation="fade-right">
                <p className="text-xs tracking-[0.3em] font-bold text-brand-muted uppercase">
                  {HERO_DATA.philosophyTitle}
                </p>
              </AnimatedSection>
            </div>
            <div className="md:col-span-8">
              <AnimatedSection animation="fade-left">
                <h2 className="text-2xl md:text-4xl font-light leading-relaxed text-brand-dark">
                  {HERO_DATA.philosophyText}
                </h2>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* The Collective (Group Members) */}
        <section
          id="collective"
          className="py-24 bg-white border-y border-black/5"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <AnimatedSection animation="fade-up">
              <h2 className="text-center text-xs tracking-[0.4em] font-bold text-brand-muted uppercase mb-16">
                THE COLLECTIVE
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-10">
              {MEMBERS.map((member, index) => (
                <AnimatedSection
                  key={index}
                  animation="fade-up"
                  delay={index * 150}
                >
                  <a
                    href={member.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center text-center"
                  >
                    <div className="w-full aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100 mb-6 shadow-sm relative transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="bg-white text-brand-dark text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          View Portfolio
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold tracking-widest uppercase mb-1.5 group-hover:text-brand-muted transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-xs tracking-wider text-brand-muted">
                      {member.role}
                    </p>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="py-24 bg-black text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <AnimatedSection animation="fade-up">
              <p className="text-xs tracking-[0.4em] font-bold text-neutral-400 uppercase mb-16">
                OUR TECH STACK
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-4 gap-12 md:gap-8 relative">
              {TECH_STACK.map((tech, index) => (
                <AnimatedSection
                  key={index}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <div className="relative flex flex-col justify-between pt-8 border-t border-neutral-800 group hover:border-white transition-colors duration-500">
                    <div>
                      <span className="text-sm text-neutral-500 font-bold block mb-4 group-hover:text-white transition-colors duration-500">
                        0{index + 1}
                      </span>
                      <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-300">
                        {tech.title}
                      </h3>
                      <h4 className="text-xs tracking-[0.2em] font-bold uppercase text-neutral-500 mb-4 group-hover:text-neutral-300 transition-colors duration-300">
                        {tech.category}
                      </h4>
                    </div>
                    <p className="text-sm font-light text-neutral-500 leading-relaxed mt-4 group-hover:text-neutral-300 transition-colors duration-300">
                      {tech.desc}
                    </p>
                  </div>
                </AnimatedSection>
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
              <AnimatedSection animation="fade-up">
                <p className="text-xs tracking-[0.4em] font-bold text-brand-muted uppercase mb-3">
                  SELECTED WORKS
                </p>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                  Projects
                </h2>
              </AnimatedSection>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {filteredProjects.map((project, index) => (
              <AnimatedSection
                key={project.id}
                animation="scale"
                delay={index * 100}
              >
                <div
                  onClick={() => handleProjectClick(project)}
                  className="group flex flex-col bg-white p-4 rounded-2xl shadow-sm border border-black/5 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                >
                  <div className="overflow-hidden rounded-xl bg-neutral-100 aspect-[16/10] relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 shadow-lg">
                      <span className="text-brand-dark text-sm font-bold">
                        →
                      </span>
                    </div>
                  </div>
                  <div className="mt-5 flex justify-between items-start">
                    <div>
                      <span className="inline-block text-[10px] tracking-[0.15em] font-bold text-brand-muted bg-neutral-100 px-3 py-1 rounded-full mb-3 uppercase">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-bold tracking-wide leading-tight mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-brand-muted leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-24 px-6 md:px-12">
          <AnimatedSection animation="scale">
            <div className="max-w-7xl mx-auto bg-brand-dark rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
              </div>
              <div className="relative z-10">
                <p className="text-xs tracking-[0.3em] font-bold text-neutral-400 uppercase mb-6">
                  READY TO START?
                </p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8 max-w-3xl mx-auto leading-tight">
                  Let's Build Something
                  <br />
                  <span className="text-neutral-400">Together</span>
                </h2>
                <a
                  href="#contact"
                  className="inline-block bg-white text-brand-dark px-8 py-4 text-xs font-bold tracking-[0.2em] rounded-full hover:bg-neutral-200 transition-all duration-300 hover:scale-105 uppercase"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </AnimatedSection>
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
                <AnimatedSection animation="fade-right">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    {CONTACT_DATA.title}
                  </h2>
                  <p className="text-brand-muted font-light leading-relaxed mb-8 max-w-sm">
                    {CONTACT_DATA.description}
                  </p>
                  <div className="space-y-5 text-sm font-semibold tracking-wider">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          />
                        </svg>
                      </div>
                      <a
                        href={`mailto:${CONTACT_DATA.email}`}
                        className="hover:underline transition-colors hover:text-brand-muted"
                      >
                        {CONTACT_DATA.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                          />
                        </svg>
                      </div>
                      <a
                        href={`tel:${CONTACT_DATA.phone}`}
                        className="hover:underline transition-colors hover:text-brand-muted"
                      >
                        {CONTACT_DATA.phone}
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
              <div className="hidden md:block text-xs text-brand-muted font-light mt-12">
                <AnimatedSection animation="fade-right" delay={200}>
                  {CONTACT_DATA.location}
                </AnimatedSection>
              </div>
            </div>

            {/* Right form block */}
            <div className="md:col-span-7">
              <AnimatedSection animation="fade-left">
                {formSubmitted ? (
                  <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-8 text-center flex flex-col items-center justify-center min-h-[300px] animate-fade-in">
                    <span className="text-4xl mb-4">✓</span>
                    <h3 className="text-xl font-bold mb-2">Message Sent</h3>
                    <p className="text-sm text-brand-muted max-w-xs">
                      Thank you for reaching out. We will get back to your
                      inquiry within 48 business hours.
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
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-bg py-12 px-6 md:px-12 border-t border-black/5">
        <AnimatedSection animation="fade">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-sm font-bold tracking-tight uppercase">
              Collective®
            </span>

            <span className="text-[10px] text-brand-muted tracking-wider">
              © {new Date().getFullYear()} Collective Creative Co. All Rights
              Reserved.
            </span>
          </div>
        </AnimatedSection>
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
