<template>
    <div class="des">
        <div class="item">
            <div class="title">项目搭建</div>
            <div class="sub">首先本人在墨刀用邮箱新注册了一个账号,来嫖30天免费试用简单画了原型。项目用vue-cli3搭建脚手架,实现组件化,采用vue2和vue3混写的方式,哪个不好使就换另一个
            </div>
        </div>
        <div class="item">
            <div class="title">CSS样式</div>
            <div class="sub">灵活使用px vw 百分比单位来布局,实现薛定谔的响应式布局,崩不崩坏全看设备</div>
        </div>
        <div class="item">
            <div class="title">JS相关</div>
            <div class="sub">js主要是写vue中的路由，传参，调用api并用Promise封装axios请求。js也动态获取图片创建dom，我很欣慰。</div>
        </div>
        <div class="item">
            <div class="title">Api相关</div>
            <div class="sub">在qq上发现的api，一路找到人家官网，vue这发请求跨域，啥解决方案也不好使，于是自己写了一个node程序做代理，这回是同源了</div>
        </div>
        <div class="item">
            <div class="title">CSS相关</div>
            <div class="sub">一点简单的css?还不是要实现啥就搜啥，面向csdn编程。</div>
        </div>
        <div class="item">
            <div class="title">服务器</div>
            <div class="sub">服务器挂两个用来代理请求的api:美图api和saucenao搜图api，可以获取美图的同时获取图片详情，比如画师。用yarn serve把项目挂在服务器80端口，这样网址写服务器ip地址就可以了。bulid会出一个问题，是一个项目中隐含的路由传参问题，路由参数不可出现/，域名也是因为这个用不了。</div>
        </div>
        <div class="item">
            <div class="title">Bug相关</div>
            <div class="sub">确实出过好几个bug，比如代理api没有接收到搜图次数达到上限相关的处理，就直接炸，还得重启。还好最后都差不多解决了，可能还有隐含问题，但我不能再看了，因为再看一眼就会爆炸</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.des {
    width: 70%;
    margin: 30px auto;


    .item {
        background-color: #fff;
        padding: 10px;
        margin-bottom: 30px;
        border-radius: 10px;


        .title {
            margin: 15px;
            font-size: 20px;
            line-height: 40px;
            font-weight: 500;
            margin-left: 25px;

        }

        .sub {
            margin: 15px;
            font-size: 16px;
            margin-left: 25px;
        }
    }

}
</style>