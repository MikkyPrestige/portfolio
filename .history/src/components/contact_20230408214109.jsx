import Form from "./form";
import Avatar from "./avatar";
import Location from "../assets/images/socials/location.png";
import Gmail from "../assets/images/socials/gmail.png";
import Call from "../assets/images/socials/icon-call.png";
import Discord from "../assets/images/socials/discord.svg";
import Twitter from "../assets/images/socials/twitter.png";
import Linkedin from "../assets/images/socials/icons8-linkedin-94.png";
import React, { useRef, useEffect, useState } from "react";
import MapBoxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Footer from "./footer";
import { Fade, Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

MapBoxgl.accessToken =
  "pk.eyJ1IjoibWlra3lsYW5reSIsImEiOiJjbGV2dzJkYmsyNGNtM3JwNHQwM2JhZW54In0.lnfhNIrn8tfvMUYXyCFOGA";

const Flash = keyframes`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}`;

const Wobble = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  15% {
    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }`;

const Contact = () => {
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
      const map = new MapBoxgl.Map({
        container: mapContainer.current,
        style: `mapbox://styles/mapbox/${selectedStyle}`,
        center: [location.lng, location.lat],
        zoom: location.zoom,
        bearing: location.bearing,
        pitch: location.pitch,
      });
      setMap(map);
      map.addControl(new MapBoxgl.NavigationControl(), "bottom-right");
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
    <div className="app">
      <div className="contact margin-top-5" id="contact">
        <div className="contact--header">
          <Reveal keyframes={Wobble} duration={10000}>
            <h1 className="contact--header__title">Contact /</h1>
            <p className="contact--header__subtitle">Get in touch</p>
          </Reveal>
        </div>
        <div className="contact--content">
          <div className="contact--content__right">
            <Fade direction="left" duration={5000}>
              <h2 className="contact--content__right__title">
                Message or Call me here
              </h2>
              <div className="contact--content__right__links">
                <div className="contact--content__right__links__item">
                  <div className="contact--content__right__links__item--avatar">
                    <Avatar
                      image={Gmail}
                      alt="Gmail Icon"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <a
                    href="mailto: michaelelue117@gmail.com"
                    className="contact--content__right__links__item--link"
                  >
                    michaelelue117@gmail.com
                  </a>
                </div>
                <div className="contact--content__right__links__item">
                  <div className="contact--content__right__links__item--avatar">
                    <Avatar
                      image={Call}
                      alt="Phone Icon"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <a
                    href="tel: +2348030849685"
                    className="contact--content__right__links__item--link"
                  >
                    +2348030849685
                  </a>
                </div>
              </div>
              <div className="contact--content__right__media">
                <h2 className="contact--content__right__media__title">
                  <span>#</span> All Media{" "}
                </h2>
                <div className="contact--content__right__media__links">
                  <div className="contact--content__right__media__links__item">
                    <div className="contact--content__right__media__links__item--avatar discordSize">
                      <Avatar
                        image={Discord}
                        alt="Discord Icon"
                        style={{ width: "90%", height: "100%" }}
                      />
                    </div>
                    <a
                      href="https://discordapp.com/users/786382582220193803"
                      target="_blank"
                      rel="noreferrer"
                      className="contact--content__right__media__links__item--link"
                    >
                      mikkylanky#0055
                    </a>
                  </div>
                  <div className="contact--content__right__media__links__item">
                    <div className="contact--content__right__media__links__item--avatar">
                      <Avatar
                        image={Twitter}
                        alt="Twitter Icon"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <a
                      href="https://twitter.com/Mikky_lanky"
                      target="_blank"
                      rel="noreferrer"
                      className="contact--content__right__media__links__item--link"
                    >
                      @mikky_lanky
                    </a>
                  </div>
                  <div className="contact--content__right__media__links__item">
                    <div className="contact--content__right__media__links__item--avatar">
                      <Avatar
                        image={Linkedin}
                        alt="Linkedin Icon"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <a
                      href="https://www.linkedin.com/in/mikkylanky/"
                      target="_blank"
                      rel="noreferrer"
                      className="contact--content__right__media__links__item--link"
                    >
                      @mikkylanky
                    </a>
                  </div>
                  <div className="contact--content__right__media__links__item">
                    <div className="contact--content__right__media__links__item--avatar">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="#228be6"
                      >
                        <path d="M35.19 171.1C-11.72 217.1-11.72 294 35.19 340.9L171.1 476.8C217.1 523.7 294 523.7 340.9 476.8L476.8 340.9C523.7 294 523.7 217.1 476.8 171.1L340.9 35.19C294-11.72 217.1-11.72 171.1 35.19L35.19 171.1zM315.5 315.5C282.6 348.3 229.4 348.3 196.6 315.5C163.7 282.6 163.7 229.4 196.6 196.6C229.4 163.7 282.6 163.7 315.5 196.6C348.3 229.4 348.3 282.6 315.5 315.5z" />
                      </svg>
                    </div>
                    <a
                      href="https://hashnode.com/@Mikkylanky"
                      target="_blank"
                      rel="noreferrer"
                      className="contact--content__right__media__links__item--link"
                    >
                      @Mikkylanky
                    </a>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          {/* <div className="contact--content__animation"> */}
            <Fade direction="right" duration={5000}>
              <div className="contact--content__left">
                <h2 className="contact--content__left__title">
                  Send me a message let's talk👋
                </h2>
                <Form />
              </div>
            </Fade>
          {/* </div> */}
        </div>
        <div className="contact--location margin-top">
          <div className="animation-overflow">
            <Reveal keyframes={Flash} duration={25000}>
              <div className="contact--location__head">
                <h2 className="contact--location__head__title">Locate Me </h2>
                <span className="contact--location__head__avatar margin-left-minus">
                  <Avatar
                    image={Location}
                    alt="Location icon"
                    style={{ width: "100%", height: "100%" }}
                  />
                </span>
              </div>
            </Reveal>
          </div>
          <div className="contact--location__map">
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
                <label
                  htmlFor="satellite-streets-v12"
                  className="contact--location__map--menu__item--label"
                >
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
                <label
                  htmlFor="light-v10"
                  className="contact--location__map--menu__item--label"
                >
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
                <label
                  htmlFor="dark-v10"
                  className="contact--location__map--menu__item--label"
                >
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
                <label
                  htmlFor="streets-v11"
                  className="contact--location__map--menu__item--label"
                >
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
                <label
                  htmlFor="outdoors-v11"
                  className="contact--location__map--menu__item--label"
                >
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
                <label
                  htmlFor="satellite-v9"
                  className="contact--location__map--menu__item--label"
                >
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
                <label
                  htmlFor="navigation-day-v1"
                  className="contact--location__map--menu__item--label"
                >
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
                <label
                  htmlFor="navigation-night-v1"
                  className="contact--location__map--menu__item--label"
                >
                  Navigation Night
                </label>
              </div>
            </div>
            <div
              ref={mapContainer}
              className="contact--location__map--container"
            ></div>
            {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0000000000005!2d3.3515629999999997!3d6.524444000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f7e7b5c3b3b%3A0x9b2f3b2b2b2b2b2b2!2sAsaba%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1621361000000!5m2!1sen!2sng"
            title="Location Map"
            loading="lazy"
          ></iframe> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
