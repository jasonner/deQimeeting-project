<template>
    <div class="video-page">
        <div class="logo-box animate__animated animate__backInLeft">
            <img src="@/assets/img/videoPage/logo.png" alt="" srcset="">
        </div>   
        <div class="slogan-box animate__animated animate__zoomIn">
            <img src="@/assets/img/videoPage/slogan.png" class="slogan1" alt="" srcset="">
        </div>

        <div class="video-box animate__animated animate__jackInTheBox" @click="vidoePlayChange()">
            <img src="@/assets/img/videoPage/post.png?v=1447" alt="" srcset="" v-show="!videoPlayShow">
            <video src="https://oss.sxyweb.com.cn/2022/0302deqi/video.mp4" id="video"  v-show="videoPlayShow"
            height="100%"
            controls="controls"  controlsList="nodownload  noplaybackrate" :disablePictureInPicture ="true"
            style="object-fit: cover"
            webkit-playsinline
            x-webkit-airplay="true"
            playsinline="true"
            x5-video-player-type="h5"
            x5-video-orientation="h5"
            x5-video-player-fullscreen="true"
            preload="auto"
            :autoplay="autoplayFlag"
            width="100%"  poster="@/assets/img/videoPage/post-new.png?v=1447">
            your browser does not support the video tag</video>
        </div>

        <div class="city-box animate__animated animate__zoomInUp">
            <img src="@/assets/img/videoPage/city.png" alt="" srcset="">
        </div>
        <div class="back-box" @click="goBack()">
            <img src="@/assets/img/backBtn.png" alt="" srcset="">
        </div>
    </div>
</template>
<script>
export default {
    name:'',
    data(){
        return{
            videoPlayShow:true,
            autoplayFlag:true
        }
    },
    mounted(){
        var elevideo = document.getElementById("video");
        let that = this;
        that.$emit("audioAnimationT");
        elevideo.addEventListener('ended', function () { //结束
            console.log("播放结束");
            that.videoPlayShow= false;
            that.$emit("audioAnimationF");
        }, false);
    },
    methods:{
        goBack(){
            this.videoPlayShow= false;
            this.$emit("audioAnimationF");
            this.$router.replace('/list');
        },
        vidoePlayChange(){
            if(!this.videoPlayShow){
                console.log(111)
                this.videoPlayShow = true;
                document.getElementById('video').play();
                this.$emit("audioAnimationT");
            }
        }
    }
}
</script>
<style scoped>
.video-page{
    width: 100%;
    height: 100%;
    background:url('../assets/img/videoPage/bg.png') center no-repeat;
    background-size: 100% 100%;
    position: relative;
}
.logo-box{
    width: 150px;
    margin-left: 45px;
    padding-top: 45px;
    box-sizing: border-box;
}
.slogan-box{
    width: 62%;
    height: 10vh;
    margin: 0 auto;
    margin-top: 20px;
    position: relative;
}
.video-box{
    width: 100%;
	height: 58vw;
    margin-top: 12vh;
    position: relative;
}
.video-box video{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
}
.city-box{
    width: 65%;
    position: absolute;
    bottom: 0;
    left: 17.5%;

}
.slogan1{
    position: absolute;
    left: 0;
     z-index: 2;
}
.start1{
    width: 100px;
    border-radius: 100%;
    position: absolute;
    top: 11vw;
    left: 30%;
    display: block;
    animation: warn 1.5s ease-out 0s infinite;
    
}
.start2 {
    width: 140px;
    height: 140px;
    position: absolute;
    top: 20vw;
    right: 3vw;
    display: block;
    z-index: 1;
    background: radial-gradient(rgba(255, 225, 255, .05) 10%, rgba(255, 225, 255, .05) 30%, rgba(0, 0, 0, 0) 60%);
}
@keyframes warn {
    0% {
      transform: scale(0.2);
      opacity: 1;
    }
 
    30% {
      opacity: 1;
    }
 
    100% {
      transform: scale(2);
      opacity: 0;
    }
}
.back-box{
    width: 10vw;
    height: 10vw;
    position: fixed;
    bottom: 5vw;
    left: 5vw;
}
</style>