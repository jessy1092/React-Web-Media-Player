function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LargePlayButton.css';

var playLogo = React.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '40', height: '40', viewBox: '0 0 24 24' },
    React.createElement('path', { fill: 'white', d: 'M8 5v14l11-7z' }),
    React.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
);

var LargePlayButton = function (_Component) {
    _inherits(LargePlayButton, _Component);

    function LargePlayButton() {
        var _temp, _this, _ret;

        _classCallCheck(this, LargePlayButton);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.render = function () {
            var style = void 0;
            if (_this.props.isPlayerHighlighted) {
                style = {
                    backgroundColor: _this.props.color,
                    opacity: 1
                };
            }

            return React.createElement(
                'div',
                { className: 'wmp-large-play-button ', style: style },
                React.createElement(
                    'div',
                    { className: 'wmp-central-play-arrow material-icons md-40' },
                    playLogo
                )
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return LargePlayButton;
}(Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        isPlayerHighlighted: state.isPlayerHighlighted,
        color: state.color
    };
};

export default connect(mapStateToProps)(LargePlayButton);