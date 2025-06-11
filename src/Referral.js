import React from 'react';
import { CurrencyExchange, Tune, Payments, AccountBalanceWallet, LockPerson, Forum } from '@mui/icons-material';
import './App.css';

const Referrals = () => {
  return (
  
    <div className="py-3">
      <section id="referral" className="referrals">
        <h3 className="text-center">What Made Us Stand Out</h3>
        <hr
          style={{
            borderColor: 'black',
            borderWidth: '2px 0 0 0',
            height: '1px',
            width: '40px',
            margin: 'auto',
          }}
        />
        <p className="text-center">
          What makes our investment system stand out from others and the best in the market?
        </p>
        <div className="container">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-4">
              <span className="box">
                <CurrencyExchange style={{ fontSize: 45 }} />
                <p>
                  <strong>Daily Income</strong>
                  <br />
                  You will receive earnings every 24 hours throughout the year. Your deposit works continuously, even on weekends and holidays.
                </p>
              </span>
            </div>
            <div className="col col-12 col-sm-12 col-md-4">
              <span className="box">
                <Tune style={{ fontSize: 45 }} />
                <p>
                  <strong>Full Control of Investment</strong>
                  <br />
                  You can cancel your deposit at any time and withdraw your funds.
                </p>
              </span>
            </div>
            <div className="col col-12 col-sm-12 col-md-4">
              <span className="box">
                <Payments style={{ fontSize: 45 }} />
                <p>
                  <strong>Fast Withdrawals</strong>
                  <br />
                  Your withdrawal will be processed by our operators as quickly as possible, with a maximum waiting time of 24 hours (available 7 days a week).
                </p>
              </span>
            </div>
            <div className="col col-12 col-sm-12 col-md-4">
              <span className="box">
                <AccountBalanceWallet style={{ fontSize: 45 }} />
                <p>
                  <strong>Guaranteed Profit</strong>
                  <br />
                  Using cryptolitetrade.live guarantees a daily profit of 4% to 12%, depending on your selected investment plan.
                </p>
              </span>
            </div>
            <div className="col col-12 col-sm-12 col-md-4">
              <span className="box">
                <LockPerson style={{ fontSize: 45 }} />
                <p>
                  <strong>Data Protection</strong>
                  <br />
                  We take every measure to ensure your data and funds are 100% secure, using only encrypted connections and top-tier servers.
                </p>
              </span>
            </div>
            <div className="col col-12 col-sm-12 col-md-4">
              <span className="box">
                <Forum style={{ fontSize: 45 }} />
                <p>
                  <strong>24/7 Live Support</strong>
                  <br />
                  Our support team is available 24/7 via live chat. You can also contact us via email or social media.
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="best-wall">
        <div className="ref2-div" data-aos="fade-right">
          <h3>Referral Program</h3>
          <p>
            Earn money by promoting our system through our referral program! Build the best team with us and take advantage of our **3-level referral system**, offering commissions of **5% - 2% - 1%**.
            <br /><br />
            Invite as many people as possible—each new referral adds to your earnings. Share your referral link with friends, family, and on social media.  
            We provide all necessary advertising materials to help you succeed.
            <br /><br />
            Want to maximize your earnings?  
            Record videos showing how you invest, share proof of payouts, and spread the word about our platform.  
            There is **no limit** to how much you can earn—the more users you bring in, the more commissions you receive.  
            **Commissions are paid instantly** upon each successful referral deposit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Referrals;
