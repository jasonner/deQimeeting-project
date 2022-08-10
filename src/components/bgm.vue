<template>
  <div class="bjmusic">
    <audio
      preload="auto"
      loop
      id="audio"
      ref="bg"
      :src="MP3"
      muted
      autoplay
    ></audio>
    <div @click="changeOn" :class="isOff ? 'isOff' : 'isOn'">
      <div class="bgmbtn">
        <svg fill="#ce4829" stroke="#000000" stroke-width="0">
          <rect x="0" y="0" width="12" height="48" rx="4" ry="4"></rect>
        </svg>
        <svg fill="#ce4829" stroke="#000000" stroke-width="0">
          <rect x="0" y="0" width="12" height="48" rx="4" ry="4"></rect>
        </svg>
        <svg fill="#ce4829" stroke="#000000" stroke-width="0">
          <rect x="0" y="0" width="12" height="48" rx="4" ry="4"></rect>
        </svg>
        <svg fill="#ce4829" stroke="#000000" stroke-width="0">
          <rect x="0" y="0" width="12" height="48" rx="4" ry="4"></rect>
        </svg>
        <svg fill="#ce4829" stroke="#000000" stroke-width="0">
          <rect x="0" y="0" width="12" height="48" rx="4" ry="4"></rect>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/svgbtn.css";
import { Howl, Howler } from "howler";
// import wx from'weixin-js-sdk'
export default {
  data() {
    return {
      MP3: require("../assets/audio/audio.mp3"),
      isOff: false,
      zongOff: true,
      sound: "",
      type: 0,
      a: 1,
    };
  },
  methods: {
    changeOn() {
      this.isOff = !this.isOff;
      if (this.type == 1) {
        if (this.$refs.bg.paused) {
          this.$refs.bg.play();
          this.$refs.bg.muted=false
        } else {
          this.$refs.bg.pause();
          this.$refs.bg.muted=true
        }
      } else {
        if (this.a == 1) {
          this.pause();
          this.a = 0;
        } else {
          this.play();
          this.a = 1;
        }
      }
    },

    audioAnimationF() {
      console.log("播放");
      if (this.type == 1) {
        this.$refs.bg.play();
        this.$refs.bg.muted=false
      } else {
        this.play();
        this.a = 1;
      }
      this.isOff = false;
    },
    audioAnimationT() {
      console.log("停");

      if (this.type == 1) {
        this.$refs.bg.pause();
        this.$refs.bg.muted=true
      } else {
        this.pause();
        this.a = 0;
      }
      this.isOff = true;
    },
    newhandle() {
      this.sound = new Howl({
        src: [this.MP3],
        autoplay: true,
        loop: true,
        volume: 0.5,
      });
      console.log(this.sound);
    },
    play() {
      console.log(this.sound);
      this.sound.play();
    },
    pause() {
      console.log(this.sound);
      this.sound.pause();
    },
  },
  mounted() {
    let u = navigator.userAgent;
    if (u.indexOf("iPhone") > -1) {
      //苹果手机

      let dom = this.$refs.bg;
      dom.src = this.MP3;
      this.type = 1;
      var ahis = this;
      this.$refs.bg.muted = false;
      document.addEventListener("touchstart", this.audioAutoPlay, false);
      document.addEventListener(
        "WeixinJSBridgeReady",
        this.audioAutoPlay,
        false
      );
      wx.ready(function () {
        //    ahis.$refs.bg.play()
        document.getElementById("audio").play();
      });
      document.getElementById("audio").play();
      document.addEventListener(
        "WeixinJSBridgeReady",
        function () {
          document.getElementById("audio").play();
        },
        false
      );
    } else {
      //winphone手机
      this.type = 2;
      this.newhandle();
    }
    console.log(this.type)
  },
  created() {},
};
</script>

<style scoped>
.bjmusic {
  position: fixed;
  right: 8vw;
  bottom: 5vw;
  z-index: 199;
}
</style>