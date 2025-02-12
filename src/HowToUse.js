import React from 'react';
import './App.css'
import Money from './assest/image/1000045575-removebg-preview.png'
import Profit from './assest/image/1000045577-removebg-preview.png'
import Reg from './assest/image/regester-removebg-preview.png'


const HowToUse = () => {
  return (
    <div className="take-am">
      <h3 style={{ textAlign: 'center' }}>How to Use Cryptolitetrade.live?</h3>
      <hr />
      <p style={{ fontSize: '16px', color: '#555', textAlign: 'center' }}>
        Only 3 simple steps will allow you to invest and start earning with our guaranteed daily profit system.
      </p>
      <div className="container text-center">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-4">
            <div className="cont-1">
              <img src={Reg} alt="register an account" width="100px" />
              <h4>Register an account</h4>
              <div className="ref1">step 1</div>
              <p style={{ fontSize: '14px', color: '#555' }}>
                Register takes 2 minutes and it's free. Your account will be active immediately.
              </p>
            </div>
          </div>
          <div className="col col-12 col-sm-12 col-md-4">
            <div className="cont-3">
              <img src={Money} alt="" width="100px" />
              <h4>Make a deposit</h4>
              <div className="ref1">step 2</div>
              <p style={{ fontSize: '14px', color: '#555' }}>
                The process is very simple. You can make a deposit with 7 available methods.
              </p>
            </div>
          </div>
          <div className="col col-12 col-sm-12 col-md-4">
            <div className="cont-2">
              <img src={Profit} alt="enjoy your profit" width="100px" />
              <h4>Enjoy your profit</h4>
              <div className="ref1">step 3</div>
              <p style={{ fontSize: '14px', color: '#555' }}>
                You will receive profit accruals 24 hours after you made your deposit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
