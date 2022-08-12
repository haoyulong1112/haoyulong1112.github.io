### JS笔记

### 测试一下
我是测试哈哈
### ridio 单选框的值html如下：

```js
    <input type='radio'  name='sex'  value='男' >

    <input type='radio'  name='sex'  value='女' checked='checked'>
    

### 获取单选按钮中选中的值

```js
    $('input:radio[name="sex"]:checked').val();       
    //值为“女”

### 时间选择器(过滤器) 
```js
yyyy:mm:dd hh:ii:ss 
```
### 监听change变化  有的时候需要从页面初始化的时候开始监控  

#### 获取URL某个字符串值  commonClass.getRequest().cardTemplateId;

#### 初始化时间选择器  设置时分秒  
```js
    datepickerClass.init("js-p-coupon-couponsend-selecttime",
    {
        hideEnd:true,format:"yyyy-mm-dd hh:ii:00",minView:"hour",setStartDateForBegin:new Date()
    });
```
#### setStartDateForBegin：xxx 设置选择时间限制 

### jsdom操作命名  js-p-文件夹名-文件名-操作名

### class样式 p-文件夹名-文件名-操作名

#### 获取URL中某个参数值
```js
    var activityId = window.location.search.substr(1).split("&")[1].split('=')[1];

#### decodeURI解码
```
```js
    decodeURIComponent('\u64cd\u4f5c\u5931\u8d25')   
```   
### jQuery获取属性值
    
```js
    $("xxx").prop("属性");
```
### 模板渲染时分固定个数为一行或者一列时
```js
    for(var j in dataset){
        var tr = ''
        if (j>0 && j%5==0 && j!=dataset.length) {
            tr = '</tr><tr>'
        }
        $tabletpltrs += tr + '<td class="text-center"'+ 'data-workerid="'+dataset[j].id+'">'+dataset[j].num+'</td>'
    }
```
### bootstrap模态框显示

```js
$xxx.modal('show');
```
### 全局变量可以在函数作用域中读到

### 时间选择器初始化

条件：隐藏后面选择框并显示时间到分钟
```js
datepickerClass.init(timeDateid, {
            hideEnd: true, format: 'yyyy-mm-dd hh:ii:00',
            startView: 0,
            minView: 0
       });
```
更改输入框中的placeholder
```js
方法一：
xxx.attr("placeholder","aaa");

```
### 封装组件
1. 整理思路
2. 填写每一步代码
3. 实现测试
4. 整理优化


### 排序(正序、倒序)
```js
    var sortText = $.trim(commonClass.getRequest().orderByClause);
    var sortNum = $.trim(commonClass.getRequest().orderByClauseSort);
    var $sortContent = $(".js-p-encyclopedias-baikelist-sort");
    $sortContent.each(function(i,ele){
         if($(ele).data("content") == sortText){
             if(sortNum == 0){
                 $(ele).children(".js-p-encyclopedias-baikelist-sortup").css("color","#CCCCCC");
                 $(ele).children(".js-p-encyclopedias-baikelist-sortup").unbind("click");
             }else{
                 $(ele).children(".js-p-encyclopedias-baikelist-sortdown").css("color","#CCCCCC");
                 $(ele).children(".js-p-encyclopedias-baikelist-sortdown").unbind("click");
             }
         }
     })
     //正序
    $(".js-p-encyclopedias-baikelist-sortup").click(function(){

         var tSort = 0;
         var orderByClause = $(this).parent().data('content');
         if(orderByClause == sortText){
             if(sortNum == tSort){
                 return;
             }
         }
         search(orderByClause,tSort);
     })
     //倒序
     $(".js-p-encyclopedias-baikelist-sortdown").click(function(){
         var tSort = 1;
         var orderByClause = $(this).parent().data('content');
         if(orderByClause == sortText){
             if(sortNum == tSort){
                 return;
         }
         }
         search(orderByClause,tSort);
     })
```

### 表格
表格中居中对齐
```html
.table>thead>tr>th {
    vertical-align: middle;
}

合并上下两个表格
<th rowspan="2" class="text-center">活动日期</th>
合并左右两个表格
<th colspan="2" class="text-center">邀请人</th>
```

#### 改bootstraps输入框默认样式禁止获取焦点跳动
```css
input{
    max-width: 125px;
    height: auto!important;
    margin-bottom: 0;
    padding: 6px 12px;
}
```

### jQuery用each遍历时不从i=0开始
```js
$.each(arr, function(i, elem) {
    if(i != 0) {
        console.log(i, elem);
    }
})
```
### js中将PHP数组转换成json格式
```js
window.$timeList = {%json_encode($timeList)%};
```


### 带#号的字符串拼接到URL中
1. 前台进行encode编码 encodeURIComponent();
2. PHP后台解码urldecode();

#### $.trim() jQuery去除首尾空格

#### 获取URL地址中某个字段值
```js
var sortnum = ==commonClass.getRequest().xxx==;
```
#### 引入上传图片组件webuploader
```js
1. 页面引入组件
{%widget name="home:widget/mis/common/webuploader.tpl" domain=$javaDomain wrapid="js-p-activity-activityedit-titlePic" uploadlist=$activityBgPic%},
2. js中定义
webuploaderClass = require("home.widget.mis.common.js.webuploader")，引入js方法
3. 初始化图片上传方法 
webuploaderClass.loadInitUploadOSS("#js-p-activity-activityinfodetail-banner", null, 100, { server: '/upload/uploadFileToOSS', fType: 14, fileNumLimit: 1 });
```
#### 去掉字符串最后一位
```js
    text.substring(0, text.length - 1);
```
#### jQuery对象转换为dom对象
```js
    $xxx.get(0)即变为dom
```
#### jQuery 选择器筛选某个元素时可用not去掉某个元素
```js
    $xxx.not('aaa')；
```
#### 去掉数组中含有与某个数组相同元素
```js
 function getPet(obj) {
        var text = getCheckedBoxs(obj).split(",");
        var arr = ["1", "2", "3", "4"];
        var newArr = [];
        for (var i = 0; i < text.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                if (arr.indexOf(text[i]) !== -1) {
                    newArr.push(text[i]);
                    text.splice(i, 1);
                }
            }
        }
        newArr = newArr.join(',');
        text = text.join(',');
        return {
            petSize: newArr,
            petStyle: text
        };
    }
```
#### 初始化时间选择器获取输入框中的时间值
```js
// 初始化时间选择器
    datepickerClass.init("js-p-coupon-couponedit-date", {
        changeDate: function (type, date) {
            //获取开始时间
            if (type == 1) {
                dateStart = date;
            }
            //获取结束时间
            if (type == 2) {
                dateEnd = date;
            }
            //获取结束时间和开始时间的时间差最后换算成天数
            var nDays = Math.abs(parseInt((dateEnd - dateStart) / 1000 / 3600 / 24));
            //获取选择框列表
            var $inputList = $(".js-p-coupon-weekday");
            //判断当开始时间和结束时间都存在且时间差小于7天时
            if (dateStart && dateEnd && nDays < 7) {
                //先将所有选择框隐藏
                $inputList.each(function (i, ele) {
                    $(ele).addClass("hide");
                });
                //获取开始时间和结束时间的相应周几
                var dateStartWeek = dateStart.getDay();
                var dateEndWeek = dateEnd.getDay();
                //分两种情况 1.结束周几大于开始周几
                if (dateEndWeek > dateStartWeek) {
                    $inputList.each(function (i, ele) {
                        //将相应的周几显示出来
                        if (i >= dateStartWeek && i <= dateEndWeek) {
                            $(ele).removeClass("hide");
                        }
                    });
                } else if (dateEndWeek < dateStartWeek) {  //2.结束周几小于开始周几
                    //先显示结束周几之前的
                    $inputList.each(function (i, ele) {
                        if (i <= dateEndWeek) {
                            $(ele).removeClass("hide");
                        }
                    });
                    //再显示开始周几之后的
                    $inputList.each(function (i, ele) {
                        if (i >= dateStartWeek) {
                            $(ele).removeClass("hide");
                        }
                    });
                }
            } else if (dateStart && dateEnd && nDays >= 7) { //判断当开始时间和结束时间都存在且时间差大于7天时
                $inputList.each(function (i, ele) {
                    $(ele).removeClass("hide");
                });
            }
        }
    });
```
#### 获取多选框中的值
```js
//店家多选框时输入框显示点击的文字
    function checkboxBtn(arr) {
        var text = "仅限";
        arr.each(function (i, ele) {
            if ($(ele).children("input").prop("checked") == true) {
                var eletext = $(ele).text();
                if (eletext == '全部小型' || eletext == '全部大型' || eletext == '全部中型' || eletext == '全部巨型' || eletext == '全选') {
                    eletext = '';
                } else {
                    eletext = eletext + '、';
                }
                text += eletext;
            }
        })
        text = text.substring(0, text.length - 1) + "可用";
        if (text == '仅可用') {
            text = '';
        }
        return text;
    }
```

#### 多级联动选择框
1. 二级以及后面的下拉框需要有上一级下拉框数据的标识
2. 二级之后的下拉框数据全部遍历出来之后隐藏
3. 当选择当级的选择框是，则下级下拉框中有对应的标识的选项显示出来
```js
 function initareaList(code){
        $xxx.find("option").each(function(i,ele){
            if(i != 0){
                if(code == ''){
                    $(ele).addClass("hide");
                }
                if($(ele).data("xxx") == code){
                    $(this).removeClass("hide"); 
                }else{
                    $(this).addClass("hide");
                }
            }
        })
    }
```
#### 截取字符串
```js
inputText.substring(0, inputText.length - 1)
```
#### jQuery全选反选
```js
$('.checkallbtn').click(function(){
		var checked = $(this).prop('checked');
		var $checkboxList = $(this).parent().siblings().children();
		$checkboxList.each(function(i,ele){
			if(checked == true){
				$(ele).prop('checked',true);
			}else{
				$(ele).prop('checked',false);
			}
		})
	})
	$('.checkboxitem').click(function(){
		var $checkboxs = $('.all').not(":first");
		var flag = true;
		$checkboxs.each(function(i,ele){
			if($(ele).children().prop('checked') !== true){
				flag = false;
				return false;
			}
		})
			if(flag){
				$('.all').each(function(i,ele){
					$(ele).children().prop('checked',true);
				})
			}else{
				$('.checkallbtn').prop('checked',false)
			}
	});
```
```html
    <label class="all" for="way">
        <input class="checkallbtn" id="way" name="way" type="checkbox">全选
    </label>
	<label class="all" for="chinese">
        <input class="checkboxitem" id="chinese" name="way" type="checkbox">语文
    </label>
	<label class="all" for="math">
        <input class="checkboxitem" id="math" name="way" type="checkbox">数学
    </label>
	<label class="all" for="english">
        <input class="checkboxitem" id="english" name="way" type="checkbox">英语
    </label>
```
#### 筛选数组中相同的元素
```js
//获取宠物狗id
    function getPet(obj) {
        var text = getCheckedBoxs(obj).split(",");
        var arr = ["1", "2", "3", "4"];
        var newArr = [];
        for (var i = 0; i < text.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                if (arr.indexOf(text[i]) !== -1) {
                    newArr.push(text[i]);
                    text.splice(i, 1);
                }
            }
        }
        newArr = newArr.join(',');
        text = text.join(',');
        return {
            petSize: newArr,
            petStyle: text
        };
    }
```
### argument特点

```ruby
类数组 特点：length;存储按0,1,2顺序；可以像数组一样遍历
她的元素是调用传的是实参 （this就是调用函数的对象）
function fn (a,b) {} // 形参
fn(1,2)// 1,2实参
```
### promise
```ruby
var p = new Promise((resolve,reject)=>{
    var success = '成功条件'
    var data = 成功返回结果
    var error = 错误信息
    if (success) {
        resolve(data)
    } esle {
        reject(error)
    }
})
1. 实例化一个promise 传一个函数作为参数 这个参数会立即执行 
2. 这个函数内部可用resolve来标记成功，reject来标记失败 并且向外传递信息
3. 
三种状态
pending（进行中）、fulfilled（已成功）和rejected（已失败）

promise状态可以监听不可更改
p.then().catch()
```
### 使用promise

1. 为了不写回调地域
2. promise链式调用

### 判断是否是微信还是安卓客户端
```js
    isAndriodWeiXin () {
        let o = navigator.userAgent.toLowerCase()
        let s = o.indexOf('micromessenger') > -1
        let a = o.indexOf('android') > -1
        if (s && a) {
            return true
        } else {
            return false
        }
    },
```
### 微信中退出全屏关闭页面

```js
    returnAllScreen () {
        WeixinJSBridge.call('closeWindow');
    }
```
### 全选反选

```ruby
    <label class="all" for="way">
        <input class="checkallbtn" id="way" name="way" type="checkbox">全选
    </label>
	<label class="all" for="chinese">
        <input class="checkboxitem" id="chinese" name="way" type="checkbox">语文
    </label>
	<label class="all" for="math">
        <input class="checkboxitem" id="math" name="way" type="checkbox">数学
    </label>
	<label class="all" for="english">
        <input class="checkboxitem" id="english" name="way" type="checkbox">英语
    </label>
    
    jquery 方法
    $('.checkallbtn').click(function(){
		var checked = $(this).prop('checked');
		var $checkboxList = $(this).parent().siblings().children();
		$checkboxList.each(function(i,ele){
			if(checked == true){
				$(ele).prop('checked',true);
			}else{
				$(ele).prop('checked',false);
			}
		})
	})
	$('.checkboxitem').click(function(){
		var $checkboxs = $('.all').not(":first");
		var flag = true;
		$checkboxs.each(function(i,ele){
			if($(ele).children().prop('checked') !== true){
				flag = false;
				return false;
			}
		})
		if(flag){
			$('.all').each(function(i,ele){
				$('.checkallbtn').prop('checked',true);
			})
		}else{
			$('.checkallbtn').prop('checked',false)
		}
	});
	
	js方法
```
### 点击提交 需要阻断多次点击触发提交

### QRCode生成二维码
```js
<script type="text/javascript" src="//apps.bdimg.com/libs/jquery/1.11.3/jquery.min.js">
</script>
<script src="//ku.shouce.ren/libs/qrcodejs/qrcode.min.js">
</script>
<div id="qrcode_2"></div>
(function(){
		new QRCode(document.getElementById('qrcode_1'), 'your content');
})();
(function() {
	var qrcode = new QRCode('qrcode_2', {
		text: 'your content',
		width: 256,
		height: 256,
		colorDark : '#000000',
		colorLight : '#ffffff',
		correctLevel : QRCode.CorrectLevel.H
	});
})()
```