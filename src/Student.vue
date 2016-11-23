<template>
  <div class="container" id="app">

    <div id="loadingToast" v-bind:class="{ 'class-a': isA, 'class-b': isB }">
        <div class="weui-mask_transparent"></div>
        <div class="weui-toast">
            <i class="weui-loading weui-icon_toast"></i>
            <p class="weui-toast__content">发布中</p>
        </div>
    </div>

    <div class="page js-show">


      <div class="page_bd">

        

        <div class="weui-cells">
           <div class="weui-cell">
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="姓名">
                </div>
            </div>
        </div>

        <div class="weui-cells">
           <div class="weui-cell">
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="手机">
                </div>
            </div>
        </div>

        <div class="weui-cells">
           <div class="weui-cell">
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="所在学校">
                </div>
            </div>
        </div>

        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <textarea class="weui-textarea" placeholder="擅长科目" rows="3"></textarea>
                    
                </div>
            </div>
        </div>


        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <textarea class="weui-textarea" placeholder="自我介绍" rows="3"></textarea>
                    
                </div>
            </div>
        </div>

        <div class="weui-btn-area">
            <a class="weui-btn weui-btn_primary" href="javascript:" v-on:click="doSubmit">立即发布</a>
        </div>

      </div>


      <div class="page__ft">
        <div class="weui-msg__extra-area">
            <div class="weui-footer">
                <p class="weui-footer__links">
                    <a href="javascript:void(0);" class="weui-footer__link">返回首页</a>
                </p>
                <p class="weui-footer__text">Copyright © 2015-2016 weui.io</p>
            </div>
        </div>
      </div>

      

    </div> 
  </div>
</template>

<script>
export default {
    data() {
        return {
         isA:true,
         isB:false
        }
    },
    methods: {
        doSubmit(){
            let that = this;
            this.isA = false ;
            this.isB = true ;
            setTimeout(function () {
                that.isA = true ;
                that.isB = false ;      
            }, 2000);

        }

    }
}
</script>

<style scoped>
 .weui-cells__title{
  color:#333;
  font-size:1.2em;
  font-weight:bold;

 }
 .container{
  margin:.2em
 }
.weui_msg .weui_extra_area{
    
    font-size: 1em;
    color: #888;
}
.weui_extra_area {
    position: fixed;
    left: 0;
    bottom: 1.4em;
    width: 100%;
    text-align: center;
}

.class-a{
    display:none;
    opacity: 0;

}
.class-b{
    display:block;
    opacity: 1;
}

</style>
