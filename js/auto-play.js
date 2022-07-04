try {

    var AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
    var context = new window.AudioContext();
    var source = null;
    var audioBuffer = null;

    function stopSound() {
      if (source) {
        source.stop(0);
      }
    }
    
    function playSound() {
      source = context.createBufferSource();
      source.buffer = audioBuffer;
      source.loop = true;
      source.connect(context.destination);
      source.start(0);
    }

    function initSound(arrayBuffer) {
      context.decodeAudioData(arrayBuffer, function (buffer) {
        audioBuffer = buffer;
        playSound();
      }, function (e) {
        console.log('Error decoding file', e);
      });
    }

    function loadAudioFile(url) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'arraybuffer';
      xhr.onload = function (e) {
      initSound(this.response);
    };
      xhr.send();
    }
} catch (e) {
  console.log('!Your browser does not support AudioContext');
<script src="http://res.wx.qq.com/open/js/jweixin-1.4.0.js"></script>
function audioAutoPlay(id) {
let audio = document.getElementById(id);
// 并不一定非要用ID获取，class值获取也可以
audio.play();
// 为了保险起见 这里页也手动调用一下
audio.loop = true;
// 如上 为了音乐能够循环播放
document.addEventListener("WeixinJSBridgeReady", function () {
audio.play();
audio.loop = true;
}, false);
document.addEventListener('YixinJSBridgeReady', function () {
// 暂时还不知道Yixin是什么东西...
audio.play();
audio.loop = true;
}, false);
}
audioAutoPlay(id);
}
