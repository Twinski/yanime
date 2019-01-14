import React from 'react';

import './Yanime.scss';


const getIdFromItem = (item) => {
  if (item.id) return item.id;
  if (item._id) return item._id;
  if (item.localId) return item.localId;
  if (item._localId) return item._localId;
  return null;
}


class Yanime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultIds: (props.items || []).map(this.props.getIdFromItem || getIdFromItem),
      freshIds: [],
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.items != this.props.items) {
      const freshIds = [];
      const resultIds = (nextProps.items || []).map(this.props.getIdFromItem || getIdFromItem);
      resultIds.forEach(resultId => {
        if (this.state.resultIds.indexOf(resultId) === -1) {
          freshIds.push(resultId);
        }
      })
      this.setState({ resultIds, freshIds });
    }
  }

  render() {
    let seed = this.props.seed;
    if (!seed) seed = this.props.triggerAnim;
    
    let delays = [];
    if (this.props.staggerDelay && this.props.items) {
      for (let i = 0; i < (this.props.items || []).length; i++) {
        let delay = this.props.staggerDelay || 0;
        delay *= 100;
        delay = Math.floor(delay / 25) * 25;
        delay *= i;
        delays.push(`yanime-delay-${delay}`);
      }
    }

    let delayInd = 0;
    const children = this.props.items.map((item, ind) => {
      const animClassNames = [];
      let id = getIdFromItem(item);
      if (this.props.getIdFromItem) id = this.props.getIdFromItem(item);
      const freshIndex = this.state.freshIds.indexOf(id);
      const isNew = freshIndex > -1;      
      const child = this.props.renderItem(item, ind, { isNew });
      if (isNew) {
        if (this.props.animLast) {
          if (freshIndex >= this.state.freshIds.length - this.props.animLast) {
            if (this.props.anim === "slide-up") animClassNames.push(`yanime-slide-up-100`);
            if (this.props.anim === "scale-in") animClassNames.push(`yanime-scale-in-50`);
            if (this.props.anim === "fade-in") animClassNames.push(`yanime-fade-in`);
            animClassNames.push(`yanime-${this.props.anim}`);
            if (this.props.staggerDelay) animClassNames.push(delays[delayInd]);
            delayInd += 1;
          }
        } else if (this.props.animFirst) {
          if (delayInd <= this.props.animFirst) {
            if (this.props.anim === "slide-up") animClassNames.push(`yanime-slide-up-100`);
            if (this.props.anim === "scale-in") animClassNames.push(`yanime-scale-in-50`);
            if (this.props.anim === "fade-in") animClassNames.push(`yanime-fade-in`);
            animClassNames.push(`yanime-${this.props.anim}`);
            if (this.props.staggerDelay) animClassNames.push(delays[delayInd]);
            delayInd += 1;
          }
        }
      }
      return (
        <div key={`${child.key}-seed${seed}`} className={`yanime-item-wrapper ${isNew ? 'yanime-new-item' : ''}`}>
          <div className={`yanime-item-holder ${animClassNames.join(' ')}`}>
            {child}
          </div>
        </div>
      );
    });

    const styles = {};
    if (this.props.grid) {
      styles.flexDirection = 'row';
      styles.flexWrap = 'wrap';
    }
    if (this.props.row || this.props.horizontal) {
      styles.flexDirection = 'row';
    }
    if (this.props.column || this.props.vertical) {
      styles.flexDirection = 'column';
    }

    const classNames = ['yanime-container'];
    if (this.props.className) classNames.push(this.props.className);
    
    return (
      <React.Fragment>
        <div className={classNames.join(' ')} style={styles}>
          {children}
        </div>
      </React.Fragment>
    );
  }
}

export default Yanime;