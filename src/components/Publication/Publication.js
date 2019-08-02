import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ id, title, text }) => {
  return (
    <article id={id} className={styles.publication}>
      <h2 className={styles.publicationTitle}>{title}</h2>
      <p className={styles.publicationText}>{text}</p>
    </article>
  );
};

Publication.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Publication;
