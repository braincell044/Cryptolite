import React from 'react';
import './App.css'

const FAQ = () => {
  return (
    <div className="faq">
      <div className="container text-center">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-6">
            <div className="faq-1" data-aos="fade-right">
              <p className="tro">Do I need any trading skills?</p>
              <p>
                Absolutely not, our asset management system works in such a way that our traders manage your funds and professionally invest them, providing you with a guaranteed daily profit. This is 100% passive income, regardless of your knowledge or skills.
              </p>
              <br />
              <p className="tro">What minimum and maximum amount can I invest?</p>
              <p>
                Minimum deposit amount is $50. Maximum deposit amount is unlimited on the last plan.
              </p>
            </div>
          </div>
          <div className="col col-12 col-sm-12 col-md-6">
            <div className="faq-2" data-aos="fade-left">
              <p className="tro">How long do I have to wait for withdrawal?</p>
              <p>
                Withdrawals are processed instantly, The waiting time for withdrawal does not exceed 24 hours on all days of the year (including weekends and holidays). In our 24/7 work, our operators always make payouts as quickly as possible.
              </p>
              <br />
              <p className="tro">What is the minimum and maximum withdrawal amount?</p>
              <p>
                Minimum withdrawal amount is $50. Maximum withdrawal amount is unlimited.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
