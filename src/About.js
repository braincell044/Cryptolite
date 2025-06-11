import React from "react";

const About = () => {
  return (
    <div>
      <section className="about" id="about">
        <div className="container py-5 text-center">
          <div className="row">
            <div className="col">
              <h3 className="About text-center">About us</h3>
              <hr />
              <div className="about-con">
                <div className="about-1">
                  <h3>What is cryptolitetrade.live?</h3>
                  <div className="about-4">
                    <small className="space">
                      With the help of cryptolitetrade.live, you are able to earn money
                      without leaving your home, and what's more, without making any
                      risky decisions. We have developed a system that guarantees
                      constant passive income in 4 investment plans. We are registered,
                      certified, and give a standard profit percentage to your deposit.
                      It’s a mining company, all mining processes are legitimate, and
                      profits are real. They get funds from estate management and are
                      also backed up by the World Bank of Finance. We use professional
                      advanced tools that are not available to average users. Our
                      analysis diversifies any risk of loss. The capital owned by our
                      company guarantees the actions of our employees because the profit
                      is guaranteed for investors.
                      <br />
                      <br />
                      How much can you earn by investing with us? 4% to 12% of total
                      passive income per day. The return of the invested deposit is
                      usually returned after 24 hours. Due to our complete transparency
                      to investors, we offer the possibility to cancel your deposit and
                      withdraw it at any time. We offer an easy-to-use interface, thanks
                      to which you can start your adventure with investing in a few
                      minutes.
                      <br />
                      <br />
                      OMEGAPRO is an insurance company that has all of its investors’
                      funds covered against any financial loss or bankruptcy. Should the
                      company face bankruptcy, Genworth Financial will pay off the
                      affected investors.
                    </small>
                  </div>
                </div>

                <div className="col">
                  <div className="about-2">
                    <div className="video"></div>
                    <h3>Video presentation</h3>
                    <iframe
                      src="https://www.youtube.com/embed/0B3sccDYwuI"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="unique"
                      width="560"
                      height="315"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <div className="wall py-5">
        <div className="container text-center">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-3">
              <div className="wall-1">
                <h1>7,128</h1>
                <p className="tro">Dailys online</p>
              </div>
            </div>
            <div className="col col-12 col-sm-12 col-md-3">
              <div className="wall-1">
                <h1>12,505</h1>
                <p className="tro">Registered Members</p>
              </div>
            </div>
            <div className="col col-12 col-sm-12 col-md-3">
              <div className="wall-1">
                <h1>$14,397,433</h1>
                <p className="tro">Current Deposits</p>
              </div>
            </div>
            <div className="col col-12 col-sm-12 col-md-3">
              <div className="wall-1">
                <h1>$40,537,685</h1>
                <p className="tro">Total Withdrawals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
