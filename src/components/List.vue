<template>
	<div class="container">
		<div class="page">
			<div class="page_bd">
			    
			            <div class="page-loadmore-wrapper" v-el:wrapper :style="{ height: wrapperHeight + 'px' }">
							<mt-loadmore :bottom-method="loadBottom" :bottom-status.sync="bottomStatus" 
							      :bottom-all-loaded="allLoaded" :bottom-distance="bottomDistance" :auto-fill="false">
							    <!-- LIST BEGIN -->  
							    <div class="weui-panel weui-panel_access">
			        			<div class="weui-panel__bd">
					            <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
					                <div class="weui-media-box__hd">
					                    <img class="weui-media-box__thumb" src="/static/img/qq5.png" alt="">
					                </div>
					                <div class="weui-media-box__bd">
					                    <h4 class="weui-media-box__title">标题一</h4>
					                    <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
					                </div>
					            </a>
					            </div>  
		        				</div>
		        				<!-- LIST END --> 
					        </mt-loadmore>
						</div>    
			        
			</div>

			<div class="page_ft">
				<div class="weui-footer weui-footer_fixed-bottom">
					 <a href="javascript:" v-on:click="doOpen" class="weui-btn weui-btn_primary">筛选</a> 
					 <!--
					 <div class="weui-footer">
		                <p class="weui-footer__links">
		                    <a href="http://weibo.com/u/2644120635/home?wvr=5" class="weui-footer__link">返回首页</a>
		                </p>   
		           	 </div>
		           	 -->
	        	</div>  
	        </div>

		</div>

		<div class="page msg_success js_show" v-bind:class="{ 'class-a': isA, 'class-b': isB }">
			<div class="weui-cells__title">筛选条件</div>
		    <div class="weui-flex">
				<div class="weui-flex__item"><div class="placeholder active">weui</div></div>
	            <div class="weui-flex__item"><div class="placeholder">weui</div></div>
	            <div class="weui-flex__item"><div class="placeholder">weui</div></div>
	            <div class="weui-flex__item"><div class="placeholder">weui</div></div>

	        </div>

	        <div class="weui-flex">
				<div class="weui-flex__item"><div class="placeholder">weui</div></div>
	            <div class="weui-flex__item"><div class="placeholder">weui</div></div>
	            <div class="weui-flex__item"> </div>
	            <div class="weui-flex__item"> </div>
	            
	        </div>

	        <div class="weui-cells__title">筛选条件</div>
		    <div class="weui-flex">
				<div class="weui-flex__item"><div class="placeholder">weui</div></div>
	            <div class="weui-flex__item"><div class="placeholder">weui</div></div>
	            <div class="weui-flex__item"><div class="placeholder">weui</div></div>
	            <div class="weui-flex__item"><div class="placeholder">weui</div></div>
	        </div>

	        <div class="page_ft">
				<div class="weui-footer weui-footer_fixed-bottom">
					<div class="weui-flex">
						<div class="weui-flex__item"> 
							<a href="javascript:" v-on:click="" class="weui-btn weui-btn_primary">确定</a> 
						</div>
			            <div class="weui-flex__item"> 
							<a href="javascript:" class="weui-btn js-reset">重置</a> 
						</div>
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
	        popupVisible:false,
	        isA:true,
	        isB:false,

	        bottomDistance:60,
	        
	        allLoaded: false,
	        bottomStatus: '',
	        wrapperHeight: 0
	         
        }
    },
    ready(){
    	this.wrapperHeight = document.documentElement.clientHeight - this.$els.wrapper.getBoundingClientRect().bottom;
    },
    methods: {
        doOpen(){
         this.isA = false;
         this.isB = true;
        }

    }
}

</script>


<style scoped>
	.weui-btn{
		margin:.5em;
	}

	a.weui-btn_primary,a.weui-btn_warn{
		color:#fff;

	}
	a.weui-footer__link{
		padding-top:1em;
		padding-bottom:1em;
	}
	.weui-footer_fixed-bottom {
	    position: fixed;
	    bottom: .2em;
	    left: 0;
	    right: 0;
	    background-color:#fff;
	}
	.weui-footer {
	    color: #999999;
	    font-size: 14px;
	    text-align: center;
	}
	.weui-footer_fixed-bottom{
		padding:.2em;
	}
	.class-a{
        display:none;
        opacity: 0;

    }
    .class-b{
        display:block;
        opacity: 1;
    }
    .placeholder {
	    background-color: #ebebeb;
	    height: 2.3em;
	    line-height: 2.3em;
	    text-align: center;
	    margin: 5px;
	    color: #cfcfcf;
	    border-radius:.2em;
	}
	.active{
		background-color: #1aad19;
    	color: #fff;
	}
	.js-reset{
		background-color: #eeeeee;
	    color: #333;
	}
	   
</style>