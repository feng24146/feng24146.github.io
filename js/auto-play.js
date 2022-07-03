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
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
        function autoPlayVideo(){
            wx.config({
                debug:false,
                appId:"",
                timestamp:1,
                nonceStr:"",
                signature:"",
                jsApiList:[]
            });
            wx.ready(function(){
                var autoplayVideo=document.getElementById("audio");
                autoplayVideo.play()
   })
   };
        autoPlayVideo();
</script>

<audio autoplay="autopaly" loop="loop" id="audios">
    <source src="music/bg.mp3" type="audio/mp3" />
</audio>
 
<script>
// 这里使用了微信自带的WeixinJSBridgeReady事件
document.addEventListener('WeixinJSBridgeReady', function() {
    document.getElementById('audios').play()
})
</script>
}
