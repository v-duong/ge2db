import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

// Import Actions
import { fetchItem } from '../ItemActions';

// Import Selectors
import { getItem } from '../ItemReducer';

class ItemDetail extends Component{
  render() {
    if (this.props.item)
      return (
        <div>
          <Helmet title={this.props.params.name} />
          <h1>{this.props.item.name}</h1>
          <table>
            <thead>
              <tr><th>Drops From</th></tr>
            </thead>
            <tbody>
            {
              this.props.item.drop.map(monster => {
                var str = "/monster/" + monster
                return <tr key={monster}><td><Link to={str} >{monster}</Link></td></tr>
              }
            )
            }
          </tbody>
          </table>
        </div>
      );
    else {
      return (
        <div>
          <Helmet title="Error" />
          <p>{this.props.params.name} not found.</p>
        </div>
      )
    }
  }
}

// Actions required to provide data for this component to render in sever side.
ItemDetail.need = [params => {
  return fetchItem(params.name);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    item: getItem(state)
  };
}

ItemDetail.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
};

export default connect(mapStateToProps)(ItemDetail);
