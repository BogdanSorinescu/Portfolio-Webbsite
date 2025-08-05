
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { useEffect, useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for missing default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef();
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="loader"></div>;
  }

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_67qhyea',
        'template_fjlwh16',
        refForm.current,
        '9HjPnWHUb1q_jowSQ'
      )
      .then(
        () => {
          alert("Message sucessfully sent!")
          window.location.reload(false)
        },
        () => {
          alert("Failed to send the message, please try again")
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="content-wrapper">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                letterClass={letterClass}
                idx={15}
              />
            </h1>
            <p>
              I am interested in internships, job opportunities—and especially ambitious for working on
              large, scalable projects. However if you have other requests or questions don't hesitate to
              contact me using the below form either.
            </p>
            <div className="contact-form">
              <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input type="text" name="name" placeholder="Name" required />
                  </li>
                  <li className="half">
                    <input type="email" name="email" placeholder="Email" required />
                  </li>
                  <li>
                    <input type="text" name="subject" placeholder="Subject" required />
                  </li>
                  <li>
                    <textarea name="message" placeholder="Message" required></textarea>
                  </li>
                  <li>
                    <li>
                      <button type="submit" className="send">
                        <div className="svg-wrapper-1">
                          <div className="svg-wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                            >
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path
                                fill="currentColor"
                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <span>Send</span>
                      </button>
                    </li>
                  </li>
                </ul>
              </form>
            </div>
          </div> {/* text-zone closes here */}
          <div className="info-map">
            Bogdan Sorinescu,
            <br />
            Sweden,
            <br />
            Kvarnhagsgatan
            <br />
            Växjö
            <span>bogdansorinescu@gmail.com</span>
          </div>
          <div className="map-wrap">
            <MapContainer center={[56.8749923, 14.821768]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[56.8749923, 14.821768]}>
                <Popup>Bogdan lives here</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div> {/* content-wrapper closes here */}
      </div> {/* container contact-page closes here */}
    </>
  );
};
export default Contact;