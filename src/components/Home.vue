<template>
	<div class="container">
	<div class="page">
		<div class="page-hd">
			<mt-swipe :auto="4000" :show-indicators="false">
			  <mt-swipe-item>
			  	<a href="javascript:"><img class="img-response" src="/static/img/z1.jpg"></a>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<a href="javascript:"><img class="img-response" src="/static/img/z1.jpg"></a>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<a href="javascript:"><img class="img-response" src="/static/img/z1.jpg"></a>
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="page-bd">


		<ul class="pet_circle_nav_list">
	        <li><a href="" class="iconfont pet_nav_xinxianshi ">&#xe61e;</a><span>新鲜事</span></li>
	        <li><a href="" class="iconfont pet_nav_zhangzhishi ">&#xe607;</a><span>趣闻</span></li>
	        <li><a href="" class="iconfont pet_nav_kantuya ">&#xe62c;</a><span>阅读</span></li>
	        <li><a href="" class="iconfont pet_nav_mengzhuanti ">&#xe622;</a><span>专题</span></li>
	        
    	</ul>

	    <!-- -->
	    <div class="weui-panel weui-panel_access">
            <div class="weui-panel__hd">图文组合列表</div>
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
                <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd">
                        <img class="weui-media-box__thumb" src="/static/img/qq5.png" alt="">
                    </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">标题二</h4>
                        <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                    </div>
                </a>
            </div>
            <div class="weui-panel__ft">
                <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
                    <div class="weui-cell__bd">查看更多</div>
                    <span class="weui-cell__ft"></span>
                </a>    
            </div>
        </div>
	    <!-- -->

	    <div class="weui-panel">
            <div class="weui-panel__hd">文字列表附来源</div>
            <div class="weui-panel__bd">
                <div class="weui-media-box weui-media-box_text">
                    <h4 class="weui-media-box__title">标题一</h4>
                    <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                    <ul class="weui-media-box__info">
                        <li class="weui-media-box__info__meta">文字来源</li>
                        <li class="weui-media-box__info__meta">时间</li>
                        <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">其它信息</li>
                    </ul>
                </div>
            </div>
            <div class="weui-panel__ft">
                <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
                    <div class="weui-cell__bd">查看更多</div>
                    <span class="weui-cell__ft"></span>
                </a>    
            </div>
        </div>

	    <!-- -->

		
		</div>
		

		<div class="page__ft">
	        <div class="weui-footer">  
	            <p class="weui-footer__text">Copyright(c)2015 shufangjian Rights Reserved</p>
	        </div>
	    </div>

	</div>
	</div>

</template>

<script>
</script>

<style scoped>
	.img-response{
		max-width:100%;
		line-height:100px;
	}

	.page-hd .swipe{
	    height: 165px;
	    color: #fff;
	    font-size: 30px;
	    text-align: center;
	    margin-bottom: 20px;
	}
	 
	.page-swipe .swipe-item {
		
	    line-height: 165px;
	}
	/**/
	.pet_circle_nav {padding:25px 10px 5px;max-width: 100%;  }
	.pet_circle_nav_list{ max-width: 100%; overflow: hidden;padding:.5em}
	.pet_circle_nav_list li { width: 25%; float: left; margin-bottom: 15px;}
	.pet_circle_nav_list a {border-radius: 50%; width: 55px; height: 55px; display: block; margin: 0 auto; color: #fff; text-align: center; line-height: 55px; font-size: 35px;-webkit-transition: all 0.2s ease;transition: all 0.2s ease;}
	.pet_circle_nav_list a:hover { -webkit-box-shadow: inset 0 0 40px rgba(0,0,0,.3); box-shadow: inset 0 0 40px rgba(0,0,0,.3);-webkit-transition: all 0.2s ease;transition: all 0.2s ease; }
	.pet_circle_nav_list span { display: block; width: 100%; text-align: center; padding-top: 5px; font-size: 14px;}
	.pet_nav_xinxianshi { background: #fe9700; }
	.pet_nav_zhangzhishi {background: #f26765; }
	.pet_nav_kantuya {background: #6f68df; }
	.pet_nav_mengzhuanti {background: #7f2d00;}
	.pet_nav_meirong {background: #fd7a49;}
	.pet_nav_gengduo { background: #7fd02b;}
	.pet_nav_yiyuan {background: #19cf8a; }
	.pet_nav_dianpu {background: #4493f7;}
	.pet_nav_bk {background: #6f67e0; }
	.pet_nav_wd {background: #fd7949; }
	.pet_nav_sy {background: #ff9702; }
	.pet_nav_xx {background: #00c2ea; }
	.pet_nav_sz {background: #3296ee; }
	.pet_nav_ms {background: #7fd02b; }
	.pet_nav_qs {background: #19ce8b; }
	.pet_nav_qt {background: #fe618e; }

	img.weui-media-box__thumb{
		border-radius:30px
	}
	.weui-panel__hd {
	    padding: 14px 15px 10px;
	    color: #fff;
	    font-size: 14px;
	    font-weight: bold;
	    position: relative;
	    background-color: #f26765;
	}
</style>