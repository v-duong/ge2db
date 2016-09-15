import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import MonsterList from '../../components/MonsterList';

// Import Actions
import { fetchMonsters } from '../../MonsterActions';

// Import Selectors
import { getMonsters } from '../../MonsterReducer';

class MonsterListPage extends Component {
  componentDidMount() {
    if (this.props.monsters.length != 83)
      this.props.dispatch(fetchMonsters());
  }

  render() {
    return (
      <div>
        <MonsterList monsters={this.props.monsters} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
MonsterListPage.need = [() => { return fetchMonsters(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    monsters: getMonsters(state),
  };
}

MonsterListPage.propTypes = {
  monsters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

MonsterListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(MonsterListPage);
