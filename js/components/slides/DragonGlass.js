import React from 'react';
import BaseSlide from '../BaseSlide';

export default class Slide extends BaseSlide {
  renderContent() {
    return (
      <div>
        <h1 className="extra-large">Dragon Glass!!!</h1>
      </div>
    );
  }
}
