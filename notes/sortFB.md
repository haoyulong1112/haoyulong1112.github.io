### 封装正序倒序组件

#### html部分代码
```html
{%*正序倒序*%}
{%require name="home:widget/mis/common/js/sortupordown.js"%}
{%require name="home:widget/mis/common/css/sortupordown.css"%}
{%script%}
    require("home.widget.mis.common.js.sortupordown");
{%/script%}
{%strip%}
    <div class="js-b-common-sort clearfix">
        <a href="javascript:;" class="glyphicon glyphicon-chevron-up js-b-common-sortup"></a>
        <a href="javascript:;" class="glyphicon glyphicon-chevron-down js-b-common-sortdown"></a>
    </div>
{%/strip%}
```
#### css部分代码
```css
.js-b-common-sort{
    display: inline-block;
    position: relative;
    top: 7px;
    left: 2px;
    width: 12px;
}
.js-b-common-sort a{
    float: left;
    text-decoration: none;
}
.js-b-common-sort .glyphicon{
    font-size: 12px;
}
.js-b-common-sort .glyphicon-chevron-down{
    top:-2px;
}
```
#### js 部分代码
```javascript
define('home.widget.mis.common.js.sortupordown',function() {
    var commonClass = require("common.static.js.mis.common");
    var sortupordownClass = {
        init : function(sortfield,sortorder ,forwardnum,reversenum){
           //排序 获取URL地址中 相关字段的值
        var sortText = commonClass.getRequest()[''+sortfield];
        var sortNum = commonClass.getRequest()[''+sortorder];
        //获取页面所有组件dom
        var $sortContent = $(".js-b-common-sort");
        //循环遍历
        $sortContent.each(function(i,ele){
            //当URL地址中的字段值和排序的值相等时排序icon颜色变灰
            if($(ele).parent().data("content") == sortText){
                if(sortNum == 0){
                    $(ele).children(".js-b-common-sortup").css("color","#CCCCCC");
                }else{
                    $(ele).children(".js-b-common-sortdown").css("color","#CCCCCC");
                }
            }
        })
        //正序
        $(".js-b-common-sortup").click(function(){
            //获取点击排序的字段值
            var sortContent = $(this).parent().parent().data('content');
            if(sortContent == sortText){
                if(sortNum == forwardnum){
                    //如果sortContent和URL中的字段值sortText相等且排序顺序sortNum == forwardnum，就使点击事件失效
                    return;
                }
            }
            search(sortContent,forwardnum);
        })
        //倒序
        $(".js-b-common-sortdown").click(function(){
            var sortContent = $(this).parent().parent().data('content');
            if(sortContent == sortText){
                if(sortNum == reversenum){
                    return;
                }
            }
            search(sortContent,reversenum);
        })

        //searh排序方法
        function search(a,b) {
            var data = {};
            if(!a){
                data[sortfield] = '';
            }else{
                data[sortfield] = a;
            }
            if(b === false){
                data[sortorder] = '';
            }else{
                data[sortorder] = b;
            }
            // return;
            var result = commonClass.upUrlParam(data);
            window.location.href = result;
        };
        }
    };
    return sortupordownClass;
});
```