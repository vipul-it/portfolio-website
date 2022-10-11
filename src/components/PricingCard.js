import "./PricingCard.css";
import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDone } from "react-icons/md"

const PricingCard = () => {
  return (
    <div className="princing">
      <div className="card-container">

        <div className="card">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <p className="btc">&#8377; 1000</p>
          <div className="price-text">
            <p>
              <MdOutlineDone style={{ color: "var(--main-color)", fontSize: '15px', fontWeight: "700", marginRight: "10px" }} />
              1 Days
            </p>
            <p>
              <MdOutlineDone style={{ color: "var(--main-color)", fontSize: '15px', marginRight: "10px" }} />
              3 Pages
            </p>
            <p>
              <MdOutlineDone style={{ color: "var(--main-color)", fontSize: '15px', marginRight: "10px" }} />
              Featured</p>
            <p>
              <MdOutlineDone style={{ color: "var(--main-color)", fontSize: '15px', marginRight: "10px" }} />
              Responsive Design</p>
          </div>

          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>

        <div className="card">
          <h3>- Advanced -</h3>
          <span className="bar"></span>
          <p className="btc">&#8377; 3000</p>
          <div className="price-text">
            <p>
              <MdOutlineDone style={{ color: "var(--main-color)", fontSize: '15px', fontWeight: "700", marginRight: "10px" }} />
              3 Days
            </p>
            <p>
              <MdOutlineDone style={{ color: "var(--main-color)", fontSize: '15px', marginRight: "10px" }} />
              3+ Pages
            </p>
            <p>
              <MdOutlineDone style={{ color: "var(--main-color)", fontSize: '15px', marginRight: "10px" }} />
              Featured</p>
            <p>
              <MdOutlineDone style={{ color: "var(--main-color)", fontSize: '15px', marginRight: "10px" }} />
              Responsive Design</p>
          </div>

          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>

        <div className="card">
          <h3>- Premium -</h3>
          <span className="bar"></span>
          <p className="btc">&#8377; 5000</p>
          <div className="price-text">
            <p>
              <MdOutlineDone style={{ color: "var(--main-color)", fontSize: '15px', fontWeight: "700", marginRight: "10px" }} />
              3 Days
            </p>
            <p>
              <MdOutlineDone style={{ color: "var(--main-color)", fontSize: '15px', marginRight: "10px" }} />
              5+ Pages
            </p>
            <p>
              <MdOutlineDone style={{ color: "var(--main-color)", fontSize: '15px', marginRight: "10px" }} />
              All Advanced</p>
            <p>
              <MdOutlineDone style={{ color: "var(--main-color)", fontSize: '15px', marginRight: "10px" }} />
              24 * 7 Support</p>
          </div>

          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>

      
        
      </div>
    </div>
  );
};

export default PricingCard;
