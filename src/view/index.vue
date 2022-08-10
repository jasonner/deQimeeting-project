<template>
    <div class="indexPage">
      <audio src="@/assets/audio/audio.mp3"  ref="audio"
        preload="auto" muted="muted" autoplay="autoplay" loop="loop" style="display:hide">
      </audio>
      <div class="Bamboo animate__animated animate__backInLeft"  v-show="!videoPlayShow" >
          <img src="@/assets/img/index/logo.png" alt="" srcset="">
      </div>
  
      <div class="slogan-box" v-show="!videoPlayShow">
        <div class="slogan-content animate__animated animate__heartBeat animate__delay-1s" @click="vidoePlayChange()"> 
            <img src="@/assets/img/index/slogan.png" alt="" srcset="">
        </div>
        <div class="yaohe-box animate__animated animate__zoomIn"  @click="vidoePlayChange()">
            <img src="@/assets/img/index/yaohe.png?v=0308" alt="" srcset="">
        </div>
        <div class="slogan-point" @click="vidoePlayChange()" >
            <img src="@/assets/img/index/point.png" alt="" srcset="">
        </div>
        <div class="slogan-text">
            <span>新</span><span>琪</span><span>点</span> <span>遇</span><span>维</span><span>来</span><span>... ...</span>
        </div>
      </div>
      <div class="video-box" v-show="videoPlayShow">
        <span class="videoGo" @click="geListPage()">跳过</span>
        <video height="100%" id="video"
            style="object-fit: cover"
            webkit-playsinline
            x-webkit-airplay="true"
            playsinline="true"
            x5-video-player-type="h5"
            x5-video-orientation="h5"
            x5-video-player-fullscreen="true"
            preload="auto"
            width="100%" 
            src="https://oss.sxyweb.com.cn/2022/0302deqi/0307_1.mp4"></video>
      </div>
    </div>
</template>
<script>
export default {
  name: 'App',
 data() {
    return {
      videoPlayShow:false,
      videoPlay:false
    };
  },
  mounted(){
    var elevideo = document.getElementById("video");
    let that = this;
    elevideo.addEventListener('ended', function () { //结束
      console.log("播放结束");
      that.$emit("audioAnimationF");
      that.$router.replace('/list');
    }, false);
  },
  methods:{
    vidoePlayChange(){
      this.$emit("audioAnimationT");
      this.videoPlayShow = true;
      this.videoPlay = true;
      document.getElementById('video').play();
    },
    
    // 给目标添加事件，处理兼容
    addHandler (element, type, handler) {
      if (element.addEventListener) {
        element.addEventListener(type, handler, false)
      } else if (element.attachEvent) {
        element.attachEvent('on' + type, handler)
      } else {
        element['on' + type] = handler
      }
    },

    // 具体的滑动处理
    //（此处只需要处理上滑事件，所以处理较简单，还可以进行封装，处理各种滑动事件）
    handleTouchEvent (event) {
      switch (event.type) {
        case 'touchstart':
          this.startX = event.touches[0].pageX
          this.startY = event.touches[0].pageY
          break
        case 'touchend':
          var spanX = event.changedTouches[0].pageX - this.startX
          var spanY = event.changedTouches[0].pageY - this.startY
          // console.log('spanY', spanY)
          if (spanY < -30) { // 向上
            if (this.userInfo && this.userInfo.firstJoin) {
              this.$router.replace('/authen')
            } else {
              this.$router.replace('/home')
            }
          }
          if (Math.abs(spanX) > Math.abs(spanY)) {
            // 认定为水平方向滑动
          } else {
            // 认定为垂直方向滑动
          }
          break
        case 'touchmove':
          // 阻止默认行为
          // event.preventDefault()
          break
      }
    },

    geListPage(){
      this.$emit("audioAnimationF");
      this.$router.replace('/list');
    }
  }
};
</script>
<style scoped>
  .indexPage{
      position: relative;
      height: 100%;
      width: 100%;
      background: #02296f;
      background-size: 100% 100%;
  }
  .indexPage .Bamboo{
    width: 150px;
    padding-top: 45px;
    margin-left: 45px;
    box-sizing: border-box;
  }

  .slogan-box{
    width: 100%;
    position: relative;
  }
  .slogan-content{
    width: 50%;
    margin: 0 auto;
    margin-top: 48%;
    position: relative;
  }
  .slogan-point{
    width: 60px;
    margin: 0 auto;
    box-sizing: border-box;
    position: absolute;
    right: 30vw;
    top: 49vw;
    animation: fingerHandle 3s ease infinite both;
    animation-delay: 0s;
    opacity: 0;
  }
  .slogan-text{
    width: 50%;
    margin: 0 auto;
    text-align: center;
    margin-top: 70px;
    color: #fff;
  }
  .slogan-text span{
    color: #fff;
    font-size: 35px;
    margin: 0 3.5px;
    animation: leftRight 1s forwards;
  }
  .slogan-text span:nth-of-type(2){
    font-size: 50px;
    font-weight: 700;
  }
  .slogan-text span:nth-of-type(5){
    font-size: 50px;
    font-weight: 700;
  }
  .video-box{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
@keyframes fingerHandle {
      0% {
          transform: none;
          opacity: 0;
      }
      70% {
          transform: scale3d(1.5, 1.5, 1.5);
          opacity: 1;
      }
      100% {
        transform: none;
        opacity: 1;
      }
  }
@keyframes leftRight {
  40% {
    transform: translate(30px, 0) scale(.7);
    opacity: 1;
    color: #000;
  }
  60% {
    color: #fff;
  }
  80% {
    transform: translate(0) scale(2);
    opacity: 0;
  }
  100% {
    transform: translate(0) scale(1);
    opacity: 1;
  }
}
.videoGo{
  color: #fff;
  font-size: 30px;
  background: #022569;
  position: fixed;
  left: 5vw;
  bottom: 5vw;
  width: 10vw;
  height: 10vw;
  line-height: 10vw;
  border-radius: 100%;
  z-index: 100;
}
.yaohe-box{
  width: 40%;
  margin: 0 auto;
  margin-top: 3vh;
}
</style>