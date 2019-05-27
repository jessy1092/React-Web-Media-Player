function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Button.css';
import './Timer.css';

var Timer = function (_Component) {
    _inherits(Timer, _Component);

    function Timer() {
        var _temp, _this, _ret;

        _classCallCheck(this, Timer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.intToStingTime = function (nbSeconds) {
            var hours = (nbSeconds - nbSeconds % 3600) / 3600;
            var minuts = (nbSeconds % 3600 - nbSeconds % 3600 % 60) / 60;
            var seconds = Math.floor(nbSeconds % 3600 % 60);
            if (seconds < 10) seconds = "0" + seconds;
            if (minuts < 10 & hours >= 1) minuts = "0" + minuts;

            if (hours >= 1 || _this.props.duration > 3600) return hours + ":" + minuts + ":" + seconds;else return minuts + ":" + seconds;
        }, _this.render = function () {
            return React.createElement(
                'div',
                { className: 'wmp-tool-button button-time wmp-time-display' },
                React.createElement(
                    'span',
                    { className: 'wmp-time' },
                    _this.intToStingTime(_this.props.currentTime)
                ),
                React.createElement(
                    'span',
                    { className: 'wmp-time' },
                    ' / '
                ),
                React.createElement(
                    'span',
                    { className: 'wmp-time' },
                    _this.intToStingTime(_this.props.duration)
                )
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Timer;
}(Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        duration: state.duration,
        currentTime: state.currentTime
    };
};

export default connect(mapStateToProps)(Timer);