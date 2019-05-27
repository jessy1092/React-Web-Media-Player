function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MenuBar.css';
import PlayButton from './PlayButton';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';
import Timer from './Timer';
import FullscreenButton from './FullscreenButton';
import VolumeControl from './VolumeControl';
import ProgressBar from "./ProgressBar";
import LogoButton from "./LogoButton";
import Button from "./Button";

var MenuBar = function (_Component) {
    _inherits(MenuBar, _Component);

    function MenuBar() {
        var _temp, _this, _ret;

        _classCallCheck(this, MenuBar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleClick = function (e) {
            e.stopPropagation();
        }, _this.render = function () {
            var volumeControl = void 0,
                previousButton = void 0,
                nextButton = void 0,
                logo = void 0,
                fullscreenButton = void 0;
            var buttons = [];
            if (_this.props.hasVideo || _this.props.hasAudio) volumeControl = React.createElement(VolumeControl, null);else {
                previousButton = React.createElement(PreviousButton, null);
                nextButton = React.createElement(NextButton, null);
            }
            if (_this.props.logo) {
                logo = React.createElement(LogoButton, { img: _this.props.logo.img, href: _this.props.logo.href });
            }
            if (_this.props.buttons) {
                for (var i = 0; i < _this.props.buttons.length; ++i) {
                    buttons.push(React.createElement(Button, { img: _this.props.buttons[i].img, key: i, href: _this.props.buttons[i].href, style: _this.props.buttons[i].style, callback: _this.props.buttons[i].callback }));
                }
            }
            if (_this.props.allowFullFrame) {
                fullscreenButton = React.createElement(FullscreenButton, null);
            }
            return React.createElement(
                'div',
                { className: 'wmp-menu-bar-container' },
                React.createElement('div', { className: 'wmp-bottom-shading' }),
                React.createElement('div', { className: 'wmp-menu-bar-offset-left' }),
                React.createElement('div', { className: 'wmp-menu-bar-offset-right' }),
                React.createElement(
                    'div',
                    { className: 'wmp-menu-bar', onClick: _this.handleClick },
                    React.createElement(
                        'div',
                        { className: 'wmp-tool-constainer' },
                        React.createElement(
                            'div',
                            { className: 'wmp-tool-constainer-left' },
                            React.createElement(PlayButton, null),
                            volumeControl,
                            previousButton,
                            nextButton,
                            React.createElement(Timer, null)
                        ),
                        React.createElement(
                            'div',
                            { className: 'wmp-tool-constainer-right' },
                            buttons,
                            logo,
                            fullscreenButton
                        )
                    )
                ),
                React.createElement(ProgressBar, null)
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return MenuBar;
}(Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        hasVideo: state.hasVideo,
        hasAudio: state.hasAudio,
        hasSlideshow: state.hasSlideshow,
        allowMouseLeaveVolumeSlider: state.allowMouseLeaveVolumeSlider,
        logo: state.logo,
        buttons: state.buttons,
        allowFullFrame: state.allowFullFrame
    };
};

export default connect(mapStateToProps)(MenuBar);