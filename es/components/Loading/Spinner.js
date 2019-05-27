function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Spinner.css';

var Spinner = function (_Component) {
    _inherits(Spinner, _Component);

    function Spinner() {
        var _temp, _this, _ret;

        _classCallCheck(this, Spinner);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.render = function () {
            return React.createElement(
                'div',
                { className: 'wmp-spinner', hidden: !_this.props.isLoading },
                React.createElement(
                    'div',
                    { className: 'wmp-spinner-container' },
                    React.createElement(
                        'div',
                        { className: 'wmp-spinner-rotator' },
                        React.createElement(
                            'div',
                            { className: 'wmp-spinner-left' },
                            React.createElement('div', { className: 'wmp-spinner-circle' })
                        ),
                        React.createElement(
                            'div',
                            { className: 'wmp-spinner-right' },
                            React.createElement('div', { className: 'wmp-spinner-circle' })
                        )
                    )
                )
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Spinner;
}(Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        isLoading: state.isLoading
    };
};

export default connect(mapStateToProps)(Spinner);