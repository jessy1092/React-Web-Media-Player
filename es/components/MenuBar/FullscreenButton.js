function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Button.css';

var fullscreenLogo = React.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '29', height: '29', viewBox: '0 0 24 24', className: 'fullscreen-logo' },
    React.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    React.createElement('path', { className: 'wmp-tool-button-logo', fill: '#e4e5e8', d: 'M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z' })
);

var fullscreenExitLogo = React.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '29', height: '29', viewBox: '0 0 24 24', className: 'fullscreen-exit-logo' },
    React.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    React.createElement('path', { className: 'wmp-tool-button-logo', fill: '#e4e5e8', d: 'M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z' })
);

var FullscreenButton = function (_Component) {
    _inherits(FullscreenButton, _Component);

    function FullscreenButton() {
        var _temp, _this, _ret;

        _classCallCheck(this, FullscreenButton);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleClick = function (e) {
            e.stopPropagation();
            _this.props.dispatch({ type: 'SWITCH_FULLSCREEN_STATE' });
            _this.props.dispatch({ type: 'USER_ACTIVE' });
        }, _this.render = function () {
            var button = void 0;
            if (_this.props.isFullscreen) button = fullscreenExitLogo;else button = fullscreenLogo;

            return React.createElement(
                'div',
                { className: 'wmp-tool-button logo-padding-small', onClick: _this.handleClick },
                button
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return FullscreenButton;
}(Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        isFullscreen: state.isFullscreen
    };
};

export default connect(mapStateToProps)(FullscreenButton);