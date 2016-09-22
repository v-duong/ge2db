import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

import ItemTable from '../components/ItemTable'

// Import Actions
import { fetchItem } from '../ItemActions';

// Import Selectors
import { getItem } from '../ItemReducer';

class ItemDetail extends Component{
  componentDidMount() {
    this.props.dispatch(fetchItem(this.props.params.name));
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.params.name !== this.props.params.name) {
      nextProps.dispatch(fetchItem(nextProps.params.name));
    }
  }
  render() {
    if (this.props.item.drop){
      return (
        <div>
          <Helmet title={this.props.params.name} />
          <h1>{this.props.params.name}</h1>
          <h3>Drops From</h3>
          <ItemTable item={this.props.item}/>
        </div>
      );
  }  else {
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
    item: getItem(state, props.params.name)
  };
}
/*
ItemDetail.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
};
*/
export default connect(mapStateToProps)(ItemDetail);
