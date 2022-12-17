<template>
    <div class="main">
        <div>
            手机看个锤子
        </div>
        <div class="small">
            请用电脑访问以下页面
        </div>
        <div class="link">
            http://1.117.61.181/
        </div>
        <div class="button" @click="state.copyToClipBoard">
            点击复制
        </div>
    </div>

</template>

<script>
import { reactive } from 'vue';


export default {
    setup() {
        const state = reactive({

            copyToClipBoard() {

                let content = 'http://1.117.61.181/'

                let copyInput = document.createElement('input');//创建input元素
                document.body.appendChild(copyInput);//向页面底部追加输入框
                copyInput.setAttribute('value', content);//添加属性，将url赋值给input元素的value属性
                copyInput.select();//选择input元素
                document.execCommand("Copy");//执行复制命令
                //复制之后再删除元素，否则无法成功赋值
                copyInput.remove();//删除动态创建的节点



                alert("复制成功!");
            }

        })

        return { state }
    }

}


</script>

<style lang="less" scoped>
.main {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 30px;
}
div{
    margin-top: 30px;
}

.link{
    margin: 30px auto 30px;
    width: 50%;
    border: 1px solid #000;
    background-color: #fff;
}

.small{
    font-size: 10px;
}

.button{
    cursor: pointer;
    color: #dd7694;
    display: inline-block;
}
</style>