import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ count, length, onPlusCounter, onMinusCounter }) => {
  return (
    <section className={styles.controls}>
      <button
        onClick={onMinusCounter}
        className={count === 1 ? styles.disable : styles.button}
        type="button"
      >
        Назад
      </button>

      <button
        onClick={onPlusCounter}
        className={count === length ? styles.disable : styles.button}
        type="button"
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  count: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  onPlusCounter: PropTypes.func.isRequired,
  onMinusCounter: PropTypes.func.isRequired,
};

export default Controls;
