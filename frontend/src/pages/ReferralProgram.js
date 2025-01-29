import React, { useState } from 'react';
import './ReferralProgram.css';

const ReferralProgram = () => {
  const referralLink = "https://example.com/referral/your-code";

  // Sample data for the leaderboard
  const [leaderboard, setLeaderboard] = useState([
    { rank: 1, name: "Alice Johnson", referrals: 45 },
    { rank: 2, name: "Bob Smith", referrals: 38 },
    { rank: 3, name: "Charlie Brown", referrals: 30 },
    { rank: 4, name: "Diana Prince", referrals: 25 },
    { rank: 5, name: "Eve Adams", referrals: 20 },
  ]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied to clipboard!");
  };

  return (
    <div className="referral-program">
      {/* Header Section */}
      <div className="referral-header">
        <h1>Exclusive Referral Program</h1>
        <p>
          Share the opportunity! Invite your friends to join us and earn
          exclusive rewards for every successful referral.
        </p>
      </div>

      {/* Steps Section */}
      <div className="referral-steps">
        <h2>How Our Program Works</h2>
        <div className="steps-container">
          <div className="step">
            <span className="step-number">1</span>
            <p>Share your personalized referral link with your network.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <p>Your friends sign up using your link and join our platform.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <p>
              Earn rewards for every successful referral and climb our rewards
              leaderboard!
            </p>
          </div>
        </div>
      </div>

     {/* Referral Link Section */}
<div className="referral-link-section">
  <h3>Your Unique Referral Link</h3>
  <p>
    Use the link below to invite your friends. Share it on your favorite platforms or directly with your friends to spread the word!
  </p>
  <div className="referral-link-container">
    <input
      type="text"
      value="https://forms.gle/your-google-form-link" // Replace with your Google Form or website link
      readOnly
      className="referral-input"
    />
    <button
      onClick={() => navigator.clipboard.writeText("https://forms.gle/your-google-form-link")}
      className="copy-button"
    >
      Copy Link
    </button>
  </div>
  <div className="share-buttons">
    <p>Share on:</p>
    <button
      className="share-button whatsapp"
      onClick={() =>
        window.open(
          "https://wa.me/?text=Check+out+this+amazing+program!+Join+now:+https://forms.gle/your-google-form-link",
          "_blank"
        )
      }
    >
      WhatsApp
    </button>
    <button
      className="share-button facebook"
      onClick={() =>
        window.open(
          "https://www.facebook.com/sharer/sharer.php?u=https://forms.gle/your-google-form-link",
          "_blank"
        )
      }
    >
      Facebook
    </button>
    <button
      className="share-button twitter"
      onClick={() =>
        window.open(
          "https://twitter.com/intent/tweet?url=https://forms.gle/your-google-form-link&text=Join+this+amazing+program+and+earn+rewards!",
          "_blank"
        )
      }
    >
      Twitter
    </button>
  </div>
  <p className="note">
    Tip: Share your link on social media or directly with your friends to maximize your reach!
  </p>
</div>


     {/* Rewards Section */}
<div className="referral-rewards">
  <h2>Exclusive Rewards for Referrers</h2>
  <p>
    Join our referral program and enjoy amazing rewards for sharing the benefits 
    of our platform with your friends and family! Here’s what you can earn:
  </p>
  <ul>
    <li>
      <strong>Instant Cashback:</strong> Get ₹500 as instant cashback for every successful referral, credited directly to your account.
    </li>
    <li>
      <strong>Leaderboard Rewards:</strong> Be among the top referrers and unlock exciting bonuses like:
      <ul>
        <li>Amazon or Flipkart gift vouchers worth up to ₹5,000.</li>
        <li>Discount coupons on popular brands like Myntra, BigBasket, and Swiggy.</li>
        <li>Exclusive access to premium courses and memberships.</li>
      </ul>
    </li>
    <li>
      <strong>Monthly Grand Prize:</strong> The referrer with the highest number of successful referrals this month wins a special grand prize, which includes:
      <ul>
        <li>A brand-new smartphone or smart gadget (worth ₹15,000+).</li>
        <li>2 nights/3 days fully paid trip to a luxury destination in India.</li>
        <li>Premium subscription to OTT platforms like Netflix, Amazon Prime, or Hotstar for 1 year.</li>
      </ul>
    </li>
  </ul>
  <p>
    Refer as many friends as possible and grab these exciting rewards. 
    There’s no limit to how much you can earn!
  </p>
</div>


      {/* Leaderboard Section */}
      <div className="leaderboard-section">
        <h2>Top Referrers Leaderboard</h2>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Referrals</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((referrer) => (
              <tr key={referrer.rank}>
                <td>{referrer.rank}</td>
                <td>{referrer.name}</td>
                <td>{referrer.referrals}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Section */}
      <footer className="referral-footer">
        <p>
          Start sharing today and enjoy exclusive benefits! Questions?{' '}
          <a href="/contact" className="contact-link">
            Contact us
          </a>{' '}
          for more details.
        </p>
      </footer>
    </div>
  );
};

export default ReferralProgram;
