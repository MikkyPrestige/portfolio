import Form from "./form";
import Avatar from "./avatar";
import Location from "../assets/images/socials/location.png";
import Gmail from "../assets/images/socials/gmail.png";
import Call from "../assets/images/socials/icon-call.png";
import React, { useRef, useEffect, useState } from "react";
import MapBoxgl from "mapbox-gl";

MapBoxgl.accessToken =
  "pk.eyJ1IjoibWlra3lsYW5reSIsImEiOiJjbGV2dzJkYmsyNGNtM3JwNHQwM2JhZW54In0.lnfhNIrn8tfvMUYXyCFOGA";

const Contact = () => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const [location] = useState({
    lng: "6.695894",
    lat: "6.1859",
    zoom: "10",
    bearing: 30,
    pitch: 50,
  });

  useEffect(() => {
    const initializeMap = () => {
    const newMap = new MapBoxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      center: [location.lng, location.lat],
      zoom: location.zoom,
      bearing: location.bearing,
      pitch: location.pitch,
    });
    setMap(newMap);
    if (!map) {initializeMap()}
    return () => newMap.remove();
  };

  const handleLayerChange = (e) => {
    const layerId = e.target.value;
    if (map) {
      map.setStyle('mapbox://styles/mapbox/' + layerId);
    }
  }

  return (
    <div className="contact" id="contact">
      <div className="contact--header">
        <h1 className="contact--header__title">Contact /</h1>
        <p className="contact--header__subtitle">Get in touch</p>
      </div>
      <div className="contact--content">
        <div className="contact--content__left">
          <h2 className="contact--content__left__title">
            Send me a message let's talk👋
          </h2>
          <Form />
        </div>
        <div className="contact--content__right">
          <h2 className="contact--content__right__title">
            If you liked my work and you need me, I'm ready to talk to you.
          </h2>
          <div className="contact--content__right__links">
            <div className="contact--content__right__links__item">
              <Avatar
                image={Gmail}
                alt="Gmail Icon"
                style={{ width: "3rem", height: "3rem" }}
              />
              <a
                href="mailto: michaelelue117@gmail.com"
                className="contact--content__right__links__item--link"
              >
                michaelelue117@gmail.com
              </a>
            </div>
            <div className="contact--content__right__links__item">
              <Avatar
                image={Call}
                alt="Phone Icon"
                style={{ width: "3rem", height: "3rem" }}
              />
              <a
                href="tel: +2348030849685"
                className="contact--content__right__links__item--link"
              >
                +2348030849685
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="contact--location margin-top">
        <div className="contact--location__head">
          <h2 className="contact--location__head__title">Locate Me </h2>
          <span className="contact--location__head__icon margin-left-minus">
            <Avatar
              image={Location}
              alt="Location icon"
              style={{ width: "4rem", height: "4rem" }}
            />
          </span>
        </div>
        <div className="contact--location__map">
          <div
            ref={mapContainer}
            id="map"
            className="contact--location__map--container"
          ></div>
          <div className="contact--location__map--menu">
            <div className="contact--location__map--menu__item">
              <input
                type="radio"
                name="rtoggle"
                id="satellite-streets-v12"
                value="satellite-streets-v12"
                onChange={handleLayerChange}
                defaultChecked
              />
              <label htmlFor="satellite-streets-v12">Satellite Street</label>
            </div>
            <div className="contact--location__map--menu__item">
              <input
                type="radio"
                name="rtoggle"
                id="light-v10"
                value="light-v10"
                onChange={handleLayerChange}
              />
              <label htmlFor="light-v10">Light</label>
            </div>
            <div className="contact--location__map--menu__item">
              <input
                type="radio"
                name="rtoggle"
                id="dark-v10"
                value="dark-v10"
                onChange={handleLayerChange}
              />
              <label htmlFor="dark-v10">Dark</label>
            </div>
            <div className="contact--location__map--menu__item">
              <input
                type="radio"
                name="rtoggle"
                id="streets-v11"
                value="streets-v11"
                onChange={handleLayerChange}
              />
              <label htmlFor="streets-v11">Streets</label>
            </div>
            <div className="contact--location__map--menu__item">
              <input
                type="radio"
                name="rtoggle"
                id="outdoors-v11"
                value="outdoors-v11"
                onChange={handleLayerChange}
              />
              <label htmlFor="outdoors-v11">Outdoors</label>
            </div>
            <div className="contact--location__map--menu__item">
              <input
                type="radio"
                name="rtoggle"
                id="satellite-v9"
                value="satellite-v9"
                onChange={handleLayerChange}
              />
              <label htmlFor="satellite-v9">Satellite</label>
            </div>
            <div className="contact--location__map--menu__item">
              <input
                type="radio"
                name="rtoggle"
                id="navigation-day-v1"
                value="navigation-day-v1"
                onChange={handleLayerChange}
              />
              <label htmlFor="navigation-day-v1">Navigation Day</label>
            </div>
            <div className="contact--location__map--menu__item">
              <input
                type="radio"
                name="rtoggle"
                id="navigation-night-v1"
                value="navigation-night-v1"
                onChange={handleLayerChange}
              />
              <label htmlFor="navigation-night-v1">Navigation Night</label>
            </div>
          </div>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0000000000005!2d3.3515629999999997!3d6.524444000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f7e7b5c3b3b%3A0x9b2f3b2b2b2b2b2b2!2sAsaba%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1621361000000!5m2!1sen!2sng"
            title="Location Map"
            loading="lazy"
          ></iframe> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
