/**
 * Created by logov on 05-May-17.
 */

import './base.less'
import template from './base.html'

export default {
    props: ['changeSourceBtn', 'chooseSourceBtn'],
    data: function () {
        return {
            _stream: {},
            deviceInfos: [],
            selectedVideoSource: {},
        }
    },
    template,
    mounted: function () {
        navigator.mediaDevices.enumerateDevices().then(this.gotDevices);

        this.start();
    },

    methods: {
        stopTacks: function () {
            if (this._stream) this._stream.getTracks().forEach(track => track.stop());
        },
        gotDevices: function (deviceInfos) {
            this.deviceInfos = deviceInfos.filter(info => {
                if (info.kind === 'videoinput') return true;
            });
        },
        gotStream: function (stream) {
            this.stopTacks();
            this._stream = stream;
            this.$refs.videoElement.srcObject = stream;
            return navigator.mediaDevices.enumerateDevices();
        },
        start: function () {
            this.stopTacks();
            let videoSource = this.selectedVideoSource.deviceId;
            let constraints = {video: {deviceId: videoSource ? {exact: videoSource} : undefined}};
            navigator.mediaDevices.getUserMedia(constraints).then(this.gotStream).then(this.gotDevices)
        },
        changeSource: function () {
            let newIndex = -1;

            this.deviceInfos.forEach((deviceInfo, i) => {
                if (deviceInfo.deviceId === this.selectedVideoSource.deviceId) {
                    newIndex = i + 1;
                }
            });

            if (newIndex > this.deviceInfos.length) newIndex = 0;
            this.selectedVideoSource = this.deviceInfos[newIndex];
        },
        sourceSelected: function () {
            this.start();
        },
    },

    beforeDestroy: function () {
        console.log('beforeDestroy');
        let videoElement = this.$refs.videoElement;
        videoElement.pause();
        videoElement.src = "";
        videoElement.load();
        this._stream.getTracks().forEach(track => track.stop());
    },
}
