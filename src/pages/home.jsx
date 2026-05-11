import React from "react";
import { useColorMode } from "theme-ui";
import SEO from "../components/seo";
import myAvatar from "../assets/images/myAvatar.webp";
import GitHub from "../assets/images/socials/icons8-github-94.webp";
import LinkedIn from "../assets/images/socials/linkedin.webp";
import Resume from "../assets/images/socials/elue_michael_software_engineer.pdf";
import ProjectSlide from "../components/animation/project";
import Avatar from "../components/avatar";
import { Fade } from "react-awesome-reveal";
/** @jsxImportSource theme-ui */

const Home = () => {
  const [colorMode] = useColorMode();
  const themeClass = colorMode === "dark" ? "theme-dark" : "";

  const codeSnippet = `
const build = async () => {
  const ui = "accessible";
  const performance = "fast";
  const architecture = "maintainable";

  return {
    ui,
    performance,
    architecture,
  };
};`;

  return (
    <main className="app">
      <SEO
        title="Elue Michael | Front-End Software Engineer"
        description="Front‑end software engineer passionate about building accessible, performant web apps with React and modern JavaScript. Let's create something great together."
      />

      <section
        className={`home ${themeClass}`}
        sx={{
          backgroundColor: "background",
          color: "text",
        }}
      >
        <div className="home__container">
          <aside className="home__socials" aria-label="Social links">
            <a
              href="https://github.com/MikkyPrestige"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link"
              aria-label="Visit GitHub profile"
            >
              <Avatar
                image={GitHub}
                alt="GitHub"
                style={{ width: "100%", height: "100%" }}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/mikkyprestige"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link"
              aria-label="Visit LinkedIn profile"
            >
              <Avatar
                image={LinkedIn}
                alt="LinkedIn"
                style={{ width: "100%", height: "100%" }}
              />
            </a>
          </aside>

          <section className="home__hero" aria-label="Intro">
            <Fade duration={700} triggerOnce>
              <p className="home__eyebrow">Front-End Software Engineer</p>

              <h1 className="home__title">
                Hi, I’m <span>Elue Michael.</span>
              </h1>

              <p className="home__subtitle">
                I build accessible, performant web applications with React and modern frontend tooling. I care deeply about product quality: accessibility, performance, developer experience, and clear communication with teammates and stakeholders.
              </p>

              <div className="home__highlights" aria-label="Core strengths">
                <span>React</span>
                <span>TypeScript</span>
                <span>Accessibility</span>
                <span>Performance</span>
                <span>Clean Code</span>
              </div>

              <div className="home__cta">
                <a
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home__btn home__btn--primary"
                >
                  View Resume
                </a>

                <a
                  href="mailto:michaelelue117@gmail.com"
                  className="home__btn home__btn--ghost"
                >
                  Contact Me
                </a>
              </div>
            </Fade>
          </section>

          <section className="home__visual" aria-label="Profile image">
            <Fade duration={800} triggerOnce>
              <div className="home__visual-card">
                <div className="home__avatar-wrap">
                  <Avatar
                    image={myAvatar}
                    alt="Elue Michael portrait"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <pre className="home__code-snippet" aria-hidden="true">
                  {codeSnippet}
                </pre>
              </div>
            </Fade>
          </section>
        </div>

        <section className="home__quote-wrap" aria-label="Quote">
          <blockquote className="home__quote">
            “The best way to predict the future is to invent it.”
          </blockquote>
          <p className="home__quote-author">— Alan Kay</p>
        </section>

        <aside className="home__projects">
          <ProjectSlide />
        </aside>
      </section>
    </main>
  );
};

export default Home;