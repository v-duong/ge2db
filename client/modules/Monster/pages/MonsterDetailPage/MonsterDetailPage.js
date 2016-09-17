import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import MonsterDetailTable from '../../components/MonsterDetailTable';

// Import Actions
import { fetchMonster } from '../../MonsterActions';

// Import Selectors
import { getMonster } from '../../MonsterReducer';

class MonsterDetailPage extends Component{
  render() {
    if (this.props.monster)
      return (
        <div>
          <Helmet title={this.props.params.name} />
          <h1>{this.props.monster.name}</h1>
          <MonsterDetailTable monster={this.props.monster}/>
        </div>
      );
    else
      return (
        <div>
          <Helmet title="Error"/>
          <p>{this.props.params.name} not found.</p>
        </div>
      )
  }
}

// Actions required to provide data for this component to render in sever side.
MonsterDetailPage.need = [params => {
  return fetchMonster(params.name);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    monster: getMonster(state, props.params.name)
  };
}

MonsterDetailPage.propTypes = {
  monster: PropTypes.shape({
    name: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired
  }).isRequired,
};

export default connect(mapStateToProps)(MonsterDetailPage);
