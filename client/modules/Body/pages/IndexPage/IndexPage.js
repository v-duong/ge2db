import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

export function IndexPage(props) {
  return (
    <div>
      BODY?
    </div>
  );
}

function mapStateToProps(store) {
  return {
  };
}
export default connect(mapStateToProps)(IndexPage);
