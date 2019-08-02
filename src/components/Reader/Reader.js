import React, { Component } from 'react';
import queryString from 'query-string';
import ReactRouterPropTypes from 'react-router-prop-types';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';
import styles from './Reader.module.css';

import publication from '../../publications.json';

class Reader extends Component {
  state = {};

  PAGE = 0;

  static propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
    location: ReactRouterPropTypes.location.isRequired,
  };

  getNumberItem = () => {
    const getNumber = queryString.parse(this.props.location.search).items;
    const conversionNumber = Number(getNumber) - 1;
    this.PAGE = conversionNumber;
    return this.PAGE;
  };

  minusCounter = () => {
    const currentPage = this.PAGE + 1;
    this.props.history.push({
      ...this.props.location,
      search: `?items=${currentPage - 1}`,
    });
  };

  plusCounter = () => {
    const currentPage = this.PAGE + 1;

    this.props.history.push({
      ...this.props.location,
      search: `?items=${currentPage + 1}`,
    });
  };

  render() {
    const page = this.getNumberItem();
    const counterPlus = page + 1;

    const items = publication;
    const counterLength = items.length;

    return (
      <div className={styles.reader}>
        <Publication {...items[page]} />
        <Counter start={counterPlus} end={counterLength} />
        <Controls
          length={counterLength}
          count={counterPlus}
          onMinusCounter={this.minusCounter}
          onPlusCounter={this.plusCounter}
        />
      </div>
    );
  }
}

export default Reader;
