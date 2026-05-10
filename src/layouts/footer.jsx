import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../components/avatar";
import Github from "../assets/images/socials/icons8-github-94.webp";
import Linkedin from "../assets/images/socials/linkedin.webp";
import Discord from "../assets/images/socials/discord.svg";
/** @jsxImportSource theme-ui */

const Footer = () => {
  return (
    <footer
      sx={{ backgroundColor: "background", color: "text" }}
      className="footer"
      aria-label="Site footer"
    >
      <div className="footer__inner">
        <section className="footer__brand">
          <p className="footer__eyebrow">Software Engineer</p>
          <h2 className="footer__name">Elue Michael</h2>
          <p className="footer__bio">
            Passionate about crafting engaging web experiences. Let's build something amazing together!
          </p>
        </section>

        <nav className="footer__nav" aria-label="Footer navigation">
          <h3 className="footer__heading">Navigate</h3>
          <ul className="footer__list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <section className="footer__contact" aria-label="Contact links">
          <h3 className="footer__heading">Connect</h3>
          <a className="footer__email" href="mailto:eluemichael1@outlook.com">
            eluemichael1@outlook.com
          </a>

          <div className="footer__socials">
            <a
              href="https://github.com/MikkyPrestige"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
            >
              <Avatar image={Github} alt="GitHub" style={{ width: "100%", height: "100%" }} />
            </a>

            <a
              href="https://www.linkedin.com/in/mikkyprestige"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
            >
              <Avatar image={Linkedin} alt="LinkedIn" style={{ width: "100%", height: "100%" }} />
            </a>

            <a
              href="https://discordapp.com/users/786382582220193803"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Discord profile"
            >
              <Avatar image={Discord} alt="Discord" style={{ width: "100%", height: "100%" }} />
            </a>
          </div>
        </section>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Elue Michael.</p>
      </div>
    </footer>
  );
};

export default Footer;