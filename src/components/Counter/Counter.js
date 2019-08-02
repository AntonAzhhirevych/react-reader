import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ start, end }) => {
  return (
    <p className={styles.counter}>
      {start}/{end}
    </p>
  );
};

Counter.propTypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
};

export default Counter;
