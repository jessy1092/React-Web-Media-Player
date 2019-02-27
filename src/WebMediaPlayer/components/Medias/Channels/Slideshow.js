import React, { Component } from 'react';
import { connect } from 'react-redux';
const MINIMUM_BUFFERED_TIME = 2; //buffered time to be loaded before launching the slideshow in seconds
const REFRESH_TIME_IN_MILLISECONDS = 10;

class Slideshow extends Component {

    constructor(props) {
        super(props);
        this.currentTime = 0;
        this.buffered = [];
        this.startTime = 0;
        this.tempTime = null;
        this.imageDisplayed = null;
        this.timerFunction = null;
    };

    getCurrentTime = () => this.currentTime;

    load = (time) => {
        console.log("slideshow load");
        if (time === undefined || time < 0) {
            time = 0;
        }
        this.startTime = time;
        var imageStartTime = 0;
        for (var i = 0; i < this.props.slideshow.length; ++i) {
            var imageEndTime = this.props.slideshow[i].endTime;
            if (time < imageEndTime) {
                let image = new Image();
                image.endTime = imageEndTime;
                image.startTime = imageStartTime;
                image.onload = (e) => {
                    this.addPortionBuffered(e.target.startTime, e.target.endTime);
                    if (this.hasEnoughBuffered(this.startTime) && !this.props.isSlideshowReady) {
                        this.props.dispatch({ type: 'SLIDESHOW_IS_READY' });
                    }
                }
                image.src = this.props.slideshow[i].src;
                this.props.dispatch({ type: 'ADD_IMAGE', payload: { index: i, image: image } });

            }
            imageStartTime = imageEndTime;
        }
    }

    play = () => {
        if(!this.hasEnoughBuffered(this.currentTime)){
            this.props.dispatch({ type: 'SLIDESHOW_IS_NOT_READY' });
            this.load(this.currentTime);
        } else {
            this.props.dispatch({ type: 'SLIDESHOW_IS_READY' });
        }
        console.log("slideshow play");
        this.load(this.currentTime)
        //this.currentTime = time;
        this.tempTime = new Date();
        //play mechanism (relaunch refresh)
        this.relaunchRefresh();
    };

    changeTime = (time) => {
        console.log("slideshow changetime");
        if (time === undefined || time < 0) {
            time = 0;
        }
        if(!this.hasEnoughBuffered(time)){
            this.props.dispatch({ type: 'SLIDESHOW_IS_NOT_READY' });
            this.load(time);
        } else {
            this.props.dispatch({ type: 'SLIDESHOW_IS_READY' });
        }
        this.currentTime = time;
        this.tempTime = new Date();
    };

    pause = (time) => {
        console.log("slideshow pause");
        if (time !== undefined) this.currentTime = time;
        if (this.hasEnoughBuffered(time)) {
            this.updateView();
        }
        this.stopRefresh();
    };

    stop = () => {
        console.log("slideshow stop");
        this.stopRefresh();
        this.currentTime = this.props.duration;
    };

    getTimePreviousImage = () => {
        for (var i = 0; i <= this.props.slideshow.length; ++i) {
            if (i === this.props.slideshow.length) {
                if (i < 3) {
                    return 0
                } else {
                    return this.props.slideshow[i - 3].endTime
                }
            } else if (this.props.currentTime < this.props.slideshow[i].endTime) {
                if (i < 2) {
                    return 0
                } else {
                    return this.props.slideshow[i - 2].endTime;
                }
            }
        }
    };

    getTimeNextImage = () => {
        for (var i = 0; i < this.props.slideshow.length; ++i) {
            if (this.props.currentTime < this.props.slideshow[i].endTime) {
                return this.props.slideshow[i].endTime;
            }
            if (this.props.slideshow[i].endTime === this.props.timeLength) {
                return this.props.duration
            }
        }
    };

    hasEnoughBuffered = (time) => {
        for (let i = 0; i < this.buffered.length; i++) {
            let startTime = this.buffered[i][0];
            let endTime = this.buffered[i][1];
            let hasStartTimeBuffered
            if (time >= startTime && time <= endTime) {
                hasStartTimeBuffered = true;
            } else {
                hasStartTimeBuffered = false;
            }
            let minimumTimeToBeLoaded = time + MINIMUM_BUFFERED_TIME;
            if (minimumTimeToBeLoaded > this.props.duration)
                minimumTimeToBeLoaded = this.props.duration;

            if (hasStartTimeBuffered && minimumTimeToBeLoaded <= endTime) {
                return true;
            }
        }
        return false;
    };

    timeRangeBuffered = (time) => {
        for (let i = 0; i < this.buffered.length; i++) {
            let portionStartTime = this.buffered[i][0];
            let portionEndTime = this.buffered[i][1];
            if (time >= portionStartTime && time <= portionEndTime) {
                return portionEndTime
            }
        }
    }

    updateView = () => {
        for (var i = 0; i < this.props.slideshow.length; ++i) {
            if (this.currentTime < this.props.slideshow[i].endTime) {
                this.displayImage(this.props.slideshow[i]);
                break;
            }
        }
    }

    displayImage = (image) => {
        let width, height;

        if (image !== undefined)
            this.imageDisplayed = image;
        if (this.props.isFullScreenActivated) {
            width = window.screen.width;
            height = window.screen.height;
        } else {
            width = this.props.width;
            height = this.props.height;
        }
        let imgWidth = this.imageDisplayed.element.width;
        let imgHeight = this.imageDisplayed.element.height;
        this.imageSlider.style.marginTop = "0px";
        this.imageSlider.style.marginLeft = "0px";
        if (imgWidth >= imgHeight) {
            if (imgHeight / imgWidth * width <= height) {
                this.adaptImageToWidth(width, height);
            } else {
                this.adaptImageToHeight(width, height);
            }
        } else {
            if (imgHeight / imgWidth * width <= height) {
                this.adaptImageToWidth(width, height);
            } else {
                this.adaptImageToHeight(width, height);
            }
        }
        this.imageSlider.src = this.imageDisplayed.src;
    };

    adaptImageToWidth = (width, height) => {
        let imgWidth = this.imageDisplayed.element.width;
        let imgHeight = this.imageDisplayed.element.height;
        let margin = (height - imgHeight / imgWidth * width) / 2;
        this.imageSlider.style.marginTop = margin + "px";
        this.imageSlider.style.width = "100%";
        this.imageSlider.style.height = (imgHeight / imgWidth * width) + "px";
    };

    adaptImageToHeight = (width, height) => {
        let imgWidth = this.imageDisplayed.element.width;
        let imgHeight = this.imageDisplayed.element.height;
        let margin = (width - imgWidth / imgHeight * height) / 2;
        this.imageSlider.style.marginLeft = margin + "px";
        this.imageSlider.style.height = "100%";
        this.imageSlider.style.width = (imgWidth / imgHeight * height) + "px";
    };

    relaunchRefresh = () => {
        this.stopRefresh();
        this.launchRefresh();
    }

    launchRefresh = () => {
        this.timerFunction = window.setInterval(this.refresh, REFRESH_TIME_IN_MILLISECONDS);

    }

    stopRefresh = () => {
        window.clearInterval(this.timerFunction);
    }

    refresh = () => {
        if(!this.hasEnoughBuffered(this.currentTime)){
            this.props.dispatch({ type: 'SLIDESHOW_IS_NOT_READY' });
            this.load(this.currentTime);
        }
        var now = new Date();
        var deltaTime = (now.getTime() - this.tempTime.getTime()) / 1000;
        this.tempTime = now;
        this.currentTime += deltaTime;
        if (this.currentTime >= this.props.duration) {
            this.stop();
        }
        this.updateView();
    };

    /*
        This function merge the cells that are following in time
    */
    updatePortionsBuffered = () => {
        console.log(this.buffered);
        for (var i = 0; i < this.buffered.length; i++) {
            for (var j = 0; j < this.buffered.length; j++) {
                if (i !== j) {
                    var startTime1stPortion = this.buffered[i][0];
                    var endTime1stPortion = this.buffered[i][1];
                    var startTime2ndPortion = this.buffered[j][0];
                    var endTime2ndPortion = this.buffered[j][1];
                    if (endTime1stPortion === startTime2ndPortion) {
                        this.buffered[i][1] = endTime2ndPortion;
                        this.buffered.splice(j, 1);
                        i = 0;
                        continue;
                    }
                    if (endTime2ndPortion === startTime1stPortion) {
                        this.buffered[j][1] = endTime1stPortion;
                        this.buffered.splice(i, 1);
                        i = 0;
                        continue;
                    }
                    if (startTime1stPortion >= startTime2ndPortion && endTime1stPortion <= endTime2ndPortion) {
                        this.buffered.splice(i, 1);
                        i = 0;
                        continue;
                    }
                }
            }
        }
    };

    addPortionBuffered = (startTime, endTime) => {
        for (var i = 0; i < this.buffered.length; i++) {
            var portionStartTime = this.buffered[i][0];
            var portionEndTime = this.buffered[i][1];
            if (portionEndTime === startTime) {
                this.buffered[i][1] = endTime;
                this.updatePortionsBuffered();
                return;
            } else if (endTime === portionStartTime) {
                this.buffered[i][0] = startTime;
                this.updatePortionsBuffered();
                return;
            }
        }
        this.buffered.push([startTime, endTime]);
        this.updatePortionsBuffered();
    }


    render = () => {
        return (
            <img ref={imageSlider => (this.imageSlider = imageSlider)} alt=""></img>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isSlideshowReady: state.isSlideshowReady,
        slideshow: state.slideshow,
        duration: state.duration,
        currentTime: state.currentTime,
        isFullScreenActivated: state.isFullScreenActivated,
        width: state.width,
        height: state.height,
    };
};

export default connect(mapStateToProps, null, null, { forwardRef: true })(Slideshow);