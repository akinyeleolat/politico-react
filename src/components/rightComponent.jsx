/* eslint-disable react/display-name */
import React from 'react';

const rightComponent = (WrappedComponent) => (props) => {
    return (<div id="right">
    <div className="pageform">
      <img src="./src/img/thumb2.jpg" width="100px" />
      <div><WrappedComponent {...props} /></div>
    </div>
  </div>);
};
export default rightComponent;




   