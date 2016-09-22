import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import styles from './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }


  render() {
    return (
      <div className={styles.container}>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
          <Helmet
            title="Home"
            titleTemplate="%s - GE2DB"
          />
          <Header/>
            <div className={styles.app}>
                {this.props.children}
            </div>
          <Footer/>
      </div>
    );
  }
}


export default connect()(App);
