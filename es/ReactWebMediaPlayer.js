function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { getInitState } from './services/StateInitiator';
import Container from './components/Container';

import reducer from './reducers/Reducer';

var ReactWebMediaPlayer = function (_Component) {
  _inherits(ReactWebMediaPlayer, _Component);

  function ReactWebMediaPlayer(options) {
    _classCallCheck(this, ReactWebMediaPlayer);

    var _this = _possibleConstructorReturn(this, _Component.call(this, options));

    _this.store = createStore(reducer);
    _this.store.dispatch({ type: 'INIT_STATE', payload: { state: getInitState(_this.props) } });
    return _this;
  }

  ReactWebMediaPlayer.prototype.render = function render() {
    return React.createElement(
      Provider,
      { store: this.store },
      React.createElement(Container, null)
    );
  };

  return ReactWebMediaPlayer;
}(Component);

export default ReactWebMediaPlayer;