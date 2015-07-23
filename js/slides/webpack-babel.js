import React from 'react';
import BaseSlide from './base';

export default class Slide extends BaseSlide {
  constructor(props) {
    super(props);
  }

  renderContent() {
    return (
      <div>
        <h1>Webpack + Babel</h1>
        <h2>
          Start writing ES6 JS from NOW, or even ES7!
          <br />
          <a href="https://babeljs.io">{'https://babeljs.io'}</a>
          <br />
          <a href="https://babeljs.io">{'http://webpack.github.io/'}</a>
        </h2>
      </div>
    );
  }
}
