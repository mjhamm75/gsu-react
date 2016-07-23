import React, { Component } from 'react';

import s from './HelloWorld.css';

class HelloWorld extends Component {
  render() {
    let { name, greeting } = this.props;
    return (
      <div>
        <h1 className={s.header}>Hi Jason</h1>
        <h2 className={s.subHeader}>Sub-header</h2>
        <small className={s.smallStuff}>small stuff</small>
      </div>
    )
  }
}

export default HelloWorld;
