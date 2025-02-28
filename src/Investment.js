import React from "react";
import { Link } from "react-router-dom";

const Investment = () => {
  return (
    <div className="app w-100 py-3">
      <section id="investment">
        <div className="investment" data-aos="fade-up">
          <h3 className="text-center">Our Investment Plans</h3>
          <hr />
          <p className="text-center margin-invest">
            Depending on the amount of your investment, you can use one of the
            four investment plans. You can have several different plans under
            one account.
          </p>

          <div className="columns">
            <ul className="price">
              <li className="header-1">STANDARD PLAN</li>
              <li className="grey">3%<br /> AFTER 24 HOURS</li>
              <li>Minimum deposit: $50</li>
              <li>Maximum deposit: $1,499</li>
              <li>Earnings paid every 24 hours</li>
              <li>Return on investment: 3%</li>
              <li>Deposit return after 24 hours</li>
              <li>Cancel deposit at any time</li>
              <li className="grey">
                <Link to="/wallet" className="button3">Invest now</Link>
              </li>
            </ul>
          </div>

          <div className="columns">
            <ul className="price">
              <li className="header-1 premium">PREMIUM PLAN</li>
              <li className="grey">5%<br /> AFTER 24 HOURS</li>
              <li>Minimum deposit: $1,500</li>
              <li>Maximum deposit: $4,999</li>
              <li>Earnings paid every 24 hours</li>
              <li>Return on investment: 5%</li>
              <li>Deposit return after 24 hours</li>
              <li>Cancel deposit at any time</li>
              <li className="grey">
                <Link to="/wallet" className="button3">Invest now</Link>
              </li>
            </ul>
          </div>

          <div className="columns">
            <ul className="price">
              <li className="header-1">GOLDEN PLAN</li>
              <li className="grey">7%<br /> AFTER 36 HOURS</li>
              <li>Minimum deposit: $5,000</li>
              <li>Maximum deposit: $9,999</li>
              <li>Earnings paid after 36 hours</li>
              <li>Return on investment: 7%</li>
              <li>Deposit return after 36 hours</li>
              <li>Cancel deposit at any time</li>
              <li className="grey">
                <Link to="/wallet" className="button3">Invest now</Link>
              </li>
            </ul>
          </div>

          <div className="columns">
            <ul className="price">
              <li className="header-1 premium">PIRATES PLAN</li>
              <li className="grey">10%<br /> AFTER 48 HOURS</li>
              <li>Minimum deposit: $10,000</li>
              <li>Maximum deposit: $500,000</li>
              <li>Earnings paid after 48 hours</li>
              <li>Return on investment: 10%</li>
              <li>Deposit return after 48 hours</li>
              <li>Cancel deposit at any time</li>
              <li className="grey">
                <Link to="/wallet" className="button3">Invest now</Link>
              </li>
            </ul>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Investment;
