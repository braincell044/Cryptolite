import React from 'react';
import { CurrencyExchange, Tune, Payments, AccountBalanceWallet, LockPerson, Forum } from '@mui/icons-material';
import './App.css'

const Referrals = () => {
  return (
    <div className='py-3'>
    <section id="referrals" className="referrals">
      <h3 style={{ textAlign: 'center' }}>What Made Us Stand Out</h3>
      <hr
        style={{
          borderStyle: '15px',
          borderColor: 'black',
          borderWidth: '2px 0 0 0',
          height: '1px',
          width: '40px',
        }}
      />
      <p style={{ textAlign: 'center' }}>
        What makes our investment system distinguish us from others and is the best in the market?
      </p>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-4">
            <span className="box">
              <CurrencyExchange style={{ fontSize: 45 }} />
              <p>
                <strong>Daily income</strong>
                <br />
                You will receive earnings every 24 hours on all days of the year. Your deposit is working all the time,
                even on weekends and holidays.
              </p>
            </span>
          </div>
          <div className="col col-12 col-sm-12 col-md-4">
            <span className="box">
              <Tune style={{ fontSize: 45 }} />
              <p>
                <strong>Full control of investment</strong>
                <br />
                You can cancel your deposit at any time and withdraw the funds.
              </p>
            </span>
          </div>
          <div className="col col-12 col-sm-12 col-md-4">
            <span className="box">
              <Payments style={{ fontSize: 45 }} />
              <p>
                <strong>Fast withdrawals</strong>
                <br />
                Your withdrawal will be processed by our operators as fast as possible. Maximum waiting time is up to
                24 hours (7 days/week).
              </p>
            </span>
          </div>
          <div className="col col-12 col-sm-12 col-md-4">
            <span className="box">
              <AccountBalanceWallet style={{ fontSize: 45 }} />
              <p>
                <strong>Guaranteed Profit</strong>
                <br />
                By using cryptolitetrade.live, you have a guaranteed daily profit of 4% to 12% depending on the chosen
                investment plan.
              </p>
            </span>
          </div>
          <div className="col col-12 col-sm-12 col-md-4">
            <span className="box">
              <LockPerson style={{ fontSize: 45 }} />
              <p>
                <strong>Data Protection</strong>
                <br />
                We make every effort to ensure that your data and funds are 100% secured. We only use secure
                connections and top-class servers.
              </p>
            </span>
          </div>
          <div className="col col-12 col-sm-12 col-md-4">
            <span className="box">
              <Forum style={{ fontSize: 45 }} />
              <p>
                <strong>24/7 live Support</strong>
                <br />
                Our agents are available and always ready to help you on chat 24/7. You can also contact us via email or
                social media.
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>

    <div class="best-wall">
<div class="ref2-div" data-aos="fade-right">
<h3>REFERRAL PROGRAM</h3>
<p>With our referral program, you can earn money by advertising our
system to others. Build the best team with us. We offer 3-level
referral program with 5%-2%-1% commission.Try to convince as many
people as possible, each new person is an additional income for you.
Send your referral link to companions, family and share them on online
media. We will provide you with all the information and necessary
advertising materials. Record a video showing how you invest, share
proofs of your payouts. We give you full freedom in advertising your
reference link. The referral program earnings are unlimited, your structure
can have a virtually infinite number of users, and your commissions will
be paid immediately upon receipt.</p>
</div>
</div>


    </div>
  );
};

export default Referrals;
