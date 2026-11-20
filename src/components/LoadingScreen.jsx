import React from 'react';

export default function LoadingScreen() {
  return (
    <div className="tedx-loader" role="status" aria-live="polite" aria-label="Loading TEDxChoukseyGroupofCollegesGroupofColleges">
      <div className="tedx-loader-grain" />
      <div className="tedx-loader-content">
        <div className="tedx-loader-brand">
          <span className="tedx-loader-ted">TED<span>x</span></span>
          <span className="tedx-loader-divider" />
          <span className="tedx-loader-place">CHOUKSEY GROUP<br />OF COLLEGES</span>
        </div>

        <div className="tedx-loader-orbit" aria-hidden="true">
          <span className="tedx-loader-ring tedx-loader-ring-one" />
          <span className="tedx-loader-ring tedx-loader-ring-two" />
          <span className="tedx-loader-core" />
          <span className="tedx-loader-pulse" />
        </div>

        <p className="tedx-loader-kicker">IDEAS WORTH SPREADING</p>
        <div className="tedx-loader-progress">
          <span />
        </div>
        <div className="tedx-loader-bottom">
          <span>PREPARING THE EXPERIENCE</span>
          <span className="tedx-loader-dots"><i /> <i /> <i /></span>
        </div>
      </div>
      <span className="tedx-loader-corner">BILASPUR · INDIA</span>
    </div>
  );
}
