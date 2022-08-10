<template>
    <div class="video-page">
        <div class="logo-box animate__animated animate__backInLeft">
            <img src="@/assets/img/videoPage/logo.png" alt="" srcset="">
        </div>   
        <div class="slogan-box animate__animated animate__backInRight">
            <img src="@/assets/img/schedulePage/slogan.png" alt="" srcset="">
        </div>
        <div class="meeting-arrangement-box">
            <div class="time-box animate__animated animate__zoomIn">
                <img src="@/assets/img/mapPage/time.png?v=2236" alt="" srcset="">
            </div>
            <div class="map-box animate__animated animate__zoomIn">
               <img src="@/assets/img/mapPage/map.png?v=2236" alt="" srcset="">
            </div>
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

        }
    },
    mounted(){

    },
    methods:{
        goBack(){
            this.$router.replace('/list');
        }
    }
}
</script>
<style scoped>
.video-page{
    width: 100%;
    height: 100%;
    background: #032569;
    position: relative;
}
.logo-box{
    width: 150px;
    margin-left: 45px;
    padding-top: 45px;
    box-sizing: border-box;
}
.slogan-box{
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;
    position: relative;
}
.video-box{
    width: 100%;
    height:0;
	padding-bottom:75%;
    margin-top: 7vh;
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
.meeting-arrangement-box{
    width: 91.2%;
    background: #fff;
    border-radius: 50px;
    margin: 0 auto;
    padding-top: 65px;
    padding-bottom: 144px;
}
.time-box{
    width: 77%;
    margin: 0 auto;
}

.map-box{
    width: 65.7%;
    margin: 0 auto;
    margin-top: 76px;
}
.back-box{
    width: 10vw;
    height: 10vw;
    position: fixed;
    bottom: 5vw;
    left: 5vw;
}
</style>