function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Button.css';

var playLogo = React.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '30', height: '30', viewBox: '0 0 24 24', className: 'play-logo' },
    React.createElement('path', { className: 'wmp-tool-button-logo', fill: '#e4e5e8', d: 'M8 5v14l11-7z' }),
    React.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
);

var pauseLogo = React.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '29', height: '29', viewBox: '0 0 24 24', className: 'pause-logo' },
    React.createElement('path', { className: 'wmp-tool-button-logo', fill: '#e4e5e8', d: 'M6 19h4V5H6v14zm8-14v14h4V5h-4z' }),
    React.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
);

var replayLogo = React.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '27', height: '27', viewBox: '0 0 24 24', className: 'replay-logo' },
    React.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    React.createElement('path', { className: 'wmp-tool-button-logo', fill: '#e4e5e8', d: 'M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z' })
);

var PlayButton = function (_Component) {
    _inherits(PlayButton, _Component);

    function PlayButton() {
        var _temp, _this, _ret;

        _classCallCheck(this, PlayButton);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleClick = function (e) {
            _this.props.dispatch({ type: 'USER_ACTIVE' });
            if (!_this.props.isReadingTerminated) {
                if (_this.props.isPlaying) {
                    _this.props.dispatch({ type: 'PREVENT_MENU_HIDING' });
                    _this.props.dispatch({ type: 'PAUSE' });
                } else {
                    _this.props.dispatch({ type: 'PLAY' });
                    _this.props.dispatch({ type: 'ALLOW_MENU_HIDING' });
                }
            } else {
                _this.props.dispatch({ type: 'UPDATE_ASKED_TIME', payload: { askedTime: 0 } });
            }
        }, _this.render = function () {
            var action = void 0;
            if (!_this.props.isReadingTerminated) {
                if (_this.props.isPlaying) {
                    action = pauseLogo;
                } else {
                    action = playLogo;
                }
            } else {
                action = replayLogo;
            }
            return React.createElement(
                'div',
                { className: 'wmp-tool-button logo-padding-small', onClick: _this.handleClick },
                action
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return PlayButton;
}(Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        isPlaying: state.isPlaying,
        isReadingTerminated: state.isReadingTerminated
    };
};

export default connect(mapStateToProps)(PlayButton);