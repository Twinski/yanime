import React from 'react';


import './Yanime.scss';


class Yanime extends React.Component {
  render() {
    let seed = this.props.seed;
    if (!seed) seed = this.props.triggerAnim;

    
    const children = this.props.items.map((item, ind) => {
      const child = this.props.renderItem(item, ind);

      const classNames = [];
      if (child.props.className) classNames.push(child.props.className);
      if (this.props.anim === "slide-up") classNames.push(`yanime-slide-up-50`);
      if (this.props.anim === "scale-in") classNames.push(`yanime-scale-in-50`);
      if (this.props.anim === "fade-in") classNames.push(`yanime-fade-in`);
      if (this.props.animStaggerDelay) {
        let delay = this.props.animStaggerDelay || 0;
        delay *= 100;
        delay = Math.floor(delay / 25) * 25;
        delay *= ind;
        classNames.push(`yanime-delay-${delay}`);
      }

      return React.cloneElement(child, {
        key: `${child.key}-seed${seed}`,
        className: classNames.join(' '),
      });
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

    const classNames = ['yanime-wrapper'];
    if (this.props.className) classNames.push(this.props.className);
    
    return (
      <div className={classNames.join(' ')} style={styles}>
        {children}
      </div>
    );
  }
}

export default Yanime;