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
WeixinJSBridgeReady事件

document.addEventListener('WeixinJSBridgeReady', function() {

document.getElementById('audios').play()

})
}
