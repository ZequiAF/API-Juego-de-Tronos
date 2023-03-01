import React from 'react';
import './search-box.styles.css';
import PropTypes from 'prop-types';

const SearchBox = ({ placeholder, onSearchChange }) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={onSearchChange}
  />
);

SearchBox.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.any,
  onSearchChange: PropTypes.any
};

SearchBox.defaultProps = {
  className: 'algo',
  type: 'search',
  placeholder: () => { },
  onSearchChange: () => { },
};

export default SearchBox;