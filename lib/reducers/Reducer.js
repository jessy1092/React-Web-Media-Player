'use strict';

exports.__esModule = true;

var _HighlightPlayer = require('../actions/HighlightPlayer');

var _HighlightPlayer2 = _interopRequireDefault(_HighlightPlayer);

var _UnhighlightPlayer = require('../actions/UnhighlightPlayer');

var _UnhighlightPlayer2 = _interopRequireDefault(_UnhighlightPlayer);

var _InitializePlayer = require('../actions/InitializePlayer');

var _InitializePlayer2 = _interopRequireDefault(_InitializePlayer);

var _ShowVolumeSlider = require('../actions/ShowVolumeSlider');

var _ShowVolumeSlider2 = _interopRequireDefault(_ShowVolumeSlider);

var _HideVolumeSlider = require('../actions/HideVolumeSlider');

var _HideVolumeSlider2 = _interopRequireDefault(_HideVolumeSlider);

var _SwitchFullscreen = require('../actions/SwitchFullscreen');

var _SwitchFullscreen2 = _interopRequireDefault(_SwitchFullscreen);

var _AdaptPlayerToFullscreen = require('../actions/AdaptPlayerToFullscreen');

var _AdaptPlayerToFullscreen2 = _interopRequireDefault(_AdaptPlayerToFullscreen);

var _AdaptPlayerToNonFullscreen = require('../actions/AdaptPlayerToNonFullscreen');

var _AdaptPlayerToNonFullscreen2 = _interopRequireDefault(_AdaptPlayerToNonFullscreen);

var _UpdateVolume = require('../actions/UpdateVolume');

var _UpdateVolume2 = _interopRequireDefault(_UpdateVolume);

var _SaveActualVolumeAsPastVolume = require('../actions/SaveActualVolumeAsPastVolume');

var _SaveActualVolumeAsPastVolume2 = _interopRequireDefault(_SaveActualVolumeAsPastVolume);

var _UpdateVolumeSliderLeftMargin = require('../actions/UpdateVolumeSliderLeftMargin');

var _UpdateVolumeSliderLeftMargin2 = _interopRequireDefault(_UpdateVolumeSliderLeftMargin);

var _PreventMouseLeaveVolumeSlider = require('../actions/PreventMouseLeaveVolumeSlider');

var _PreventMouseLeaveVolumeSlider2 = _interopRequireDefault(_PreventMouseLeaveVolumeSlider);

var _AllowMouseLeaveVolumeSlider = require('../actions/AllowMouseLeaveVolumeSlider');

var _AllowMouseLeaveVolumeSlider2 = _interopRequireDefault(_AllowMouseLeaveVolumeSlider);

var _HighlightProgressBar = require('../actions/HighlightProgressBar');

var _HighlightProgressBar2 = _interopRequireDefault(_HighlightProgressBar);

var _UnhighlightProgressBar = require('../actions/UnhighlightProgressBar');

var _UnhighlightProgressBar2 = _interopRequireDefault(_UnhighlightProgressBar);

var _ReadingNotTerminated = require('../actions/ReadingNotTerminated');

var _ReadingNotTerminated2 = _interopRequireDefault(_ReadingNotTerminated);

var _ReadingTerminated = require('../actions/ReadingTerminated');

var _ReadingTerminated2 = _interopRequireDefault(_ReadingTerminated);

var _UpdateCurrentTime = require('../actions/UpdateCurrentTime');

var _UpdateCurrentTime2 = _interopRequireDefault(_UpdateCurrentTime);

var _PreventUnhighlightProgressBar = require('../actions/PreventUnhighlightProgressBar');

var _PreventUnhighlightProgressBar2 = _interopRequireDefault(_PreventUnhighlightProgressBar);

var _AllowUnhighlightProgressBar = require('../actions/AllowUnhighlightProgressBar');

var _AllowUnhighlightProgressBar2 = _interopRequireDefault(_AllowUnhighlightProgressBar);

var _Play = require('../actions/Play');

var _Play2 = _interopRequireDefault(_Play);

var _Pause = require('../actions/Pause');

var _Pause2 = _interopRequireDefault(_Pause);

var _ShowMenus = require('../actions/ShowMenus');

var _ShowMenus2 = _interopRequireDefault(_ShowMenus);

var _HideMenus = require('../actions/HideMenus');

var _HideMenus2 = _interopRequireDefault(_HideMenus);

var _UpdateTimeLastUserAction = require('../actions/UpdateTimeLastUserAction');

var _UpdateTimeLastUserAction2 = _interopRequireDefault(_UpdateTimeLastUserAction);

var _ShowCursor = require('../actions/ShowCursor');

var _ShowCursor2 = _interopRequireDefault(_ShowCursor);

var _HideCursor = require('../actions/HideCursor');

var _HideCursor2 = _interopRequireDefault(_HideCursor);

var _UpdateDuration = require('../actions/UpdateDuration');

var _UpdateDuration2 = _interopRequireDefault(_UpdateDuration);

var _AudioNotReady = require('../actions/AudioNotReady');

var _AudioNotReady2 = _interopRequireDefault(_AudioNotReady);

var _AudioReady = require('../actions/AudioReady');

var _AudioReady2 = _interopRequireDefault(_AudioReady);

var _VideoNotReady = require('../actions/VideoNotReady');

var _VideoNotReady2 = _interopRequireDefault(_VideoNotReady);

var _VideoReady = require('../actions/VideoReady');

var _VideoReady2 = _interopRequireDefault(_VideoReady);

var _SlideshowNotReady = require('../actions/SlideshowNotReady');

var _SlideshowNotReady2 = _interopRequireDefault(_SlideshowNotReady);

var _SlideshowReady = require('../actions/SlideshowReady');

var _SlideshowReady2 = _interopRequireDefault(_SlideshowReady);

var _AddImage = require('../actions/AddImage');

var _AddImage2 = _interopRequireDefault(_AddImage);

var _Loading = require('../actions/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _NotLoading = require('../actions/NotLoading');

var _NotLoading2 = _interopRequireDefault(_NotLoading);

var _UpdateAskedTime = require('../actions/UpdateAskedTime');

var _UpdateAskedTime2 = _interopRequireDefault(_UpdateAskedTime);

var _UpdateImageDisplayed = require('../actions/UpdateImageDisplayed');

var _UpdateImageDisplayed2 = _interopRequireDefault(_UpdateImageDisplayed);

var _AskPreviousImage = require('../actions/AskPreviousImage');

var _AskPreviousImage2 = _interopRequireDefault(_AskPreviousImage);

var _AskNextImage = require('../actions/AskNextImage');

var _AskNextImage2 = _interopRequireDefault(_AskNextImage);

var _UpdateVideoWidth = require('../actions/UpdateVideoWidth');

var _UpdateVideoWidth2 = _interopRequireDefault(_UpdateVideoWidth);

var _UpdateVideoHeight = require('../actions/UpdateVideoHeight');

var _UpdateVideoHeight2 = _interopRequireDefault(_UpdateVideoHeight);

var _PreventMenuHiding = require('../actions/PreventMenuHiding');

var _PreventMenuHiding2 = _interopRequireDefault(_PreventMenuHiding);

var _AllowMenuHiding = require('../actions/AllowMenuHiding');

var _AllowMenuHiding2 = _interopRequireDefault(_AllowMenuHiding);

var _UpdateTimeRangeBuffered = require('../actions/UpdateTimeRangeBuffered');

var _UpdateTimeRangeBuffered2 = _interopRequireDefault(_UpdateTimeRangeBuffered);

var _ChannelsWait = require('../actions/ChannelsWait');

var _ChannelsWait2 = _interopRequireDefault(_ChannelsWait);

var _ChannelsContinue = require('../actions/ChannelsContinue');

var _ChannelsContinue2 = _interopRequireDefault(_ChannelsContinue);

var _VinylReady = require('../actions/VinylReady');

var _VinylReady2 = _interopRequireDefault(_VinylReady);

var _Mute = require('../actions/Mute');

var _Mute2 = _interopRequireDefault(_Mute);

var _Unmute = require('../actions/Unmute');

var _Unmute2 = _interopRequireDefault(_Unmute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = function reducer(state, action) {
    if (action === undefined) {
        return state;
    }
    switch (action.type) {
        case "UNMUTE":
            return (0, _Unmute2.default)(state);
        case "MUTE":
            return (0, _Mute2.default)(state);
        case "VINYL_IS_READY":
            return (0, _VinylReady2.default)(state);
        case "CHANNELS_CONTINUE":
            return (0, _ChannelsContinue2.default)(state);
        case "CHANNELS_WAIT":
            return (0, _ChannelsWait2.default)(state);
        case "UPDATE_TIME_RANGE_BUFFERED":
            return (0, _UpdateTimeRangeBuffered2.default)(state, action);
        case "PREVENT_MENU_HIDING":
            return (0, _PreventMenuHiding2.default)(state);
        case "ALLOW_MENU_HIDING":
            return (0, _AllowMenuHiding2.default)(state);
        case "UPDATE_VIDEO_WIDTH":
            return (0, _UpdateVideoWidth2.default)(state, action);
        case "UPDATE_VIDEO_HEIGHT":
            return (0, _UpdateVideoHeight2.default)(state, action);
        case "ASK_NEXT_IMAGE":
            return (0, _AskNextImage2.default)(state);
        case "ASK_PREVIOUS_IMAGE":
            return (0, _AskPreviousImage2.default)(state);
        case 'UPDATE_IMAGE_DISPLAYED':
            return (0, _UpdateImageDisplayed2.default)(state, action);
        case 'UPDATE_ASKED_TIME':
            return (0, _UpdateAskedTime2.default)(state, action);
        case 'NOT_LOADING':
            return (0, _NotLoading2.default)(state, action);
        case 'LOADING':
            return (0, _Loading2.default)(state, action);
        case 'ADD_IMAGE':
            return (0, _AddImage2.default)(state, action);
        case 'AUDIO_IS_NOT_READY':
            return (0, _AudioNotReady2.default)(state);
        case 'AUDIO_IS_READY':
            return (0, _AudioReady2.default)(state);
        case 'VIDEO_IS_NOT_READY':
            return (0, _VideoNotReady2.default)(state);
        case 'VIDEO_IS_READY':
            return (0, _VideoReady2.default)(state);
        case 'SLIDESHOW_IS_NOT_READY':
            return (0, _SlideshowNotReady2.default)(state);
        case 'SLIDESHOW_IS_READY':
            return (0, _SlideshowReady2.default)(state);
        case 'UPDATE_DURATION':
            return (0, _UpdateDuration2.default)(state, action);
        case 'SHOW_CURSOR':
            return (0, _ShowCursor2.default)(state);
        case 'HIDE_CURSOR':
            return (0, _HideCursor2.default)(state);
        case 'UPDATE_CURRENT_TIME':
            return (0, _UpdateCurrentTime2.default)(state, action);
        case 'SHOW_MENUS':
            return (0, _ShowMenus2.default)(state);
        case 'HIDE_MENUS':
            return (0, _HideMenus2.default)(state);
        case 'USER_ACTIVE':
            return (0, _UpdateTimeLastUserAction2.default)(state);
        case 'PLAY':
            return (0, _Play2.default)(state);
        case 'PAUSE':
            return (0, _Pause2.default)(state);
        case 'ALLOW_UNHIGHLIGHT_PROGRESS_BAR':
            return (0, _AllowUnhighlightProgressBar2.default)(state);
        case 'PREVENT_UNHIGHLIGHT_PROGRESS_BAR':
            return (0, _PreventUnhighlightProgressBar2.default)(state);
        case 'READING_TERMINATED':
            return (0, _ReadingTerminated2.default)(state);
        case 'READING_NOT_TERMINATED':
            return (0, _ReadingNotTerminated2.default)(state);
        case 'HIGHLIGHT_PROGRESS_BAR':
            return (0, _HighlightProgressBar2.default)(state);
        case 'UNHIGHLIGHT_PROGRESS_BAR':
            return (0, _UnhighlightProgressBar2.default)(state);
        case 'ALLOW_MOUSE_LEAVE_VOLUME_SLIDER':
            return (0, _AllowMouseLeaveVolumeSlider2.default)(state);
        case 'PREVENT_MOUSE_LEAVE_VOLUME_SLIDER':
            return (0, _PreventMouseLeaveVolumeSlider2.default)(state);
        case 'UPDATE_VOLUME_SLIDER_LEFT_MARGIN':
            return (0, _UpdateVolumeSliderLeftMargin2.default)(state, action);
        case 'SAVE_ACTUAL_VOLUME_AS_PAST_VOLUME':
            return (0, _SaveActualVolumeAsPastVolume2.default)(state);
        case 'UPDATE_VOLUME':
            return (0, _UpdateVolume2.default)(state, action);
        case 'FULL_SCREEN_ENABLED':
            return (0, _AdaptPlayerToFullscreen2.default)(state);
        case 'FULL_SCREEN_DISABLED':
            return (0, _AdaptPlayerToNonFullscreen2.default)(state);
        case 'SWITCH_FULLSCREEN_STATE':
            return (0, _SwitchFullscreen2.default)(state);
        case 'SHOW_VOLUME_SLIDER':
            return (0, _ShowVolumeSlider2.default)(state);
        case 'HIDE_VOLUME_SLIDER':
            return (0, _HideVolumeSlider2.default)(state);
        case 'HIGHLIGHT_PLAYER':
            return (0, _HighlightPlayer2.default)(state);
        case 'UNHIGHLIGHT_PLAYER':
            return (0, _UnhighlightPlayer2.default)(state);
        case 'INITIALIZE_PLAYER':
            return (0, _InitializePlayer2.default)(state);
        case 'INIT_STATE':
            return action.payload.state;
        default:
            return state;
    }
};

exports.default = reducer;
module.exports = exports['default'];