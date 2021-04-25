import React from 'react';
import Header from '../../Header';

const DefaultLayout = (props) => {
  return (
    <div className={ props.className || "landing-page-cover"}>
      <Header title="Qu-Box">
        { props.headerContent }
      </Header>
      <div className={ props.containerClassName || "container-60"}>
        { props.children }
      </div>
    </div>
  )
}


export default DefaultLayout;