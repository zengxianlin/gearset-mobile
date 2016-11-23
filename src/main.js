import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI);

import App from './App'
import Home from './components/Home';
import Student from './components/Student';
import Success from './components/Success';

import List from './components/List';

import 'weui/dist/style/weui.min.css';
import 'weui/dist/example/example.css';
import '../static/style/css/index.css';


const FastClick = require('fastclick');
FastClick.attach(document.body);

Vue.use(VueRouter);
Vue.use(VueResource); 


Vue.config.debug = true;
/* eslint-disable no-new */ 

/**
* sync router loading status
*/
const router = new VueRouter({
  transitionOnLoad: false
});


// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由
router.map({//定义路由映射
	'/home': {
        component: Home
    },
    '/student': {
        component: Student
    },
    '/list': {
        component: List
    },
    '/success': {
        component: Success
    }
    
});


// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
//设置默认情况下打开的页面
router.beforeEach(function (transition) {
  if (/\/http/.test(transition.to.path)) {
    let url = transition.to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    if (/\/home\/component\/\w+/.test(transition.to.path)) {

      router.go({
        replace: true,
        path: transition.to.path.replace('/home', ''),
        append: false
      })
    } else {
      transition.next()
    }
  }

});



router.redirect({
  '/':'home'
});

router.start(App, '#app');