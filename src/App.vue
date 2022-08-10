<template>
  <div id="app">
    <v-nav ref="bgm"></v-nav>
    <router-view   @audioAnimationT="audioAnimationT" @audioAnimationF="audioAnimationF"></router-view>
  </div>
</template>
<script>
  // import wx from'weixin-js-sdk'
  import navs from '@/components/bgm'
  import weixinShare from './util/wxconfig'
  export default {
    name: 'App',
    data(){
      return{
        data: {
          title: '新琪点 遇维来',
          desc: '德琪医药希维奥®（塞利尼索片）上市会',
          imgUrl: 'https://oss.sxyweb.com.cn/2022/q/zuolyn0228/icon.jpg',
          link: 'https://api.lehuitech.com.cn/qr/qrred?k=724515KJ'
        },
      }
    },
    components:{
      'v-nav':navs
    },
    created(){
       weixinShare.init();
    },
    mounted(){
      // wx.ready(function () {
      //     var config = {
      //         link: that.data.link,
      //         imgUrl: that.data.imgUrl,
      //         title: that.data.title,
      //         desc: that.data.desc,
      //         success: function () { },
      //         cancel: function () {
      //             // 用户取消分享后执行的回调函数
      //         }
      //     };
      //     wx.onMenuShareTimeline(config);
      //     wx.onMenuShareAppMessage(config);
      // })
      //that.getKey();
    },
    methods:{
      getKey(){
          let that = this;
          let promise = {
            url:location.href.split('#')[0]
          }
          that.axios.get('WXAuthorization/jsapi',promise)
          .then(function (res) {
              console.log(res);
              if(res.status == 200 ){
                  that.initIMg(res.data);
              }else{
                  that.$message({
                  message: '服务异常请稍后重试！',
                  type: 'warning'
                  });
              }
          });
      },
      initIMg(result){
        console.log(result);
          wx.config({
              debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
              appId: result.appId,// 必填，公众号的唯一标识
              timestamp: result.timestamp,  // 必填，生成签名的时间戳
              nonceStr: result.nonceStr, // 必填，生成签名的随机串
              signature: result.signature,// 必填，签名
              jsApiList:  ['updateTimelineShareData', 'updateAppMessageShareData'] // 必填，需要使用的JS接口列表
          });

          
      },
      audioAnimationT() {
        this.$refs.bgm.audioAnimationT();
      },
      audioAnimationF() {
        this.$refs.bgm.audioAnimationF();
      },
    },
  }
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
}
#app {
  font-family: SourceHanSansCN, SourceHanSansCN-Normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #303030;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}

body,p,h1,h2,h3,h4,h5,h6,div,dd,dt,dl,form,kbd,table,ul,li,marquee,hr,blockquote,ol,pre,fieldset,legend,button,input,textarea,th,td{font-size:12px; margin:0; padding:0; font-family: SourceHanSansCN, SourceHanSansCN-Normal, Tahoma, Verdana,  Helvetica, sans-serif;}
address,cite,dfn,em,var{font-style:normal;}
button,input,select,textarea{font-size:100%; cursor:pointer}
input{ cursor:pointer}
table{border-collapse:collapse;border-spacing:0;}
small{font-size:12px;}
ul,ol{list-style:none;}
img{border:0;}
ul{list-style:none;}
.clear{ clear:both;}
a{text-decoration: none; color: #666666; }
a:hover{ color:#000; text-decoration:none}
input[type="submit"],input[type="reset"],input[type="button"],input[type="text"], button { -webkit-appearance: none;border-radius: 0; } 
input,textarea,select,a:focus {
    outline: none;
}
.clearfix:after { visibility: hidden; display: block; font-size: 0; content: " "; clear: both; height: 0; }
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
  -ms-overflow-style: none; /* IE 10+ */
  scrollbar-width: none; /* Firefox */  
}
img{
  width: 100%;
}
</style>
