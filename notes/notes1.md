### 工作笔记

###  node
```ruby
==npm i -g n==
```
###  git
```ruby
ssh-keygen -t rsa -C "haoyulong@haotang365.com.cn"
~/.SSH   PUB
SETTINGS -> SSH KEY   ADD
```
### 测试：
```ruby
ssh root@192.168.0.252 -p 21206
1qaz2wsxCd
```

### demo:
```ruby
ssh root@123.57.27.156 -p 21206
123QWEASDzxc

ssh root@123.57.47.94 -p 21206
12M4K9HGSB234a

cd ../home/jitai/static/content/html5/

[宠物家](https://api.cwjia.cn/static/content/)
```


### mis
```ruby
 1. [mis后台demo248](http://192.168.0.248/mis/account/login)
 2. [mis后台demo247](http://192.168.0.247/mis/account/login)

账号 admin
密码 haotangkj123456

### 后台服务器账号密码
ssh root@192.168.0.247
1qaz2wsxCde#$
cd ../home/work/app

ssh root@192.168.0.248
1qaz2wsxCde#$
cd ../home/work/app
```
### fis编译本地代码到服务器
```ruby
fis3 release qa -w -r home

fis3 release qa -r home 只启动一次
配置文件
D:\work\pet_web\home\fis-conf.js
```
#### npm
```ruby
==--registry=https://registry.npm.taobao.org==
```
### git 命令
```ruby
1. git clone 检出
2. git pull  拉取代码
3. git status  版本状态
4. git reset --hard 回退版本
5. git reset --hard origin/[]  
6. git branch 查看本地版本分支
7. git branch -r 查看远程分支
8. git branch [name] 创建本地分支
9. git checkout [name] 切换到某个人分支
10. git checkout -b[name]  创建分支并clone当前本地分支
11. git checkout -b name origin/name 创建分支并clone origin/name
12. git merge[name] 将名称为[name]的分支与当前分支合并
13. git branch -d[name]  删除分支
14. git pull origin + 分支名  远程分支
15. git log 查看历史版本
16. git push 推送远程仓库
17. git add .  本地提交
18. git commit -m'miaoshu' 描述
19. git stash 缓存本地修改
20. git stash list 查看已缓存的列表
21. git stash pop 还原列表的最后一条
22. git pull origin fenzhi  更新
23. git push origin fenzhi  提交
24. git fetch 刷新缓存
```
### git提交
```ruby
git本地修改编辑之后，先==add==提交，再==commit==描述提交，然后从远程==pull==代码，之后==push==提交至远程代码仓库。
```



### sublime中设置Chrome浏览器快捷键
```ruby
[chorme { "keys": ["alt+f12"], "command": "side_bar_files_open_with", "args": { "paths": [], "application": "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", "extensions": ".*" } } ]
```


### vim或者 vi 编辑器 
```ruby
* vi path 打开文件
* esc 推出当前模式
* i 进入编辑模式 
* : 命令模式 q 退出 wq 保存退出 w 保存不退出
* u 撤销
```

### 警告 ： 变量名前后端要统一

### 新建页面
```ruby
1. 复制同类型tpl，css，js文件，然后命名一样全小写，
2. 检查路径和文件名要一至
3. 建立对应页面PHP接口
4. 配置页面 http://192.168.0.248/mis/manage/addpage 一级菜单 新建二级菜单就不选二级菜单  填写页面名称  和URL地址注意路径对应
5. 配置页面显示 http://192.168.0.248/mis/manage/roleusedpage 超管账号 全选 保存
```

### 自动生成新页面
```ruby
1. 在config下新建同类型文件，然后对照文档修改配置  （注意 global.name首字母大写 path目录 pagelimit是否分页）
2. 生成js,tpl文件用tplbase
3. interface.url 用Java接口  不要/pet-manage头部
```




#### 代码格式要对齐 不能随意空行 比如分模块时可以空
### 已完成

### 查错
```ruby
1. 看控制台是否有报错信息；
2. 查看请求接口信息
3. 打印数据信息
```
### 新建vue项目
```ruby
1. 输入命令 vue init webpack [项目名字]
2. ? Project name myvue  文件名
```
### 服务器退出命令

#### ==exit==


### 启动从git上clone的vue项目
```ruby
1. npm install 或者 npm yarn
2. npm run dev
```   
##### 报错
```ruby
npm WARN deprecated coffee-script@1.12.7: CoffeeScript on NPM has moved to "coffeescript" (no hyphen)
依赖包过时不影响
```   

### PHP文件使用git时
```ruby
1. git status
2. git add.
3. git commit -m []
4. git push 
5. 登录服务器拉取代码
```
### git合并到主分支上
```ruby
1. 切换到主分支master
2. git merge [name] 合并到主分支
3. git push 提交
4. php 登录服务器
5. 拉取代码
6. exit
7. 前端上线时修改fis-conf
8. qa 切换到线上地址
9. 执行fis3 release qa -w -r home
10. 编译后fis-conf改回
11. 进后台管理页面配置页面接口和权限
12. git切回到开发分支
```

### vue引入时路径要写对

### 设置淘宝镜像
```ruby
npm config set registry http://registry.npm.taobao.org/
```
### 原生镜像
```ruby
npm config set registry https://registry.npmjs.org/
```

### byvue新建页面(参考201809/bargain)

1. 创建新的文件夹并命名(日期/页面名)
2. 复制原有的文件（删除不用的）
3. （HTML中需要'/201809/bargainshare.js'改成对应的的目录 或者去掉）
``` js
var timestamp = new Date().getTime().toString()
        timestamp = timestamp.substr(0, timestamp.length - 5)
        document.write('<script src="../../../static/config/index.js?t='+timestamp+'"><\/script>' +
        '<script src="../../../static/config/201809/bargainshare.js?t='+timestamp+'"><\/script>')
```
IOS客户端里的网页分享需要这四个meta 标签（通知IOS分享的信息）
```html
     <meta name="sharetitle" content="" id="js-p-share-tit">
    <meta name="description" content="" id="js-p-share-description">
    <meta name="shareimg" content="" id="js-p-share-img">
    <meta name="shareurl" content="" id="js-p-share-url">
```
入口js文件
```js
//引入所有依赖
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
//按需加载 Toast 组件
import { Toast } from 'mint-ui'
//引入首页组件
import index from './index.vue'
//使用rem布局 引入rem.js
import '@/utils/rem'
//设置icon
import '@/utils/favicon'

//vue 第三方组件的一般使用方式 注册
Vue.use(VueLazyload)
//把第三方组件挂在window上方便使用
window.Toast = Toast

//初始化
new Vue({
//根节点 首页组件
    components: { index },
    //render函数固定写法 省略转化过程 减少VUE依赖的体积
    render: h => h(index)
}).$mount('#app') //挂载到真实dom上 会替换真实节点



import Vue from 'vue'
//引入路由配置
import router from './router.js'
//一如vuex配置 （组件多且公共数据多需要响应式）
import store from './store.js'
import VueLazyload from 'vue-lazyload'
import { Toast, Popup } from 'mint-ui'
//引入首页组件
import App from './App.vue'
import '@/utils/rem'
import '@/utils/favicon'
//引入swiper4.x组件 js 和 css
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload)
window.Toast = Toast
//第三方组件的另外一种挂载方式（注册）
Vue.component(Popup.name, Popup)

new Vue({
//把路由和vuex配置传入组件实例中
    router, // router: router,
    store,
    components: { App }, // App: App
    render: h => h(App)
}).$mount('#app')
```
router.js 配合<router-view/>组件，作为路由的容器
```js
import Vue from 'vue'
//引入vue-router
import Router from 'vue-router'
//引入该页面标题公共方法 因为涉及到兼容性
import changeTitle from '@/utils/hooks/changetitle'
//引入需要路由跳转的页面组件
import petlist from './pages/petlist'
import list from './pages/list'
import detail from './pages/detail'
import tool from './pages/tool'

Vue.use(Router)

//实例化一份路由配置
const router = new Router({
//配置每个路由对应显示的页面组件
    routes: [
    // '/' 是根路由一般显示首页
        {
            path: '/',
            // 重定向到这个路由
            redirect: '/list'
        },
        {
            path: '/list',
            //访问http://static.ichongwujia.com/static/content/html5/byvue/dist/201809/bargain/index.html?activityId=45&system=android_5.0.0&imei=863254031166944&cellPhone=17600369920&phoneModel=Xiaomi%20MI%206&phoneSystemVersion=Android%208.0.0&time=1537156130801#/list  会显示component设置的组件
            name: 'list',
            component: list,
            //定义一组数据 路由跳转时会用到
            meta: {title: '活动列表'}
        },
        {
            path: '/petlist',
            name: 'petlist',
            component: petlist,
            meta: {title: '宠物列表'}
        },
        {
        //路由传参的一种方式  &activityId=9#/detail/106
            path: '/detail/:id',
            name: 'detail',
            component: detail,
            meta: {title: '服务详情'},
            //设置props为true 页面中的props可以接收到这个参数 为了解耦
            props: true
        },
        {
            path: '/tool',
            name: 'tool',
            component: tool,
            meta: {title: '我的道具'}
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        // 返回上一个组件离开时的位置 不需要删掉
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

//路由生命周期函数 每次路由改变后触发
router.afterEach(route => {
    // 修改页面标题 可以取到 meta中预设的 title
    if (route.meta.title) {
        changeTitle(route.meta.title)
    }
})
//导出这个实例
export default router
```

路由跳转代码
```js
// 模板中省略this
@click="$router.push('petlist')"
<!--跳到新页面-->
goPetList () {
    this.$router.push('petlist')
}
//调回上一页
this.$router.go(-1)

```

### props应用
```ruby
export default {
    name: "aaaaa",
    props: ["xxxxx"]
    
}
```

使用组件时 
通过组件传进去@xxxxx="getCode"
方法：
```html
<login ref="login" :placeholders="placeholders" @confirm="submit" @xxxxx="getCode">
        <div slot="confirmBtn">立即登录</div>
    </login>
```
广播$emit（可以写在行内式，也可写成方法直接调用）
```js
 // 点击提交按钮
        confirmclicked () {
            if (this.checkoutNum()) {
            //广播 解决解耦问题
                this.$emit('confirm', {cellPhone: this.cellPhone,imgcode: this.imgcode,code: this.code})
            }
        },
```
#### 更新图形验证码
```ruby
 updateCode () {
            // 刷新图形码
            this.mobileKey = `${new Date().getTime()}${parseInt((Math.random() * 9 + 1) * 100000)}`
            this.imgcodeUrl = generateImageCode(this.mobileKey)
        },
```
在vue中 父级组件引用子组件方法

```ruby
this.$refs.login.countdown()
引入子组件时加上 ref="login"  
countdown 子组件方法名
```


### &cwj_bannershare=1 客户端分享按钮显示

### 微信分享
```ruby
var getWXConfig = "http://demo.cwjia.cn/pet-api/wx/sign";
var dqUrl = location.href;
//二次分享
function sharePage(title,desc,imgUrl,link){
    var linkUrl = link != undefined ? link : dqUrl;//没有设置分享页面链接的时候，直接分享当前页面
    $.ajax({
        url:getWXConfig,
        type:"post",
        data:{"url":dqUrl},
        dataType:"json",
        success:function(data){
            wx.config({
                debug : false,
                appId : data.data.appId, // 必填，appID公众号的唯一标识
                timestamp : data.data.timestamp, // 必填，生成签名的时间戳
                nonceStr : data.data.nonceStr, // 必填，生成签名的随机串
                signature :data.data.signature,// 必填，签名，见附录1
                jsApiList : ['onMenuShareAppMessage','onMenuShareTimeline','onMenuShareQQ']
            }); 
            wx.ready(function() {
                var shareData = {
                    title: title, // 分享标题
                    desc: desc,
                    link: linkUrl, 
                    imgUrl: imgUrl, // 分享图标
                    type: 'link', // 分享类型,music、video或link，不填默认为link
                    success: function () { 
                        
                    },
                    cancel: function () { 
    
                    }
                }
                wx.onMenuShareAppMessage(shareData);
                wx.onMenuShareTimeline(shareData);
                wx.onMenuShareQQ(shareData);
            });     
        }
    });
}
```
### ubuntu安装最新版node和npm

1. 先在系统上安装好nodejs和npm
```ruby
sudo apt-get install nodejs-legacy
sudo apt-get install npm
```
2. 升级npm为最新版本
```ruby
sudo npm install npm@latest -g
```
3. 安装用于安装nodejs的模块n
 ```ruby
sudo npm install -g n
```
4. 通过n模块安装指定的nodejs
```ruby
sudo n latest
sudo n stable
sudo n lts
```
5. 查看版本
```ruby
sudo node -v
sudo npm -v
```

### 设置.ssh秘钥 方便无密码登录服务器
```ruby
cd
cd .ssh/
cat id_rsa.pub
windows系统
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC0f0GQAbsmAujPIt+ASahHh3VmH01Ykrx71xwwAZWVXYi4IB6Zf3yw9mNZZHgNLAoivKVB7S0WQsVkxpjPpeOOI+dyFIYbCpUgYkyTIgITUHD6+LNZOCGWQ0edztRDqaI97H2G92YwzkkYrUcZ+/Tl6AHCJI2uKgvbn4qmvZYBlZ+Q7pjNWkN5e+SkcKL8JaGuUQ1ZXTuntmfWCfweHr41+cGRTlIiC+nkcYEDFymqzrxC8oLaUDz6/WYHMomQi64cwzQWPn4ARlPdP5F/R7uJn0nibSqYLS3LnOdsHMOBJOHIyoNOUbZB0jqR6FPZ3dZ/ZxBSEVJVaQCmWIhZcj8B haoyulong@haotang365.com.cn
linix系统
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCxU/p3F610y4/Efj3kZpoyE3IePbIDnb9Wa7jk9TKNPnV33HnQ1bVqZt2CX9+cTF+trGSYNT/T8j5qoIyWU6YRTV9FzneRqz+BA9bR//ajqKhTHX0ZAENfDcQXXhHB+xm4P4NTuZnNDTZZyvFCIHBC7pEeC/A0uzvKx7tHn++vjOufdlswWmpmfDKZ5z9xXF4lnBI+C9yyDEoFrHOyH2QkBZt4FNrJyq7EtLYTnfZE0qYwTWdvcR7K0EohHXbPSb2jd5lPguEdumV8ypF2oy7+/kNX32iujwMO8ibptCSKpCt9pEWAnOdtU2OrK8EliZl+mBu8e6BVEqCmH6ZrWTT1 haoyulong@haotang365.com.cn

ssh root@192.168.0.248
cd
cd .ssh/
vi authorized_keys
```

### textarea 输入框限制字数（完美兼容）

```ruby
<textarea id="taContent" rows="3"  maxlength="20" onchange="this.value=this.value.substring(0, 20)" onkeydown="this.value=this.value.substring(0, 20)" onkeyup="this.value=this.value.substring(0, 20)" ></textarea>

1. 在input标签中，只需要设置maxlength=”***”即可，但是在textarea标签中，IE9及IE9以下浏览器是不支持的，IE10、IE11则支持，估计后续的版本应该都会支持。
2. 备注：onchange、onkeydown、onkeyu三者缺一不可。
如省略onchange，当你用负责功能，此时一直按着ctrl不松开，鼠标去点击其他地方（焦点移出textarea）时，不会自动取消超出部分；
如省略onkeydown，猛敲的时候会有很多个字符突然不见了；
如省略onkeyup，原想预计20的情况下，会变成21，并且最后一个字符是最后敲进去的。
Maxlength 也不可省略，加上maxlength 当碰到IE10及以上版本时，可以完美的实现限制输入框字数的功能。不想其他低版本的IE浏览器还可以出现一个字母后消失。
```
### 设置placeholder样式
```css
 input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
　　color: #666;font-size:16px;
　　}
```
### 判断手机是否是 iphone X 
```js
isIPhoneX(fn){
            var u = navigator.userAgent;
            var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if (isIOS) {        
                if (screen.height == 812 && screen.width == 375){
                    console.log('yes');
                    console.log(screen);
                }else{
                    //不是iphoneX
                    console.log(screen);
                } 
            }
        },
```