var _class, _temp, _initialiseProps;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Container.css';
import fscreen from "fscreen";
import TitleBar from "./TitleBar/TitleBar";
import MenuBar from "./MenuBar/MenuBar";
import Spinner from "./Loading/Spinner";
import Thumbnail from "./Init/Thumbnail";
import Mixer from "./Medias/Mixer";
import LargePlayButton from "./Init/LargePlayButton";

var TIME_TO_HIDE_MENU_IN_MILLISECONDS = 3000;

var Container = (_temp = _class = function (_Component) {
    _inherits(Container, _Component);

    function Container(props) {
        _classCallCheck(this, Container);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _initialiseProps.call(_this);

        _this.fscreen = fscreen;
        return _this;
    }

    return Container;
}(Component), _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.componentDidMount = function () {
        fscreen.addEventListener("fullscreenchange", _this2.detectFullScreen.bind(_this2));
    };

    this.componentWillUnmount = function () {
        fscreen.removeEventListener("fullscreenchange", _this2.detectFullScreen.bind(_this2));
        if (_this2.mouseStopTimer) {
            window.clearTimeout(_this2.mouseStopTimer);
        }
    };

    this.componentDidUpdate = function (prevProps) {
        if (prevProps.isFullscreen !== _this2.props.isFullscreen) {
            _this2.handlePropsChanges(_this2.props);
        }

        if (prevProps.timeLastUserAction !== _this2.props.timeLastUserAction && _this2.node !== undefined) {
            _this2.waitUserToBeInactive();
        }
    };

    this.handlePropsChanges = function (props) {
        var enabled = fscreen.fullscreenElement;
        if (enabled && !props.isFullscreen) {
            _this2.leaveFullScreen();
        } else if (!enabled && props.isFullscreen) {
            _this2.enterFullScreen();
        }
    };

    this.detectFullScreen = function () {
        if (_this2.fscreen.fullscreenElement == null) {
            if (_this2.props.isFullscreen) {
                _this2.props.dispatch({ type: 'SWITCH_FULLSCREEN_STATE' });
            }
            _this2.props.dispatch({ type: 'FULL_SCREEN_DISABLED' });
        } else {
            _this2.props.dispatch({ type: 'FULL_SCREEN_ENABLED' });
        }
    };

    this.enterFullScreen = function () {
        if (fscreen.fullscreenEnabled) {
            fscreen.requestFullscreen(_this2.node);
        }
    };

    this.leaveFullScreen = function () {
        if (fscreen.fullscreenEnabled) {
            fscreen.exitFullscreen();
        }
    };

    this.handleMouseEnter = function (e) {
        e.stopPropagation();
        if (!_this2.props.isInitialized) {
            _this2.props.dispatch({ type: 'HIGHLIGHT_PLAYER' });
        } else if (_this2.props.isPlaying) {
            //this.props.dispatch({ type: 'SHOW_MENUS' });
        }
    };

    this.handleMouseLeave = function (e) {
        e.stopPropagation();
        if (!_this2.props.isInitialized) {
            _this2.props.dispatch({ type: 'UNHIGHLIGHT_PLAYER' });
        } else if (_this2.props.allowMenuHiding && _this2.props.isPlaying) {
            _this2.props.dispatch({ type: 'HIDE_MENUS' });
        }
    };

    this.handleMouseMove = function (e) {
        if (_this2.props.isInitialized) {
            _this2.props.dispatch({ type: 'USER_ACTIVE' });
        }
    };

    this.handleClick = function (e) {
        e.stopPropagation();
        _this2.props.dispatch({ type: 'USER_ACTIVE' });
        if (!_this2.props.isInitialized) {
            _this2.props.dispatch({ type: 'INITIALIZE_PLAYER' });
            _this2.props.dispatch({ type: 'PLAY' });
        } else {
            if (_this2.props.isPlaying) {
                _this2.props.dispatch({ type: 'PREVENT_MENU_HIDING' });
                _this2.props.dispatch({ type: 'PAUSE' });
            } else {
                _this2.props.dispatch({ type: 'PLAY' });
                _this2.props.dispatch({ type: 'ALLOW_MENU_HIDING' });
            }
        }
    };

    this.waitUserToBeInactive = function () {
        _this2.props.dispatch({ type: 'SHOW_MENUS' });
        _this2.node.style.cursor = "";
        if (_this2.mouseStopTimer) {
            window.clearTimeout(_this2.mouseStopTimer);
        }
        _this2.mouseStopTimer = window.setTimeout(function () {
            if (_this2.props.allowMenuHiding && _this2.props.isPlaying) {
                _this2.props.dispatch({ type: 'HIDE_MENUS' });
                _this2.node.style.cursor = "none";
            }
        }, TIME_TO_HIDE_MENU_IN_MILLISECONDS);
    };

    this.render = function () {
        var className = ["wmp-container", "fullscreen"];
        var style = {};
        var id = _this2.props.id;
        Object.assign(style, _this2.props.style);

        style.width = _this2.props.width + "px", style.height = _this2.props.height + "px";
        if (_this2.props.isFullscreenActivated) {
            className.push("fullscreen-enabled");
            style.width = "100%";
            style.height = "100%";
        }

        var thumbnail = void 0,
            largePlayButton = void 0,
            menuBar = void 0,
            titleBar = void 0,
            spinner = void 0;
        if (_this2.props.thumbnail && !_this2.props.isInitialized && !_this2.props.autoplay) thumbnail = React.createElement(Thumbnail, null);
        if (_this2.props.isInitialized && _this2.props.showMenus || _this2.props.isTestEnvironment) {
            menuBar = React.createElement(MenuBar, null);
        }
        if (!_this2.props.isInitialized && !_this2.props.autoplay) {
            largePlayButton = React.createElement(LargePlayButton, null);
        }
        if (!_this2.props.isInitialized || _this2.props.showMenus) {
            titleBar = React.createElement(TitleBar, null);
        }
        if (_this2.props.isInitialized && _this2.props.isLoading) {
            spinner = React.createElement(Spinner, null);
        }
        return React.createElement(
            'div',
            {
                id: id,
                className: className.join(" "),
                style: style, ref: function ref(node) {
                    return _this2.node = node;
                },
                onMouseEnter: _this2.handleMouseEnter,
                onMouseLeave: _this2.handleMouseLeave,
                onMouseMoveCapture: _this2.handleMouseMove,
                onClick: _this2.handleClick
            },
            spinner,
            thumbnail,
            largePlayButton,
            titleBar,
            menuBar,
            React.createElement(Mixer, null)
        );
    };
}, _temp);


var mapStateToProps = function mapStateToProps(state) {
    return {
        timeLastUserAction: state.timeLastUserAction,
        width: state.width,
        height: state.height,
        thumbnail: state.thumbnail,
        hasVideo: state.hasVideo,
        hasAudio: state.hasAudio,
        hasSlideshow: state.hasSlideshow,
        isInitialized: state.isInitialized,
        isFullscreen: state.isFullscreen,
        showMenus: state.showMenus,
        isPlaying: state.isPlaying,
        allowMenuHiding: state.allowMenuHiding,
        isLoading: state.isLoading,
        isFullscreenActivated: state.isFullscreenActivated,
        autoplay: state.autoplay,
        style: state.style,
        id: state.id,
        isTestEnvironment: state.isTestEnvironment
    };
};

export default connect(mapStateToProps)(Container);