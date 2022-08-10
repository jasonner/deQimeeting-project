<template>
    <div class="list-page">
        <div class="list-page-box" v-show="!videoPlayShow">
            <div class="logo-box animate__animated animate__backInLeft">
                <img src="@/assets/img/listPage/logo.png" alt="" srcset="">
            </div>

            <div class="slogan-box animate__animated animate__backInDown">
                <img src="@/assets/img/listPage/slogan.png" alt="" srcset="">
                <!-- <div class="liuguang"></div> -->
            </div>

            <div class="list-box">
                <div class="list animate__animated animate__backInDown"  @click="goSchedulePagePage()">
                    <img src="@/assets/img/listPage/text-list1-new.png" alt="" srcset="">
                </div>
                <div class="list animate__animated animate__backInDown" @click="goVideoPage()">
                    <img src="@/assets/img/listPage/text-list2-new.png" alt="" srcset="">
                </div>
                <div class="list animate__animated animate__backInDown" @click="goMapPage()">
                    <img src="@/assets/img/listPage/text-list3-new.png" alt="" srcset="">   
                </div>
            </div>

            <div class="bottom-slogan">
                <div class="animate__animated animate__zoomIn nimate__delay-2s">
                    <img src="@/assets/img/listPage/bottom-slogan.png" alt="" srcset="">
                </div>
                <div class="dian-lsit1 animate__animated animate__bounceInLeft animate__delay-1s">
                    <img src="@/assets/img/listPage/dian.png" alt="" srcset="">
                </div>
                <div  class="dian-lsit2 animate__animated animate__bounceInLeft animate__delay-1s">
                    <img src="@/assets/img/listPage/dian.png" alt="" srcset="">
                </div>
                <div  class="dian-lsit3 animate__animated animate__bounceInLeft animate__delay-1s">
                    <img src="@/assets/img/listPage/dian.png" alt="" srcset="">
                </div>
            </div>  
        </div>
        
        <!-- 视频播放区 -->
        <div class="video-page" v-show="videoPlayShow">
            <div class="logo-box animate__animated animate__backInLeft">
                <img src="@/assets/img/videoPage/logo.png" alt="" srcset="">
            </div>   
            <div class="slogan-box animate__animated animate__zoomIn">
                <img src="@/assets/img/videoPage/slogan.png" class="slogan1" alt="" srcset="">
            </div>

            <div class="video-box animate__animated animate__jackInTheBox" @click="vidoePlayChange()">
                <video src="https://oss.sxyweb.com.cn/2022/0302deqi/video.mp4" id="video"
                height="100%"
                controls="controls" 
                controlsList="nodownload  noplaybackrate" :disablePictureInPicture ="true"
                style="object-fit: cover"
                webkit-playsinline
                x-webkit-airplay="true"
                playsinline="true"
                x5-video-player-type="h5"
                x5-video-orientation="h5"
                x5-video-player-fullscreen="true"
                preload="auto"
                :autoplay="autoplayFlag"
                width="100%"   poster="@/assets/img/videoPage/post-new.png?v=1447">
                your browser does not support the video tag</video>
            </div>

            <div class="city-box animate__animated animate__zoomInUp">
                <img src="@/assets/img/videoPage/city.png" alt="" srcset="">
            </div>
            <div class="back-box" @click="goBack()">
                <img src="@/assets/img/backBtn.png" alt="" srcset="">
            </div>
        </div>
        <!-- <div class="back-box" @click="goBack()">
            <img src="@/assets/img/backBtn.png" alt="" srcset="">
        </div> -->
    </div>
</template>

<script>
export default {
    name:'listPage',
    data(){
        return{
            videoPlayShow:false,
            autoplayFlag:false
        }
    },
    mounted(){
      
    },
    methods:{
        goVideoPage(){
            this.videoPlayShow = true;
            this.$emit("audioAnimationT");
            document.getElementById('video').play();
            //this.$router.replace('/videoPage');
        },
        goMapPage(){
            this.$router.replace('/mapPage');
        },
        goSchedulePagePage(){
            this.$router.replace('/schedulePage');
        },
        goBack(){
            this.videoPlayShow = false;
            this.autoplayFlag = false;
            this.$emit("audioAnimationF");
            document.getElementById('video').pause();
        }   
    }
}
</script>
<style scoped>
    .list-page{
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #fff;
    }
    .list-page .logo-box{
        width: 150px;
        padding-top:45px;
        margin-left: 45px;
        box-sizing: border-box;
    }
    .list-page .slogan-box{
        width: 61.2%;
        height: 13vh;
        margin: 0 auto;
        margin-top: 25px;
        position: relative;
    }
     .list-page .slogan-box img{
         position: absolute;
         left: 0;
         top:0;
     }
    .list-page .list-box{
        width: 80%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 24vw 24vw 24vw;
        margin-top: 9vh;
        z-index: 1;
    }
    .list-page .list-box .list:nth-of-type(1){
        margin-top: 19vw;
    }
     .list-page .list-box .list:nth-of-type(2) {
         margin-top: 6vw;
     }
    .list-page .list-box .list:nth-of-type(3){
        margin-top: 14vw;
    }
    .list-page .list-box .list:nth-of-type(2) img{
        width: 7vw;
    }
    .list-page .list-box .list img{
        width: 6vw;
    }
    .list-page .bottom-slogan{
        position: fixed;
        left: 0;
        bottom: -1vw;
        width: 100%;
        background: transparent;
    }
    .list-page .bottom-slogan .yuan{
        width: 85%;
        display: inline-block;
        margin: 0 auto;
        position: relative;
    }
    .list-page .bottom-slogan .yuan .slogan-text {
        position: absolute;
        left: 28vw;
        top: 30vw;
        width: 300px;
        display: block;
    }
    .list-page .bottom-slogan .huxian{
        width: 100%;
        display: inline-block;
        margin: 0 auto;
        position: relative;
    }
    .list-page .bottom-slogan .huxian img{
        position: absolute;
        top:-18vw;
        left: 0;
        z-index: -1;
    }
    .list-page .bottom-slogan img{
        z-index: 2;
    }
    .list-page .dian-lsit1,.dian-lsit2,.dian-lsit3{
        width: 4.3%;
        position: absolute;
    }
    .list-page .dian-lsit1{
        top: 3.5vw;
        left: 23vw;
    }
    .list-page .dian-lsit2{
        top: -2.5vw;
        left: 47vw;
    }
    .list-page .dian-lsit3{
        top: 2.5vw;
        left: 71vw;
    }
    .list-page .back-box{
        width: 10vw;
        height: 10vw;
        position: fixed;
        bottom: 5vw;
        left: 5vw;
    }
    .list-page .liuguang{
        content: "";
        position: absolute;
        left: -5px;
        right: -5px;
        top: -5px;
        bottom: -5px;
        background: linear-gradient(90deg,#fff,#f7f7d1,#fff,#fff);
        background-size: 400%;
        border-radius: 50px;
        filter: blur(20px);
        animation: sun 8s infinite;
        opacity: 0.3;
    }
    /* 设置流光 */
    @keyframes sun{
        0%{
            background-position: -100% 0;
        }
         50%{
            background-position: -300% 0;
        }
        100%{
            background-position: -400% 0;
        }
    }
</style>
<style scoped>
.video-page{
    width: 100%;
    height: 100%;
    background:url('../assets/img/videoPage/bg.png') center no-repeat;
    background-size: 100% 100%;
    position: relative;
}
.video-page .logo-box{
    width: 150px;
    margin-left: 45px;
    padding-top: 45px;
    box-sizing: border-box;
}
.video-page .slogan-box{
    width: 62%;
    height: 10vh;
    margin: 0 auto;
    margin-top: 20px;
    position: relative;
}
.video-page .video-box{
    width: 100%;
	height: 58vw;
    margin-top: 12vh;
    position: relative;
}
.video-page .video-box video{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
}
.video-page .city-box{
    width: 65%;
    position: absolute;
    bottom: 0;
    left: 17.5%;

}
.video-page .slogan1{
    position: absolute;
    left: 0;
     z-index: 2;
}
.video-page .start1{
    width: 100px;
    border-radius: 100%;
    position: absolute;
    top: 11vw;
    left: 30%;
    display: block;
    animation: warn 1.5s ease-out 0s infinite;
    
}
.video-page .start2 {
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
.video-page .back-box{
    width: 10vw;
    height: 10vw;
    position: fixed;
    bottom: 5vw;
    left: 5vw;
}
</style>