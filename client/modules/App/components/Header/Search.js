import React, { PropTypes , Component} from 'react';
import { Link } from 'react-router';

import Fuse from '../../../../data/fuse.min.js'

import styles from './Header.css';


class Search extends Component{
  /*  constructor(props) {
      super(props);
      // var self = this;
      this.handleChange = this.handleChange.bind(this);
    }*/
     state = { searchString: '' };
     handleChange = (e) => {
       this.setState({ searchString:e.target.value });
     };
     handleClick = (e) => {
       this.setState({ searchString:'' });
     };
     render() {
       var index = this.props.items, result = [],
           searchString = this.state.searchString.trim().toLowerCase();
       var options = {
            shouldSort: true,
            threshold: 0.5,
            location: 0,
            distance: 100,
            maxPatternLength: 24,
            keys: [
              "name"
          ]};
       var fuse = new Fuse(index, options);

       if (searchString.length > 0) {
         result = fuse.search(searchString);
         result = result.slice(0,6);
       }
       var t = this;
       return (
         <div>
            <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Search"/>
            <ul className={styles.results}>
              {result.map(function(i) {
                  return <li key={i.name}><Link to={"/"+i.type+"/"+i.name} onClick={t.handleClick}>{i.name}</Link></li>;
              }) }
            </ul>
         </div>
       );
     }
  }


export default Search;
