function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import './Button.css';
import './LogoButton.css';

var LogoButton = function (_Component) {
    _inherits(LogoButton, _Component);

    function LogoButton() {
        var _temp, _this, _ret;

        _classCallCheck(this, LogoButton);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getAltValue = function (imagesrc) {
            return imagesrc.split('/').map(function (part) {
                return part.split(".")[0];
            }).reduce(function (accumulator, currentValue) {
                return currentValue + ' ' + accumulator;
            });
        }, _this.render = function () {
            var logo = void 0;
            if (_this.props.href !== undefined) {
                logo = React.createElement(
                    'a',
                    { href: _this.props.href },
                    React.createElement('img', { src: _this.props.img, alt: '', className: 'logo-image' })
                );
            } else {
                logo = React.createElement('img', { src: _this.props.img, alt: '', className: 'logo-image' });
            }
            return React.createElement(
                'div',
                { className: 'wmp-tool-button logo light-grey-to-white' },
                logo
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return LogoButton;
}(Component);

export default LogoButton;