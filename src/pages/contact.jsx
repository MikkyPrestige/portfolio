import React, { useRef, useEffect, useState } from "react";
import { useColorMode } from "theme-ui";
import SEO from "../components/seo";
import Form from "../components/form";
import Avatar from "../components/avatar";
import Location from "../assets/images/socials/location.webp";
import Gmail from "../assets/images/socials/gmail.webp";
import Call from "../assets/images/socials/icon-call.webp";
import Discord from "../assets/images/socials/discord.svg";
import Linkedin from "../assets/images/socials/linkedin.webp";
import { mapboxgl } from "../config";
import "mapbox-gl/dist/mapbox-gl.css";
import { Fade } from "react-awesome-reveal";
import { MdWavingHand } from "react-icons/md";
/** @jsxImportSource theme-ui */

const Contact = () => {
  const [colorMode] = useColorMode();
  const themeClass = colorMode === "dark" ? "theme-dark" : "";
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState("satellite-streets-v12");
  const [location] = useState({
    lng: "6.695894",
    lat: "6.1859",
    zoom: "10",
    bearing: 29,
    pitch: 60,
  });

  useEffect(() => {
    const initializeMap = ({ setMap, mapContainer }) => {
      const mapInstance = new mapboxgl.Map({
        container: mapContainer.current,
        style: `mapbox://styles/mapbox/${selectedStyle}`,
        center: [location.lng, location.lat],
        zoom: location.zoom,
        bearing: location.bearing,
        pitch: location.pitch,
      });

      setMap(mapInstance);
      mapInstance.addControl(new mapboxgl.NavigationControl(), "bottom-right");
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map, location, selectedStyle]);

  const handleLayerChange = (e) => {
    const layerId = e.target.value;
    if (map) {
      map.setStyle(`mapbox://styles/mapbox/${layerId}`);
      setSelectedStyle(layerId);
    }
  };

  return (
    <main className="app">
      <SEO
        title="Contact | Elue Michael"
        description="Get in touch for software engineering opportunities and collaborations."
      />

      <section
        sx={{
          backgroundColor: "background",
          color: "text",
        }}
        className={`contact margin-top-5 ${themeClass}`}
        id="contact"
      >
        <header className="contact--header">
          <p className="contact--header__eyebrow">Contact</p>
          <h1 className="contact--header__title">Let’s build something valuable together.</h1>
          <p className="contact--header__subtitle">
            Whether you have a question, want to collaborate on a project, or just want to say hi, my inbox is always open. I look forward to connecting with you!
          </p>
        </header>

        <section className="contact--content">
          <Fade direction="up" duration={900} triggerOnce>
            <aside className="contact--content__right" aria-label="Contact information">
              <h2 className="contact--content__right__title">Direct contact</h2>

              <div className="contact--content__right__links">
                <div className="contact--content__right__links__item">
                  <div className="contact--content__right__links__item--avatar">
                    <Avatar image={Gmail} alt="Gmail Icon" style={{ width: "100%", height: "100%" }} />
                  </div>
                  <a
                    href="mailto:michaelelue117@gmail.com"
                    className="contact--content__right__links__item--link"
                  >
                    michaelelue117@gmail.com
                  </a>
                </div>

                <div className="contact--content__right__links__item">
                  <div className="contact--content__right__links__item--avatar">
                    <Avatar image={Call} alt="Phone Icon" style={{ width: "100%", height: "100%" }} />
                  </div>
                  <a href="tel:+2348030849685" className="contact--content__right__links__item--link">
                    +234 803 084 9685
                  </a>
                </div>
              </div>

              <div className="contact--content__right__media">
                <h3 className="contact--content__right__media__title">Socials</h3>

                <div className="contact--content__right__media__links">
                  <div className="contact--content__right__media__links__item">
                    <div className="contact--content__right__media__links__item--avatar discordSize">
                      <Avatar image={Discord} alt="Discord Icon" style={{ width: "90%", height: "100%" }} />
                    </div>
                    <a
                      href="https://discordapp.com/users/786382582220193803"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact--content__right__media__links__item--link"
                    >
                      @mikkyprestige
                    </a>
                  </div>

                  <div className="contact--content__right__media__links__item">
                    <div className="contact--content__right__media__links__item--avatar">
                      <Avatar image={Linkedin} alt="LinkedIn Icon" style={{ width: "100%", height: "100%" }} />
                    </div>
                    <a
                      href="https://www.linkedin.com/in/mikkyprestige"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact--content__right__media__links__item--link"
                    >
                      @mikkyprestige
                    </a>
                  </div>

                  <div className="contact--content__right__media__links__item">
                    <div className="contact--content__right__media__links__item--avatar">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#228be6">
                        <path d="M35.19 171.1C-11.72 217.1-11.72 294 35.19 340.9L171.1 476.8C217.1 523.7 294 523.7 340.9 476.8L476.8 340.9C523.7 294 523.7 217.1 476.8 171.1L340.9 35.19C294-11.72 217.1-11.72 171.1 35.19L35.19 171.1zM315.5 315.5C282.6 348.3 229.4 348.3 196.6 315.5C163.7 282.6 163.7 229.4 196.6 196.6C229.4 163.7 282.6 163.7 315.5 196.6C348.3 229.4 348.3 282.6 315.5 315.5z" />
                      </svg>
                    </div>
                    <a
                      href="https://hashnode.com/@MikkyPrestige"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact--content__right__media__links__item--link"
                    >
                      @MikkyPrestige
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </Fade>

          <Fade direction="up" duration={900} triggerOnce>
            <section className="contact--content__left" aria-label="Send a message">
              <h2 className="contact--content__left__title">Send a message
                <MdWavingHand className="contact--content__left__waving-icon" />
                </h2>
              <p className="contact--content__left__desc">
                Share your idea, role, or project scope and I’ll get back to you as soon as possible.
              </p>
              <Form />
            </section>
          </Fade>
        </section>

        <aside className="contact--location margin-top">
          <header className="contact--location__head">
            <h2 className="contact--location__head__title">My Location</h2>
            <span className="contact--location__head__avatar">
              <Avatar image={Location} alt="Location icon" style={{ width: "100%", height: "100%" }} />
            </span>
          </header>

          <section className="contact--location__map">
            <div className="contact--location__map--menu">
              <div className="contact--location__map--menu__item">
                <input
                  type="radio"
                  name="rtoggle"
                  id="satellite-streets-v12"
                  value="satellite-streets-v12"
                  onChange={handleLayerChange}
                  checked={selectedStyle === "satellite-streets-v12"}
                  className="contact--location__map--menu__item--input"
                />
                <label htmlFor="satellite-streets-v12" className="contact--location__map--menu__item--label">
                  Satellite Street
                </label>
              </div>

              <div className="contact--location__map--menu__item">
                <input
                  type="radio"
                  name="rtoggle"
                  id="light-v10"
                  value="light-v10"
                  onChange={handleLayerChange}
                  checked={selectedStyle === "light-v10"}
                  className="contact--location__map--menu__item--input"
                />
                <label htmlFor="light-v10" className="contact--location__map--menu__item--label">
                  Light
                </label>
              </div>

              <div className="contact--location__map--menu__item">
                <input
                  type="radio"
                  name="rtoggle"
                  id="dark-v10"
                  value="dark-v10"
                  onChange={handleLayerChange}
                  checked={selectedStyle === "dark-v10"}
                  className="contact--location__map--menu__item--input"
                />
                <label htmlFor="dark-v10" className="contact--location__map--menu__item--label">
                  Dark
                </label>
              </div>

              <div className="contact--location__map--menu__item">
                <input
                  type="radio"
                  name="rtoggle"
                  id="streets-v11"
                  value="streets-v11"
                  onChange={handleLayerChange}
                  checked={selectedStyle === "streets-v11"}
                  className="contact--location__map--menu__item--input"
                />
                <label htmlFor="streets-v11" className="contact--location__map--menu__item--label">
                  Streets
                </label>
              </div>

              <div className="contact--location__map--menu__item">
                <input
                  type="radio"
                  name="rtoggle"
                  id="outdoors-v11"
                  value="outdoors-v11"
                  onChange={handleLayerChange}
                  checked={selectedStyle === "outdoors-v11"}
                  className="contact--location__map--menu__item--input"
                />
                <label htmlFor="outdoors-v11" className="contact--location__map--menu__item--label">
                  Outdoors
                </label>
              </div>

              <div className="contact--location__map--menu__item">
                <input
                  type="radio"
                  name="rtoggle"
                  id="satellite-v9"
                  value="satellite-v9"
                  onChange={handleLayerChange}
                  checked={selectedStyle === "satellite-v9"}
                  className="contact--location__map--menu__item--input"
                />
                <label htmlFor="satellite-v9" className="contact--location__map--menu__item--label">
                  Satellite
                </label>
              </div>

              <div className="contact--location__map--menu__item">
                <input
                  type="radio"
                  name="rtoggle"
                  id="navigation-day-v1"
                  value="navigation-day-v1"
                  onChange={handleLayerChange}
                  checked={selectedStyle === "navigation-day-v1"}
                  className="contact--location__map--menu__item--input"
                />
                <label htmlFor="navigation-day-v1" className="contact--location__map--menu__item--label">
                  Navigation Day
                </label>
              </div>

              <div className="contact--location__map--menu__item">
                <input
                  type="radio"
                  name="rtoggle"
                  id="navigation-night-v1"
                  value="navigation-night-v1"
                  onChange={handleLayerChange}
                  checked={selectedStyle === "navigation-night-v1"}
                  className="contact--location__map--menu__item--input"
                />
                <label htmlFor="navigation-night-v1" className="contact--location__map--menu__item--label">
                  Navigation Night
                </label>
              </div>
            </div>

            <div ref={mapContainer} className="contact--location__map--container" />
          </section>
        </aside>
      </section>
    </main>
  );
};

export default Contact;