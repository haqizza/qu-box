import React from 'react';
import Header from '../../Header';

const LandingPagelayout = (props) => {
  return (
    <div>
      <div className="landing-page-cover">
        <Header title="Qu-Box">
          { props.headerContent }
        </Header>
        <div className="container-60">
          { props.children }
        </div>
      </div>
    </div>
  )
}


export default LandingPagelayout;