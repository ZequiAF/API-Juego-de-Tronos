import React from 'react';
import PropTypes from 'prop-types';

function Footer({ label }) {
  return (
    <h4>
        <b>{label}</b>
    </h4>
  );
}

Footer.propTypes = {
  label: PropTypes.string,
};

Footer.defaultProps = {
  label: 'Sebas, Selene, Ezequiel, Victor y Andrés',
};

export default Footer;
