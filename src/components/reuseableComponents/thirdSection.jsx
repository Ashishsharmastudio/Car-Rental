import React from "react";
import Drive from "../../assets/driving.png";
import Flag from "../../assets/Vectorflag.png";
import Order from "../../assets/order.png";
import People from "../../assets/people.png";
import Doller from "../../assets/doller.png";

const thirdSection = () => {
  return (
    <section className="third-section">
      <div className="choice">
        <div className="choice-img">
          <img src={Drive} alt="Drive-img" />
        </div>
        <div className="drive-text">
          <h2>WHY CHOOSE YATRI CAR RENTAL?</h2>
          <div className="con-box">
            <div className="con-col-1">
              <div className="container">
                <div className="con-img">
                  <img src={Flag} alt="" />
                </div>
                <div className="cont-text">
                  <h3>FAST RESPONSE TIME</h3>
                  <p>
                    Avail Best Car Rental Service In. Lucknow With Driver For
                    Local Or Outstation Within The Moment Of Your Call For Best
                    Car Hire Experience
                  </p>
                </div>
              </div>
              {/* container - 2 */}
              <div className="container ">
                <div className="con-img-2">
                  <img src={Order} alt="order" />
                </div>
                <div className="cont-text">
                  <h3>EASY TO ORDER</h3>
                  <p>
                    Easily Book Cab Online With Our Website Or Call Our Customer
                    Support Team
                  </p>
                </div>
              </div>
              <div className="container"></div>
            </div>
            {/* column - 2 */}
            <div className="con-col-1">
              <div className="container">
                <div className="con-img">
                  <img src={People} alt="" />
                </div>
                <div className="cont-text">
                  <h3>VAST FLEET</h3>
                  <p>
                    We Have All Kinds Of Car On Rent Available Like Sedan, Suv,
                    Muv, Premium Sedan, Tampo Traveller Etc As Per Ur
                    Requirement
                  </p>
                </div>
              </div>
              {/* container - 2 */}
              <div className="container ">
                <div className="con-img-3">
                  <img src={Doller} alt="order" />
                </div>
                <div className="cont-text">
                  <h3>GREAT TARIFFS</h3>
                  <p>
                    Rent A Car !Our Car Hire Tariff Are Very Low When Compare To
                    Other Operators In Lucknow. Book
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-onecab">
        <h2>WHY CHOOSE ONEWAY CAB?</h2>
        <div className="oneway-list">
          <div className="oneway-1">
            <ul>
              <li>CONFIRMED BOOKING IMMEDIATELY</li>
              <li>NO RETURN FARE FOR ONE-WAY TRIP</li>
              <li>CLEAN & PROFESSIONAL CAB SERVICES</li>
              <li>INSTANT BOOKING & CONFIRMATION</li>
              <li>TRANSPARENT BILLING WITH GPS BASED BILLING SYSTEM</li>
            </ul>
          </div>
          <div className="oneway-1">
            <ul>
              <li>PICK-UP FROM YOUR HOUSE</li>
              <li>COMPLETED MORE THAN 20,000+ ONE-W</li>
              <li>MULTIPLE PAYMENT OPTION INCLUDING C</li>
              <li>DEDICATED CAB JUST FOR YOU</li>
              <li>DROP TO YOUR DESIRED DESTINATION</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default thirdSection;
