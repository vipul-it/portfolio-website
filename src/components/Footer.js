import React from "react";
import "./Footer.css";
import {
  FaHome,
  FaMailBulk,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "1rem" }} />
            <div>
              <p>123 Electronic City</p>
              <p>Noida U.P.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              +91- 9876543210
            </h4>
          </div>
          <div className="phone">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              info@vipuls.in
            </h4>
          </div>
        </div>
        <div className="middle">
          <h4>Developer</h4>
          <p>Test the new feature</p>
          <p>MDN Web docs</p>
          <p>Tools</p>
        </div>
        <div className="right">
          <h4>About the Company</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicingt. <br /> Ex no
            such one here iste reiciendis cumque. <br /> Ex sit amet iste
            reiciendis cumque.
          </p>
          <div className="social">
            <a href="https://www.facebook.com/">
              <div className="facebook">
                <FaFacebook
                  size={20}
                />
              </div>
            </a>
            <a href="https://www.instagram.com/">
              <div className="instagram"> <FaInstagram
                size={20}
              />
              </div>
            </a>
            <a href="https://www.twitter.com/">
              <div className="twitter"><FaTwitter
                size={20}
              />
              </div>
            </a>
            <a href="https://www.linkedin.com/">
              <div className="linkedin">
                <FaLinkedin
                  size={20}
                />
              </div>
            </a>
            <a href="https://www.github.com/">
              <div className="github">
                <FaGithub
                  size={20}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-text">
        Copyright &copy;<span> {new Date().getFullYear()}</span> &nbsp;
        vipuls.in | All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
