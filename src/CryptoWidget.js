import React from 'react';


const CryptoWidget = () => {
  return (
    <div id="coinlib-widget">
      <script
        type="text/javascript"
        src="https://widget.coinlib.io/widget?type=price-widget&theme=light"
        async
      ></script>
      <div className="crypto-container">
        <div className="crypto-frame">
          <iframe
          title='un'
            src="https://widget.coinlib.io/widget?type=full_v2&theme=light&cnt=6&pref_coin_id=1505&graph=yes"
            width="100%"
            height="409px"
            scrolling="auto"
            marginWidth="0"
            marginHeight="0"
            frameBorder="0"
            style={{ border: '0', margin: '0', padding: '0' }}
          ></iframe>
        </div>
        <div className="footer">
          <a
            href="https://coinlib.io"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Cryptocurrency Prices
          </a>
        </div>
      </div>
    </div>
  );
};

export default CryptoWidget;
